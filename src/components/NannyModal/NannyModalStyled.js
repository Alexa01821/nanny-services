import styled from "styled-components";

const NannyModalStyled = styled.div`
  width: 250px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    width: 498px;
    height: 720px;
  }

  .modal-title {
    max-width: 460px;
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
    margin-bottom: 20px;
  }
  .img-wrap {
    display: flex;
    gap: 14px;
    margin-bottom: 20px;
    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 15px;
    }
    .text-wrap {
      .text {
        font-size: 12px;
        line-height: 133%;
        color: var(--color-text-gray);
      }
      .text-title {
        font-size: 16px;
        line-height: 150%;
        color: var(--color-text-black);
      }
    }
  }
  .modal-form {
    width: 232px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 16px;

    .wrap-small-input {
      display: flex;
      flex-wrap: wrap;

      gap: 16px 7px;
      @media screen and (min-width: 768px) {
        flex-wrap: nowrap;
      }
    }
    .modal-label {
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
      .small {
        width: 232px;
      }
      .comment {
        height: 116px;
      }
      .modal-error-message {
        font-size: 16px;
        line-height: 125%;
        color: var(--color-accent);
      }
    }
    .modal-btn {
      padding: 16px 77px;
      @media (min-width: 768px) {
        padding: 16px 217px;
      }
    }
  }
`;

export default NannyModalStyled;
