import { NavLink } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WelcomePageStyled from "./WelcomePageStyled";
import Statistics from "components/Statistics";

const WelcomePage = () => {
  return (
    <WelcomePageStyled>
      <div className="wrap-hero">
        <h1 className="hero-title">Make Life Easier for the Family:</h1>
        <p className="hero-text">Find Babysitters Online for All Occasions</p>
        <NavLink
          aria-label="Nannies list page"
          to="/nannies"
          className="hero-btn btn"
        >
          Get started
          <ArrowOutwardIcon className="hero-btn-svg" />
        </NavLink>
        <Statistics />
      </div>
    </WelcomePageStyled>
  );
};

export default WelcomePage;
