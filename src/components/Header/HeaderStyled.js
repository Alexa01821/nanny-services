import styled from "styled-components";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 12;
  background-color: ${(props) =>
    props.current ? "transparent" : "var(--bg-accent)"};

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1184px;
    height: 88px;
    margin: 0 auto;
    padding: 20px;
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
      gap: 40px;

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
