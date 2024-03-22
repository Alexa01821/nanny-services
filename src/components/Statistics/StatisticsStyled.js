import styled from "styled-components";

const StatisticsStyled = styled.ul`
  width: 284px;
  margin: 0 0 auto auto;
  .statistic-item {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 284px;
    height: 118px;
    padding: 32px;
    border-radius: 20px;
    background-color: var(--color-text-white);
    .statistics-svg {
      width: 54px;
      height: 54px;
      padding: 12px;
      fill: var(--color-text-white);
      background: var(--bg-accent);
      border-radius: 13px;
    }
    .statistics-inform {
      .statistics-inform-title {
        font-size: 16px;
        color: rgba(17, 16, 28, 0.5);
        margin-bottom: 6px;
      }
      .statistics-inform-number {
        font-weight: 700;
        font-size: 24px;
        color: var(--color-lists);
      }
    }
  }
`;

export default StatisticsStyled;
