import PropTypes from "prop-types";
import React from "react";
import Divider from "../../common/divider";
import Card from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth") === "true";

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const onLogin = () => {
        localStorage.setItem("auth", "true");
    };
    return (
        <Card>
            <SmallTitle>Решение</SmallTitle>
            <Divider />
            <Component
                {...props}
                isAuth={isLogin}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </Card>
    );
};

const ComponentWithHoc = withFunctions(SimpleComponent);

export default ComponentWithHoc;
