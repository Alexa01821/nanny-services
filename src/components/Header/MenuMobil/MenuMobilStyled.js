import styled from "styled-components";
const MenuMobilStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100vw;
  height: 250px;
  background-color: var(--bg-accent);
  .menu-btn-burger {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .menu-burger-navigation {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 16px;

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
  .menu-burger-auth {
    display: flex;
    gap: 8px;
    .auth-item {
      height: 50px;
      border-radius: 30px;
      cursor: pointer;

      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--color-text-white);

      &:hover,
      &:focus {
        color: var(--bg-accent);
        background-color: var(--color-text-white);
      }
    }
    .log {
      width: 126px;
      padding: 14px 39px;
      border: 1px solid rgba(251, 251, 251, 0.4);
      background-color: ${(props) =>
        props.current ? "transparent" : "var(--bg-accent)"};
    }
    .reg {
      padding: 14px 40px;
      border: ${(props) =>
        props.current ? "none" : "1px solid rgba(251, 251, 251, 0.4)"};
      background-color: var(--bg-accent);
    }
  }
  .menu-burger-user {
    display: flex;
    align-items: center;
    gap: 24px;

    .user-inform-svg {
      display: flex;
      align-items: center;
      gap: 14px;

      .svg {
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 10px;
        fill: var(--color-accent);
        background-color: var(--color-text-white);
      }

      .user-inform-name {
        font-weight: 500;
        font-size: 18px;
        line-height: 111%;
        letter-spacing: -0.01em;
        color: var(--color-text-white);
      }
    }
    .user-inform-btn {
      width: 140px;
      padding: 14px 38px;
      border: 1px solid rgba(251, 251, 251, 0.4);
      border-radius: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default MenuMobilStyled;
