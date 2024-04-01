import styled from "styled-components";

const StatisticsStyled = styled.ul`
  width: 284px;
  margin-top: 40px;
  .statistic-item {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 260px;
    height: 94px;
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-text-white);
    .statistics-svg {
      width: 40px;
      height: 40px;
      padding: 8px;
      fill: var(--color-text-white);
      background: var(--bg-accent);
      border-radius: 13px;
    }
    .statistics-inform {
      .statistics-inform-title {
        font-size: 14px;
        color: rgba(17, 16, 28, 0.5);
        margin-bottom: 6px;
      }
      .statistics-inform-number {
        font-weight: 700;
        font-size: 20px;
        color: var(--color-lists);
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 auto auto;
    .statistic-item {
      width: 284px;
      height: 118px;
      padding: 32px;
      .statistics-svg {
        width: 54px;
        height: 54px;
        padding: 12px;
      }
      .statistics-inform {
        .statistics-inform-title {
          font-size: 16px;
        }
        .statistics-inform-number {
          font-size: 24px;
        }
      }
    }
  }
  @media screen and (min-width: 1158px) {
    .statistic-item {
      .statistics-svg {
      }
      .statistics-inform {
        .statistics-inform-title {
        }
        .statistics-inform-number {
        }
      }
    }
  }
`;

export default StatisticsStyled;
