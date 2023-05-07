import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "./contexts/authContext";

const AuthHeader = (props) => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    return context.isAuthenticated ? (
        <p>
            Welcome {context.email}!{" "} <button onClick={() => context.signout()}>Sign out</button>
        </p>
    ) : (
        <p>
            You are not logged in.{" "}
            <button onClick={() => navigate("/login")}>Login</button>
        </p>
    );
};

export default AuthHeader;