import { createContext, useState } from "react";

type AppContextType = {
    username?: string; setUsername?: any;
    password?: string; setPassword?: any;
}

const AppContext = createContext<AppContextType>({});

export const AppContextProvide = ({ children }: any) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const values: AppContextType = {
        username, setUsername,
        password, setPassword
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
