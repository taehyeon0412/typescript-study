import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return <Title>Coin 목록 페이지</Title>;
}

export default Coins;
