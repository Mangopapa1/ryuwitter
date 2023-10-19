import styled from "styled-components";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text></Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-size: 24px;
`;
