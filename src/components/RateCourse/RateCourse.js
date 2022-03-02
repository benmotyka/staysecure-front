import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { Label } from "components/Cards/Cards.styles";

import {
  Wrapper,
  Header,
  Star,
  Input
} from "./RateCourse.styles";
import { useRef } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const RateCourse = () => {
  const ref = useRef();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  
  useOnClickOutside(ref, () => setShowModal(false));

  const sendData = () => {
    console.log(comment)
    console.log(stars)
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
            <Header>{t("rateCourse")}</Header>
            <div>
              {[...Array(5)].map((item, index) => (
                <Star active={index <= stars} key={index} onClick={() => setStars(index)}/>
              ))}
            </div>
            <Label htmlFor="comment">{t("comment")}</Label>
            <Input 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="comment" 
            type="text" 
            spellCheck="false" />
            <Button onClick={sendData} noArrow text={t("sendFeedback")} />
          </Wrapper>
        </Modal>
      ) : null}
    </>
  );
};

export default RateCourse;
