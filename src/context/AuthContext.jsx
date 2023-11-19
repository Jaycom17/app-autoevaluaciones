import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

import { login, logout, profile } from "../api/user.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [haveError, setHaveError] = useState(null);
    const [actualRole, setActualRole] = useState(null);

    const singin = (user) => {
        login(user).then((res) => {
            setUser(res);
            setIsAuthenticated(true);
            setHaveError(null);
            setActualRole(res.usu_rol);
            console.log(res);
        }).catch((err) => {
            setIsAuthenticated(false);
            setHaveError(err.response.data);
        });
    }

    const singout = () => {
        logout().then(() => {
            setUser(null);
            setIsAuthenticated(false);
            setActualRole(null);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        const cookies = Cookies.get();
        if(cookies.token){
            profile().then((res) => {
                setUser(res);
                setIsAuthenticated(true);
                setActualRole(res.usu_rol);
            }).catch((err) => {
                console.log(err);
                setIsAuthenticated(false);
            });
        }
    });


    return (
        <AuthContext.Provider value={{singin, user, isAuthenticated, haveError, actualRole, singout}}>
            {children}
        </AuthContext.Provider>
    );
}