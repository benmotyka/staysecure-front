import { Line } from 'components/PreviewItems/PreviewItems.styles';
import colors from 'constans/colors';
import styled, {css} from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
box-sizing: border-box;
padding: 10px 25px;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
`

const Header = styled.h3`
font-size: 20px;
text-align: center;
color: ${colors.white};
margin: 0 0 10px 0;
`

const Separator = styled(Line)`
margin: 0 0 15px 0;
`

const Description = styled.p`
font-size: 16px;
margin: 0;
color: ${colors.white};
opacity: 0.8;
`


const XssTypes = () => {
  return <Container>
      <Wrapper>
          <Header>Reflected XSS</Header>
          <Description>Najbardziej powszechny typ ataku. Stronę, która może być podatna na ten atak można rozpoznać po tym, że po przesłaniu treści w adresie URL, będzie ona wyświetlona na stronie. Przykładowo, po wejściu na stronę: <br/><br/><samp>http://staysecure.pl/wyszukiwanie?q=kurs+xss</samp><br/><br/>Na stronie, w DOM pojawi się tekst 'kurs xss'</Description>
      </Wrapper>
      <Separator/>
      <Wrapper>
      <Header>Stored XSS</Header>
      <Description>XSS działające po stronie serwera. Podatna aplikacja zapisze dane wejściowe od użytkownika, nie czyszcząc ich. Dane wejściowe mogą zawierać złośliwy skrypt. Kolejno, w momencie zwrócenia złośliwych danych do przeglądarki, wykona się złośliwy skrypt.</Description>
      </Wrapper>
      <Separator/>
      <Wrapper>
      <Header>DOM-based XSS</Header>
      <Description>Atak typu DOM based jest - jak sama nazwa mówi - ściśle powiązany z DOM. Działa podobnie do <strong>Reflected XSS</strong>, jednak złośliwe dane, które dostają się na stronę nie muszą być dostarczone żądaniem HTTP.</Description>

      </Wrapper>
  </Container>;
};

export default XssTypes;
