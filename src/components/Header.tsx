import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Team-nota</Title>
      </HeaderContainer>
    </>
  );
};

export default Header;
