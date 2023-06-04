import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextType = {
    username?: string; setUsername?: any;
    password?: string; setPassword?: any;
    isOpened?: boolean; setIsOpened?: any;
    storeDevice?: () => Promise<boolean>; checkDevice?: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType>({});

export const AppContextProvider = ({ children }: any) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const storeDevice = async (): Promise<boolean> => {
        try {
            await AsyncStorage.setItem('opened', 'true');
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const checkDevice = async (): Promise<boolean> => {
        try {
            let val = await AsyncStorage.getItem('opened');
            if (val !== null) {
                console.log(val);       // Remove during production
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const values: AppContextType = {
        username, setUsername,
        password, setPassword,
        storeDevice, isOpened,
        setIsOpened, checkDevice,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
