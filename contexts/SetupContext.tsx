import { createContext, useState } from "react";

// type SetupContextType = {
//     fullName?: string, setFullName?: any,
//     username?: string, setUsername?: any,
//     gender?: string, setGender?: any,
//     cpf?: string, setCpf?: any,
//     phone?: string, setPhone?: any,
//     accountType?: string, setAccountType?: any,
//     dob?: string, setDob?: any,
//     postalCode?: string, setPostalCode?: any,
//     state?: string, setState?: any,
//     city?: string, setCity?: any,
//     address?: string, setAddress?: any,
//     guarantorName?: string, setGuarantorName?: any,
//     guarantorPhone?: string, setGuarantorPhone?: any,
//     guarantorRelationship?: string, setGuarantorRelationship?: any,
//     selectedVehicle?: string, setSelectedVehicle?: any
// }

type SetupContextType = {
    detailsObj?: any
    setDetailsObj?: any
    inputRegex?: RegExp
};

const SetupContext = createContext<SetupContextType>({});

export const ContextProvider = ({ children }: any) => {
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [guarantorName, setGuarantorName] = useState<string>("");
    const [guarantorPhone, setGuarantorPhone] = useState<string>("");
    const [guarantorRelationship, setGuarantorRelationship] = useState<string>("");
    const [selectedVehicle, setSelectedVehicle] = useState<string>("");

    const [detailsObj, setDetailsObj] = useState<any>({
        'fullname': '',
        'email': '',
        'cpf': '',
        'phone': '',
        'gender': '',
        'accountType': '',
        'dob': '',
        'postalCode': '',
        'state': '',
        'city': '',
        'address': '',
        'guarantorName': '',
        'guarantorRelationship': '',
        'guarantorPhone': '',
        'vehicleType': '',
        'profile_photo': null,  // 
        'frontview': null,      // For these three that have comments, they'll be image files.
        'backview': null        // 
    });
    const inputRegex = /[a-zA-Z]+/;

    // const values: SetupContextType = {
    //     fullName, setFullName,
    //     username, setUsername,
    //     gender, setGender,
    //     cpf, setCpf,
    //     phone, setPhone,
    //     accountType, setAccountType,
    //     dob, setDob,
    //     postalCode, setPostalCode,
    //     state, setState,
    //     city, setCity,
    //     address, setAddress,
    //     guarantorName, setGuarantorName,
    //     guarantorPhone, setGuarantorPhone,
    //     guarantorRelationship, setGuarantorRelationship,
    //     selectedVehicle, setSelectedVehicle
    // }

    const values: SetupContextType = {
        detailsObj,
        setDetailsObj,
        inputRegex
    };

    return (
        <SetupContext.Provider value={values}>
            {children}
        </SetupContext.Provider>
    )
}

export default SetupContext;