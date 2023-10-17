import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 25px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  justify-content: center;

  display: flex;
  gap: 50px;
  padding: 14px;

  background: linear-gradient(
    315deg,
    rgb(255 255 255 / 28%) 5%,
    rgb(58 28 28 / 70%) 38%,
    rgb(197 17 17 / 70%) 52%,
    rgb(38 36 35 / 52%) 73%
  );
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  // border-radius: 20px;
`;

export const NavItem = styled.li`
  span {
    color: #ffc700;
  }

  a:hover,
  a:focus {
    color: #ff0000;
    span {
      color: white;
    }
  }
`;
