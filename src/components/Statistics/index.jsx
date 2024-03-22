import CheckIcon from "@mui/icons-material/Check";
import StatisticsStyled from "./StatisticsStyled";

const Statistics = () => {
  return (
    <StatisticsStyled>
      <li className="statistic-item">
        <CheckIcon className="statistics-svg" />
        <div className="statistics-inform">
          <p className="statistics-inform-title">Experienced nannies</p>
          <p className="statistics-inform-number">15,000</p>
        </div>
      </li>
    </StatisticsStyled>
  );
};

export default Statistics;
