import { createContext, useState } from "react";

type SetupContextType = {
  detailsObj?: any;
  setDetailsObj?: any;
  inputRegex?: RegExp;
  emailRegex?: RegExp;
  fullnameRegex?: RegExp;
  checkEmailInput?: (emailInput: string) => boolean;
  checkUsernameInput?: (emailInput: string) => boolean;
  checkFullnameInput?: (emailInput: string) => boolean;
  checkRiderAgeInput?: (
    accountType: string,
    dateOfBirthFormat: string
  ) => boolean;
  formatDateOfBirthInput?: (dateOfBirth: number) => string | void;
};

const SetupContext = createContext<SetupContextType>({});
const inputRegex = /[a-zA-Z]+/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fullnameRegex = /^[A-Za-z ]+$/;

export const checkEmailInput = (emailInput: string): boolean => {
  return emailRegex.test(emailInput);
};

export const checkUsernameInput = (usernameInput: string): boolean => {
  return fullnameRegex.test(usernameInput);
};

export const checkFullnameInput = (fullnameInput: string): boolean => {
  return fullnameRegex.test(fullnameInput);
};

export const checkRiderAgeInput = (
  accountType: string,
  dateOfBirthFormat: string
): boolean => {
  //customer of any age range can use the product.
  if (accountType === "Customer") {
    return true;
  }
  const today = new Date();
  const dob = new Date(
    `${dateOfBirthFormat.slice(6, 10)}-${dateOfBirthFormat.slice(
      3,
      5
    )}-${dateOfBirthFormat.slice(0, 2)}`
  );
  const age = today.getFullYear() - dob.getFullYear();
  dob.setFullYear(today.getFullYear());
  return today < dob ? age - 1 >= 18 : age >= 18;
};

export const formatDateOfBirthInput = (dateOfBirth: number): string | void => {
  if (dateOfBirth.toString().length <= 2) return;
  const formattedInput = dateOfBirth.toString().replace(/\D/g, "").slice(0, 8);
  let dd = formattedInput.slice(0, 2);
  let mm = formattedInput.slice(2, 4);
  const yyyy = formattedInput.slice(4);

  return `${dd}/${mm}/${yyyy}`;
};

export const ContextProvider = ({ children }: any) => {
  const [detailsObj, setDetailsObj] = useState<any>({
    first_name: "",
    last_name: "",
    contact_detail: "",
    contact_type: "",
    cpf: "",
    gender: "",
    account_type: "",
    dob: new Date(1990, 11, 2).toISOString().split('T')[0],
    postal_code: "",
    state: "",
    city: "",
    street_address: "",
    // guarantor_name: "",
    // guarantor_relationship: "",
    // guarantor_phone: "",
    // vehicle_type: "",
    // id_type: "",
    // profile_photo: null,
  });

  const values: SetupContextType = {
    detailsObj,
    setDetailsObj,
    inputRegex,
    emailRegex,
    fullnameRegex,
    checkEmailInput,
    checkUsernameInput,
    checkFullnameInput,
    checkRiderAgeInput,
    formatDateOfBirthInput,
  };

  return (
    <SetupContext.Provider value={values}>{children}</SetupContext.Provider>
  );
};

export default SetupContext;
