import styled from "styled-components";

const HeaderStyled = styled.header`
  position: ${(props) => (props.current ? "fixed" : "sticky")};
  top: ${(props) => (props.current ? "32px" : "0")};
  z-index: 12;
  width: 100%;
  background-color: ${(props) =>
    props.current ? "transparent" : "var(--bg-accent)"};
  border-bottom: ${(props) =>
    props.current ? "1px solid var(--color-text-white)" : "none"};

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
    margin: 0 auto;
    gap: 10px;
    @media screen and (min-width: 1240px) {
      padding: 20px 96px;
    }

    .logo {
      font-weight: 500;
      font-size: 24px;
      line-height: 117%;
      letter-spacing: -0.02em;
      color: var(--color-text-white);
    }
  }
`;

export default HeaderStyled;
