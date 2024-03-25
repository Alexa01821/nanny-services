import styled from "styled-components";

const BasicWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--bg-back-modal);

  .wrapper-modal {
    position: absolute;
    overflow: hidden;
    padding: 40px;
    background-color: var(--color-text-white);
    border-radius: 24px;

    .modal-btn-close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 24px;
      height: 24px;
      border: none;
      background: transparent;

      .modal-close-icon {
        width: 24px;
        height: 24px;
        stroke: var(--color-text);

        &:hover,
        &:focus {
          stroke: var(--bg-btn-hover);
        }
      }
    }
  }
`;
export default BasicWindow;
