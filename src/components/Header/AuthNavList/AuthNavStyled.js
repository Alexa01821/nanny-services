import styled from "styled-components";

export const WrapNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 533px;
`;

export const AuthListStyled = styled.ul`
  display: flex;
  gap: 8px;
  .auth-item {
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
