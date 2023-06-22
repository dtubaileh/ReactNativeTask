import React, { ReactElement, createContext, useState } from "react"
import { IUser } from "../services/apiServicess"

interface IContextValueType {
    usersList: IUser[],
    setUserList: (users: IUser[]) => void
}

export const UsersListContext = createContext<IContextValueType>(null);

export const UsersContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [usersList, setUserList] = useState<IUser[]>([])
    const contextValue: IContextValueType = {
        usersList,
        setUserList,
    };

    return (
        <UsersListContext.Provider value={contextValue}>
            {children}
        </UsersListContext.Provider>
    );
};
