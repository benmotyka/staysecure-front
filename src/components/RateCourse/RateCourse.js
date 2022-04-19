import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import axios from "axios";
import { Label } from "components/Cards/Cards.styles";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";

import { Wrapper, Header, Star, Textarea } from "./RateCourse.styles";
import { useRef } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const RateCourse = (props) => {
  const ref = useRef();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState("");
  const [finish, setFinish] = useState(false);

  const user = useSelector(selectUser);

  useOnClickOutside(ref, () => setShowModal(false));

  const sendData = () => {
    if (!stars) {
      return;
    }
    setFinish(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          const requestBody = {
            query: `
            mutation RateCourse($courseName: String!, $rate: Int!, $comment: String, $captcha: String!){ 
            rateCourse(courseName: $courseName, rate: $rate, comment: $comment, captchaToken: $captcha) {
              resultStatus
            }
          }  
          `,
            variables: {
              rate: stars,
              comment,
              captcha: token,
              courseName: props.courseName,
            },
          };
          try {
            await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
          } catch (error) {
            console.log(error);
          } finally {
            props.setShowRateButton(false)
          }
        });
    });
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        noArrow
        text={t("rateCourse")}
      />
      {showModal ? (
        <Modal>
          <Wrapper ref={ref}>
            {finish ? (
              <Header>{t("feedbackSent")}!</Header>
            ) : (
              <>
                <Header>{t("rateCourse")}</Header>
                <div>
                  {[...Array(5)].map((item, index) => (
                    <Star
                      active={index < stars}
                      key={index}
                      onClick={() => setStars(index + 1)}
                    />
                  ))}
                </div>
                <Label htmlFor="comment">{t("comment")}</Label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  id="comment"
                  type="text"
                />
                <Button onClick={sendData} noArrow text={t("sendFeedback")} />
              </>
            )}
          </Wrapper>
        </Modal>
      ) : null}
    </>
  );
};

export default RateCourse;
