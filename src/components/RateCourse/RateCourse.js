import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import axios from "axios";
import { Label } from "components/Cards/Cards.styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Wrapper, Header, Star } from "./RateCourse.styles";
import { useRef } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import BasicTextarea from "components/BasicTextarea/BasicTextarea";
import { useLogin } from "store/actions/user";
import FadeIn from "components/FadeIn/FadeIn";

const RateCourse = (props) => {
  const ref = useRef();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(null);
  const [finish, setFinish] = useState(false);
  const { userDetails } = useLogin();

  useOnClickOutside(ref, () => setShowModal(false));

  const onSubmit = ({ comment }) => {
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
                Authorization: `Bearer ${userDetails.token}`,
              },
            });
          } catch (error) {
            console.log(error);
          } finally {
            props.setShowRateButton(false);
          }
        });
    });
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      comment: Yup.string(),
    }),
    onSubmit,
  });

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        noArrow
        text={t("rateCourse")}
      />
      <FadeIn in={showModal}>
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
                <BasicTextarea
                  id="comment"
                  placeholder={t("enterComment")}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  onBlur={formik.handleBlur}
                />
                <Button
                  onClick={formik.handleSubmit}
                  noArrow
                  text={t("sendFeedback")}
                />
              </>
            )}
          </Wrapper>
        </Modal>
      </FadeIn>
    </>
  );
};

export default RateCourse;
