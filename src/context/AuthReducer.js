import React from "react";


const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                currentUser: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
            };
        default:
            return state;
    }
};

export const AuthContext = React.createContext();

export default AuthReducer;