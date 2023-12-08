import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

function Coin() {
  const { coinId } = useParams();

  return <Title>Coin : {coinId}</Title>;
}

export default Coin;
