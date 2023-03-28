import { TextInput } from "react-native";
import { SetupStyle } from "../../styles/Auth";
import DropDown from "../dropdown/dropdown";
import { useState, useContext } from "react";
import SetupContext from "../../contexts/SetupContext";

interface Prop {
  fullName?: string;
  setFullName?: any;
  username?: string;
  setUsername?: any;
  setGender?: any;
  cpf?: string;
  setCpf?: any;
  phone?: string;
  setPhone?: any;
  setAccountType?: any;
}

export default function GeneralForm(): any {
  // const { fullName, setFullName, username, setUsername, gender, setGender,
  //     cpf, setCpf, phone, setPhone, accountType, setAccountType } = useContext(SetupContext);

  const { detailsObj, setDetailsObj } = useContext(SetupContext);


  const [accountTypeList] = useState<any[]>([
    {
      id: 1,
      title: "Customer",
    },
    {
      id: 2,
      title: "Rider",
    },
  ]);

  const [genderList] = useState<any[]>([
    {
      id: 1,
      title: "Male",
    },
    {
      id: 2,
      title: "Female",
    },
  ]);

  return (
    <>
      <TextInput
        placeholder="Name"
        style={SetupStyle.formInputs}
        value={detailsObj.fullName}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            fullame: e,
          }));
        }}
      />

      <TextInput
        placeholder="Username"
        style={SetupStyle.formInputs}
        value={detailsObj.username}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            username: e,
          }));
        }}
      />

      <DropDown
        lists={genderList}
        setOption={detailsObj.setGender}
        placeholder="Gender"
      />

      <TextInput
        placeholder="CPF"
        style={SetupStyle.formInputs}
        value={detailsObj.cpf}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            cpf: e,
          }));
        }}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Phone Number"
        style={SetupStyle.formInputs}
        value={detailsObj.phone}
        onChangeText={(e) => {
          setDetailsObj((detailsObj: any) => ({
            ...detailsObj,
            phone: e,
          }));
        }}
        keyboardType="phone-pad"
      />

      <DropDown
        lists={accountTypeList}
        setOption={detailsObj.setAccountType}
        placeholder="Account Type"
      />
    </>
  );
}
