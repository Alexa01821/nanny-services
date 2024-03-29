import styled from "styled-components";

const HeaderStyled = styled.header`
  position: ${(props) => (props.current ? "fixed" : "sticky")};
  top: 0px;
  z-index: 12;
  width: 100%;
  background-color: ${(props) =>
    props.current ? "transparent" : "var(--bg-accent)"};
  border-bottom: ${(props) =>
    props.current ? "1px solid var(--color-text-white)" : "none"};
  .header-container {
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.current ? "space-around" : "space-between"};
    padding: 20px;
    margin: 0 auto;

    .logo {
      font-weight: 500;
      font-size: 24px;
      line-height: 117%;
      letter-spacing: -0.02em;
      color: var(--color-text-white);
    }
  }
  .menu-burger-mobil {
  }

  @media screen and (min-width: 768px) {
    top: ${(props) => (props.current ? "32px" : "0")};
    .header-container {
      width: 690px;
      .logo {
      }
    }
    .menu-btn {
      display: none;
    }
    .menu-burger-mobil {
      display: none;
    }
  }
  @media screen and (min-width: 1158px) {
    .header-container {
      width: 1100px;
      gap: 16px;
      padding: 20px 60px;

      .logo {
      }
    }
    .menu-btn {
      display: none;
    }
    .menu-burger-mobil {
      display: none;
    }
  }
`;

export default HeaderStyled;
