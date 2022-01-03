import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
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
  MessageNotification,
  SmsApp,
  SmsHeader,
  SmsBack,
  SmsAvatar,
  SmsHeaderText,
  SmsMessage,
  SmsMessageContent,
  SmsLink,
  WebpageApp,
  WebPageText,
  WebPageItem,
  WebPageSeparator,
  WebPagePaymentMethod,
  WebPagePaymentMethodsList,
  WebPageLogo,
  WebPageNavigatorContainer,
  WebPageInput,
  RedLock
} from "components/Iphone/Iphone.styles";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const PhishingEnterSimulation = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const [clickMessages, setClickMessages] = useState(false);
  const [clickSms, setClickSms] = useState(true);
  const [clickPage, setClickPage] = useState(false)

  return (
    <Container>
      <Iphone onClick={setClickMessages} onClick2={setClickSms} onClick3={setClickPage}>
        {clickMessages && (
          <MessagesApp>
            <MessagesHeaderContainer>
              <MessagesHeader>Wiadomości</MessagesHeader>
              <MessagesSearch placeholder="Szukaj" />
            </MessagesHeaderContainer>

            <MessagesList>
              <MessageItem  onClick={() => {
                    setClickSms(true)
                    }}>
                <MessageAvatar src="iphone/messages-avatar.png" />
                <MessageNotification />
                <MessageDetails>
                  <MessageHeader>
                    Poczta Polska
                    <MessageHeaderDate>20.12.2021 &gt;</MessageHeaderDate>
                  </MessageHeader>
                  <MessageContent>
                    Drogi kliencie, informujemy, że Twoja przesyłka oczekuje na
                    do...
                  </MessageContent>
                </MessageDetails>
              </MessageItem>
            </MessagesList>
          </MessagesApp>
        )}
        {clickSms && (
          <SmsApp>
            <SmsHeader>
              <SmsBack onClick={() => setClickSms(false)}>&lt;</SmsBack>
              <SmsAvatar src="iphone/messages-avatar.png"/>
              <SmsHeaderText>Poczta Polska</SmsHeaderText>
            </SmsHeader>
            <SmsMessage>
              <SmsMessageContent>
            Drogi kliencie,<br/><br/> informujemy, że Twoja przesyłka oczekuje na doręczenie.<br/>Potwierdź płatność w wysokości 0.72 PLN, klikając poniższy link:<br/><br/>
            <SmsLink onClick={() => {
                    setClickPage(true);
                    props.setWaitForCorrectAnswer(false);
            }} >https://poczta-p0lska.pl/p/7YF1U51B</SmsLink><br/><br/>
            Z poważaniem,<br/>
            Poczta Polska
            </SmsMessageContent>
            </SmsMessage>
          </SmsApp>
        )}
        {clickPage && (
            <WebpageApp>
                <WebPageLogo src="payment_methods/dotpay.jpg"/>
                <WebPageSeparator>
                <WebPageText>Informacje o płatności</WebPageText>
                </WebPageSeparator>
                <WebPageItem >
                    <WebPageText>
                        Odbiorca: Mjpqoz Inc.<br/>
                        Opis: Order 1348013
                    </WebPageText>
                    <WebPageText>
                        Kwota: 72 PLN
                    </WebPageText>
                </WebPageItem>
                <WebPageSeparator>
                <WebPageText>Wybrana metoda płatności:</WebPageText>
                </WebPageSeparator>
                <WebPagePaymentMethodsList>
                <WebPagePaymentMethod src="payment_methods/blik.png"/>
                <WebPagePaymentMethod src="payment_methods/mbank.png"/>
                <WebPagePaymentMethod src="payment_methods/pekao.png"/>
                </WebPagePaymentMethodsList>
                <WebPageNavigatorContainer>
          <WebPageInput disabled placeholder="https://poczta-p0lska.pl/p/7YF1U51B"/>
          <RedLock/>
                </WebPageNavigatorContainer>
            </WebpageApp>
        )}
      </Iphone>
    </Container>
  );
};

export default PhishingEnterSimulation;
