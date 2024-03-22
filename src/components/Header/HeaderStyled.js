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
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  .header-container {
    display: flex;
    align-items: center;
    max-width: 1440px;
    padding: 20px 96px;
    @media screen and (min-width: 1024px) {
      gap: ${(props) => (props.current ? "200px" : "150px")};
    }

    .logo {
      font-weight: 500;
      font-size: 24px;
      line-height: 117%;
      letter-spacing: -0.02em;
      color: var(--color-text-white);
    }

    .nav-list {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 16px;
      @media screen and (min-width: 768px) {
        gap: 40px;
      }

      .nav-item {
        a {
          position: relative;
          font-weight: 400;
          font-size: 16px;
          line-height: 125%;
          letter-spacing: -0.01em;
          color: var(--color-text-white);
          transition: font-size var(--transition);

          &:hover,
          &:focus {
            font-size: 20px;
          }
          &.active::after {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            left: 50%;
            right: -50%;
            top: 24px;
            bottom: -24px;
            background-color: var(--color-text-white);
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
