import styled from "styled-components";

const LoginModalStyled = styled.div`
  width: 240px;
  padding: 12px;
  @media screen and (min-width: 768px) {
    width: 438px;
  }

  .modal-title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--color-text-black);
    margin-bottom: 20px;
  }
  .modal-subtitle {
    font-size: 16px;
    line-height: 125%;
    color: var(--color-lists);
    margin-bottom: 40px;
  }
  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    .modal-label {
      position: relative;
      font-size: 16px;
      color: var(--color-text-accent);
      font-weight: 400;
      line-height: 1.25;
      .modal-input {
        width: 100%;
        height: 52px;
        border: 1px solid rgba(17, 16, 28, 0.1);
        border-radius: 12px;
        outline: none;

        padding: 16px 18px;

        &::placeholder {
          font-family: "Helvetica Neue", sans-serif;
          font-size: 16px;
          line-height: 125%;
          text-align: left;
          color: var(--color-text-black);
        }
      }
      .visibility-svg {
        position: absolute;
        top: 16px;
        right: 18px;
        width: 20px;
        height: 20px;
        fill: var(--color-text-black);
        cursor: pointer;
      }
      .modal-error-message {
        font-size: 16px;
        line-height: 125%;
        color: var(--color-accent);
      }
    }
    .modal-btn {
      margin-top: 22px;
      padding: 16px 16px;
    }
  }
`;

export default LoginModalStyled;
