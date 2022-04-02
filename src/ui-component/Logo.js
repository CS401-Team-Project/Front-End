import PropTypes from "prop-types";
import logo from "assets/images/logo-complete.svg";
// TODO: fix logo size (too large, cuts off text)
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
