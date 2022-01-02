import styled, { css } from "styled-components";
import { useState } from "react";
import colors from "constans/colors.js";
import Iphone from "components/Iphone/Iphone";
import {
  MessagesApp,
  MessagesHeaderContainer,
  MessagesHeader,
  MessagesSearch,
  MessagesList,
  MessageItem,
  MessageDetails,
  MessageAvatar,
  MessageHeader,
  MessageContent,
  MessageHeaderDate,
  MessageNotification
} from "components/Iphone/Iphone.styles";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const PhishingSimulation = () => {
  const [clickMessages, setClickMessages] = useState(false);
  const [clickSms, setClickSms] = useState(false)

  return (
    <Container>
      <Iphone onClick={setClickMessages}>
        {clickMessages && (
            <MessagesApp>
              <MessagesHeaderContainer>
                <MessagesHeader>Wiadomości</MessagesHeader>
                <MessagesSearch placeholder="Szukaj"/>
              </MessagesHeaderContainer>

                <MessagesList>
                  <MessageItem>
                    <MessageAvatar src="iphone/messages-avatar-black-bg.png"/>
                    <MessageNotification/>
                    <MessageDetails>
                    <MessageHeader>Poczta Polska<MessageHeaderDate>20.12.2021 &gt;</MessageHeaderDate></MessageHeader>
                    <MessageContent>Drogi kliencie, informujemy, że Twoja przesyłka oczekuje na doręczenie. P...</MessageContent>
                    </MessageDetails>
                  </MessageItem>
                </MessagesList>
            </MessagesApp>
        )}
        {clickSms && (
          <div></div>
        )}
      </Iphone>
    </Container>
  );
};

export default PhishingSimulation;
