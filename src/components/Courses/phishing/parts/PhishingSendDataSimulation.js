import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Iphone from "components/Iphone/Iphone";
import { useTranslation } from "react-i18next";

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
  RedLock,
  BankpageApp,
  BankpageInput,
  BankpageLabel,
  BankpageInputContainer,
} from "components/Iphone/Iphone.styles";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const PhishingSendDataSimulation = (props) => {
  useEffect(() => {
    if(props.setWaitForCorrectAnswer) props.setWaitForCorrectAnswer(true);
  }, []);
  const [clickMessages, setClickMessages] = useState(false);
  const [clickSms, setClickSms] = useState(false);
  const [clickPage, setClickPage] = useState(true);
  const [clickBankPage, setClickBankPage] = useState(false);

  const [bankPageDetails, setBankPageDetails] = useState({
    imagePath: null,
    url: null,
  });

  const {t} = useTranslation()

  const paymentMethods = [
    { logo: "payment_methods/millenium.png", url: "millenium" },
    { logo: "payment_methods/mbank.png", url: "mbank" },
    { logo: "payment_methods/pekao.png", url: "pekao" },
    { logo: "payment_methods/ipko.png", url: "ipko" },
    { logo: "payment_methods/bank-pocztowy.jpg", url: "bank-pocztowy" },
  ];
  return (
    <Container>
      <Iphone
        onClickFunctions={[
          setClickMessages,
          setClickSms,
          setClickPage,
          setClickBankPage,
        ]}
        onClickMessages={setClickMessages}
      >
        {clickMessages && (
          <MessagesApp>
            <MessagesHeaderContainer>
              <MessagesHeader>{t('courses.phishing.messages')}</MessagesHeader>
              <MessagesSearch placeholder="Szukaj" />
            </MessagesHeaderContainer>

            <MessagesList>
              <MessageItem
                onClick={() => {
                  setClickSms(true);
                }}
              >
                <MessageAvatar src="iphone/messages-avatar.png" />
                <MessageNotification />
                <MessageDetails>
                  <MessageHeader>
                    Poczta Polska
                    <MessageHeaderDate>20.12.2021 &gt;</MessageHeaderDate>
                  </MessageHeader>
                  <MessageContent>
                  {t('courses.phishing.smsContentShort')}
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
              <SmsAvatar src="iphone/messages-avatar.png" />
              <SmsHeaderText>Poczta Polska</SmsHeaderText>
            </SmsHeader>
            <SmsMessage>
              <SmsMessageContent>
              {t('courses.phishing.smsPart1')}
                <br />
                <br />
                {t('courses.phishing.smsPart2')}
                <br />
                {t('courses.phishing.smsPart3')}
                <br />
                <br />
                <SmsLink
                  onClick={() => {
                    setClickPage(true);
                  }}
                >
                  https://poczta-p0lska.pl/p/7YF1U51B
                </SmsLink>
                <br />
                <br />
                {t('courses.phishing.smsPart4')}
                <br />
                {t('courses.phishing.smsPart5')}
              </SmsMessageContent>
            </SmsMessage>
          </SmsApp>
        )}
        {clickPage && (
          <WebpageApp>
            <WebPageLogo src="payment_methods/dotpay.jpg" />
            <WebPageSeparator>
              <WebPageText>{t('courses.phishing.paymentInfo')}</WebPageText>
            </WebPageSeparator>
            <WebPageItem>
              <WebPageText>
              {t('courses.phishing.receiver')} Mjpqoz Inc.
                <br />
                {t('courses.phishing.description')} Order 1348013
              </WebPageText>
              <WebPageText>{t('courses.phishing.amount')} 72 PLN</WebPageText>
            </WebPageItem>
            <WebPageSeparator>
              <WebPageText>{t('courses.phishing.choosenPayment')}</WebPageText>
            </WebPageSeparator>
            <WebPagePaymentMethodsList>
              {paymentMethods.map((item, index) => (
                <WebPagePaymentMethod
                  key={index}
                  onClick={() => {
                    setClickBankPage(true);
                    setBankPageDetails({
                      imagePath: item.logo,
                      url: item.url,
                    });
                  }}
                  src={item.logo}
                />
              ))}
            </WebPagePaymentMethodsList>
            <WebPageNavigatorContainer>
              <WebPageInput
                disabled
                placeholder="https://poczta-p0lska.pl/p/7YF1U51B"
              />
              <RedLock />
            </WebPageNavigatorContainer>
          </WebpageApp>
        )}
        {clickBankPage && (
          <BankpageApp>
            <WebPageLogo src={bankPageDetails.imagePath} />
            <WebPageSeparator>
              <WebPageText>{t('courses.phishing.loginToService')}</WebPageText>
            </WebPageSeparator>
            <BankpageInputContainer>
              <BankpageLabel for="clientNumber">{t('courses.phishing.clientNumber')} </BankpageLabel>
              <BankpageInput
                min="0"
                type="number"
                id="clientNumber"
                name="clientNumber"
              />
              <BankpageLabel for="password">{t('courses.phishing.password')}</BankpageLabel>
              <BankpageInput
                min="0"
                type="password"
                id="password"
                name="password"
              />
              <BankpageInput type="button" value={t('courses.phishing.login')} onClick={() => props.setWaitForCorrectAnswer(false)}/>
            </BankpageInputContainer>
            <WebPageNavigatorContainer>
              <WebPageInput
                disabled
                placeholder={`https://${bankPageDetails.url}.xyqizqw.ru/platnosc/F3J289`}
              />
              <RedLock />
            </WebPageNavigatorContainer>
          </BankpageApp>
        )}
      </Iphone>
    </Container>
  );
};

export default PhishingSendDataSimulation;
