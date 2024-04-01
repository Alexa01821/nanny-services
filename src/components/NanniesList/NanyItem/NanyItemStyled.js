import styled from "styled-components";

const NannyItemStyled = styled.li`
  position: relative;
  width: 100%;
  padding: 15px 15px;
  background-color: var(--color-text-white);
  border-radius: 24px;

  .img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    padding: 12px;
    border: 2px solid rgba(240, 63, 59, 0.2);
    border-radius: 30px;
    .avatar {
      width: 76px;
      height: 76px;
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
    }
    .title-wrap {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--color-text-gray);
    }
    .wrap-icons {
      display: flex;
      flex-direction: column;
      gap: 8px;

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
      }
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

  .nanny-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: var(--color-text-black);
    margin-bottom: 16px;
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

  .reviews-btn {
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

  .wrap-reviews {
    margin: 48px auto 0 0;

    .reviews-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: 24px;
      margin-bottom: 48px;
    }
    .review-item {
      width: 100%;

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

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    width: 721px;
    padding: 20px 20px;
    .img-wrap {
      width: 120px;
      height: 120px;
      padding: 12px;
      .avatar {
        width: 96px;
        height: 96px;
      }
    }

    .nanny-inform-wrap {
      .up-inform {
      }
      .title-wrap {
      }
      .wrap-icons {
        flex-direction: row;
        align-items: center;
        gap: 16px;
        .icon-item {
        }
        icon-svg {
        }
        .local {
        }
        .star {
        }
        .icon-text {
        }
      }
    }

    .nanny-title {
      margin-bottom: 24px;
    }

    .wrap-details {
      .detail-item {
        .detail-item-accent {
        }
      }
    }

    .nanny-about {
    }

    .show-btn {
    }

    .wrap-reviews {
      .reviews-list {
      }
      .review-item {
        width: calc((100% - 24px) / 2);
        .reviewer-wrap {
          .reviewer-img {
            .reviewer-letter {
            }
          }

          .reviewer-inform-wrap {
            .reviewer-title {
            }
            .reviewer-inform-renting-wrap {
              .reviewer-inform-svg {
              }
              .reviewer-inform-accent {
              }
            }
          }

          .reviewer-text {
          }
        }
        .reviews-btn {
        }
      }
    }
  }
  @media screen and (min-width: 1158px) {
    width: 1138px;
    padding: 24px 2px;
    .img-wrap {
      .avatar {
      }
    }

    .nanny-inform-wrap {
      .up-inform {
        flex-direction: row;
        justify-content: space-between;
        padding-right: 98px;
        margin-bottom: 8px;
        gap: 0px;
      }
      .title-wrap {
      }
      .wrap-icons {
        .icon-item {
        }
        icon-svg {
        }
        .local {
        }
        .star {
        }
        .icon-text {
        }
      }
    }

    .nanny-title {
    }

    .wrap-details {
      .detail-item {
        .detail-item-accent {
        }
      }
    }

    .nanny-about {
    }

    .show-btn {
    }

    .wrap-reviews {
      .reviews-list {
      }
      .review-item {
        .reviewer-wrap {
          .reviewer-img {
            .reviewer-letter {
            }
          }

          .reviewer-inform-wrap {
            .reviewer-title {
            }
            .reviewer-inform-renting-wrap {
              .reviewer-inform-svg {
              }
              .reviewer-inform-accent {
              }
            }
          }

          .reviewer-text {
          }
        }
        .reviews-btn {
        }
      }
    }
  }
`;

export default NannyItemStyled;
