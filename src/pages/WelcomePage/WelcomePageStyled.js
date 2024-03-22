import styled from "styled-components";
import bgWelcomePage from "images/welcome-bg.jpg";

const WelcomePageStyled = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
  .wrap-hero {
    background-color: var(--bg-accent);
    height: calc(100vh - 64px);
    padding: 90px 50px 50px 96px;
    border-radius: 30px;

    @media screen and (min-width: 768px) {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
      background-size: calc((100% - 64px) / 2) calc(100vh - 64px);
      background-image: url(${bgWelcomePage});
    }
  }
  .hero-title {
    margin-top: 163px;
    max-width: 517px;
    font-weight: 500;
    font-size: 70px;
    line-height: 100%;
    letter-spacing: -0.03em;
    color: var(--color-text-white);
  }
  .hero-text {
    margin: 28px 0 64px;
    font-size: 28px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: var(--color-text-white);
  }
  .hero-btn {
    display: flex;
    justify-content: space-between;
    width: 232px;
    height: 62px;
    padding: 18px 50px;
    border: 1px solid rgba(251, 251, 251, 0.4);

    font-size: 20px;
    line-height: 120%;
    .hero-btn-svg {
      width: 24px;
      height: 22px;
      fill: currentColor;
    }
  }
`;
export default WelcomePageStyled;
