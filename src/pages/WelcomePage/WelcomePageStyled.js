import styled from "styled-components";
import bgWelcomePage from "images/welcome-bg.jpg";

const WelcomePageStyled = styled.section`
  width: 100%;
  margin: 0 auto;
  .wrap-hero {
    height: 100vh;
    background-color: var(--bg-accent);
    padding: 90px 20px;
  }
  .hero-title {
    width: 100%;
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 62px;
    line-height: 100%;
    letter-spacing: -0.03em;
    color: var(--color-text-white);
  }
  .hero-text {
    font-size: 24px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: var(--color-text-white);
    margin-bottom: 40px;
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
  @media screen and (min-width: 768px) {
    width: 700px;
    padding: 32px;

    .wrap-hero {
      padding: 160px 50px 50px 20px;
      height: calc(100vh - 64px);
      border-radius: 30px;

      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
      background-size: calc((100% - 64px) / 2) calc(100vh - 64px);
      background-image: linear-gradient(
          rgba(18, 20, 23, 0.6),
          rgba(18, 20, 23, 0.6)
        ),
        url(${bgWelcomePage});
    }
    .hero-title {
      width: 517px;
      margin-top: 30px;
    }
    .hero-text {
      width: 517px;
    }
    .hero-btn {
      .hero-btn-svg {
      }
    }
  }
  @media screen and (min-width: 1158px) {
    width: 1100px;

    .wrap-hero {
      padding: 90px 50px 50px 96px;
    }
    .hero-title {
      margin-top: 163px;
    }
    .hero-text {
    }
    .hero-btn {
      .hero-btn-svg {
      }
    }
  }
`;
export default WelcomePageStyled;
