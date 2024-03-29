import styled from "styled-components";

const NavigationStyled = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 12px;
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
  @media screen and (min-width: 1158px) {
    gap: 40px;
  }
`;

export default NavigationStyled;
