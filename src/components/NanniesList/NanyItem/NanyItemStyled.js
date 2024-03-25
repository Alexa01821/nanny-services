import styled from "styled-components";

const NannyItemStyled = styled.li`
  position: relative;
  width: 310px;
  padding: 15px 15px;
  background-color: var(--color-text-white);
  border-radius: 24px;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
    width: 721px;
    padding: 20px 20px;
  }

  @media (min-width: 1440px) {
    width: 1184px;
    padding: 24px 24px;
  }

  .img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    padding: 12px;
    border: 2px solid rgba(240, 63, 59, 0.2);
    border-radius: 30px;
    .avatar {
      width: 96px;
      height: 96px;
      border-radius: 15px;
    }
  }

  .nanny-inform-wrap {
    display: flex;
    flex-direction: column;
    .up-inform {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        padding-right: 98px;
        margin-bottom: 8px;
        gap: 0px;
      }

      .title-wrap {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-text-gray);
      }

      .wrap-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin-bottom: 8px;

        .icon-item {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 24px;

          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: var(--color-text-black);
          icon-svg {
            width: 16px;
            height: 16px;
          }
          .local {
            fill: var(--color-text-black);
          }
          .star {
            fill: var(--border-stars);
          }
          .icon-text {
            color: var(--color-price);
          }
        }
      }
    }

    /* .favorite-btn {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      .favorite-svg-border {
        fill: var(--color-text-black);
      }
      .favorite-svg-fill {
        fill: var(--color-accent);
      }
    } */

    .nanny-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      color: var(--color-text-black);
      margin-bottom: 24px;
    }

    .wrap-details {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
      .detail-item {
        padding: 8px 16px;
        border-radius: 24px;
        background: var(--bg-body);

        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-text-gray);
        .detail-item-accent {
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: var(--color-text-black);
        }
      }
    }

    .nanny-about {
      font-size: 16px;
      line-height: 125%;
      color: var(--color-lists);
    }

    .show-btn {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: var(--color-text-black);
      border: none;
      background-color: transparent;
      margin: 14px auto 0 0;
    }
  }

  .wrap-reviews {
    margin: 48px auto 0 0;

    .reviews-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: 24px;
      margin-bottom: 48px;

      .review-item {
        width: 152px;
        @media (min-width: 768px) {
          width: calc((100% - 24px) / 2);
        }
        .reviewer-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          .reviewer-img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 100px;
            background-color: var(--bg-reviewer);
            .reviewer-letter {
              font-weight: 500;
              font-size: 20px;
              line-height: 100%;
              color: var(--color-accent);
            }
          }

          .reviewer-inform-wrap {
            .reviewer-title {
              font-weight: 500;
              font-size: 16px;
              line-height: 125%;
              color: var(--color-text-black);
              margin-bottom: 4px;
            }
            .reviewer-inform-renting-wrap {
              display: flex;
              align-items: center;
              gap: 8px;
              .reviewer-inform-svg {
                width: 16px;
                height: 16px;
                fill: var(--border-stars);
              }
              .reviewer-inform-accent {
                font-weight: 500;
                font-size: 14px;
                line-height: 129%;
                color: var(--color-text-black);
              }
            }
          }
        }

        .reviewer-text {
          font-size: 16px;
          line-height: 125%;
          color: var(--color-lists);
        }
      }
    }
    .reviews-btn {
      border-radius: 30px;
      padding: 14px 28px;
    }
  }
`;

export default NannyItemStyled;
