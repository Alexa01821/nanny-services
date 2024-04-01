import styled from "styled-components";

const FavoritesPageStyled = styled.div`
  .more-btn {
    padding: 10px 20px;
    margin: 64px auto 0;
  }

  .favorites-wrapper-stub {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .favorites-stub-text {
      font-weight: 500;
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.02em;
      color: var(--color-text-black);
    }
    .favorites-link {
      padding: 20px 40px;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1158px) {
  }
`;
export default FavoritesPageStyled;
