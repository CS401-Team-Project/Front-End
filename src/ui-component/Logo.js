import PropTypes from "prop-types";
import logoDark from "assets/images/logo-complete-dark.svg";
import logo from "assets/images/logo-complete.svg";

const Logo = (props) => {
    return <img src={logo} alt="Smart Ledger" width={props.width} />;
};

export default Logo;

Logo.defaultProps = {
    width: 175
};

Logo.propTypes = {
    width: PropTypes.number
};
