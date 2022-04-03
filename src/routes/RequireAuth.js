import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : null;
    console.log("RequireAuth: isLoggedIn", isLoggedIn);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("RequireAuth - Effect: isLoggedIn", isLoggedIn);
        if (!isLoggedIn) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [isLoggedIn]);

    return children;
};

RequireAuth.propTypes = {
    children: PropTypes.node.isRequired
};

export default RequireAuth;
