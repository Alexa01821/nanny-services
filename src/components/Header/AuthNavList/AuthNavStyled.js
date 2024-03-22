import styled from "styled-components";

export const AuthListStyled = styled.ul`
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
`;
export const UserInformStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
  @media screen and (min-width: 1024px) {
    gap: 24px;
  }

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
`;
