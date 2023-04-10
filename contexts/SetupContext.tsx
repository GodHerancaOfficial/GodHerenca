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
  detailsObj?: any;
  setDetailsObj?: any;
  inputRegex?: RegExp;
  emailRegex?: RegExp;
  fullnameRegex?: RegExp;
  checkEmailInput?: (emailInput: string) => boolean;
  checkUsernameInput?: (emailInput: string) => boolean;
  checkFullnameInput?: (emailInput: string) => boolean;
};

const SetupContext = createContext<SetupContextType>({});
const inputRegex = /[a-zA-Z]+/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fullnameRegex = /^[A-Za-z ]+$/;

export const checkEmailInput = (emailInput: string): boolean => {
  return emailRegex.test(emailInput);
};

export const checkUsernameInput = (usernameInput: string): boolean => {
  return inputRegex.test(usernameInput);
};

export const checkFullnameInput = (fullnameInput: string): boolean => {
  return fullnameRegex.test(fullnameInput);
};
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
  const [guarantorRelationship, setGuarantorRelationship] =
    useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const [detailsObj, setDetailsObj] = useState<any>({
    fullname: "",
    email: "",
    cpf: "",
    phone: "",
    gender: "",
    accountType: "",
    dob: "",
    postalCode: "",
    state: "",
    city: "",
    address: "",
    guarantorName: "",
    guarantorRelationship: "",
    guarantorPhone: "",
    vehicleType: "",
    id_type: "",
    profile_photo: null, //
    frontview: null, // For these three that have comments, they'll be image files.
    backview: null, //
  });

  // const checkPhoneNumberInput = (phoneNumberInput: string): boolean =>{
  //     return false;
  // }
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
    inputRegex,
    emailRegex,
    fullnameRegex,
    checkEmailInput,
    checkUsernameInput,
    checkFullnameInput,
  };

  return (
    <SetupContext.Provider value={values}>{children}</SetupContext.Provider>
  );
};

export default SetupContext;
