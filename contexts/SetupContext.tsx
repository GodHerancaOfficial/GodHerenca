import { createContext, useState } from "react";

type SetupContextType= {
    fullName?: string,
    setFullName?: any,
    username?: string,
    setUsername?: any,
    gender?: string,
    setGender?: any,
    cpf?: string,
    setCpf?: any,
    phone?: string,
    setPhone?: any,
    accountType?: string,
    setAccountType?: any,
}

const SetupContext = createContext<SetupContextType>({});

export const ContextProvider = ({ children }: any) => {
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("");

    const values:SetupContextType = {
        fullName, setFullName,
        username, setUsername,
        gender, setGender,
        cpf, setCpf,
        phone, setPhone,
        accountType, setAccountType
    }

    return (
        <SetupContext.Provider value={values}>
            {children}
        </SetupContext.Provider>
    )
}

export default SetupContext;