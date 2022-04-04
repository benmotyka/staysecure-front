import Button from "components/Button/Button";
import { useHistory } from "react-router-dom";

import { Container, Section, Header, Description } from "./Course.styles";
const ListItem = ({
  children,
  header,
  description,
  green,
  buttonText,
  buttonLink,
}) => {
  const history = useHistory();

  return (
    <Container>
      <Section>
        <Header>{header}</Header>
        {children ? (
          children
        ) : (
          <Description>
            {description.substr(0, 215)}
            {description.length > 215 ? "..." : ""}
          </Description>
        )}
      </Section>
      <Section alignRight>
        <Button
          green={green}
          text={buttonText}
          onClick={() => {
            history.push(`${buttonLink}`);
          }}
        />
      </Section>
    </Container>
  );
};

export default ListItem;
