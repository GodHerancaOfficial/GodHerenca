import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useEffect, useState, useContext, useRef } from "react";
import SetupContext from "../../contexts/SetupContext";
import { Button } from "../../components/common";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import DateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
// import { formatDateOfBirthInput } from '../../contexts/SetupContext';
interface Prop {
  navigation?: any;
}

export default function DobScreen({ navigation }: Prop): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [displayDate, setDisplayDate] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [year, setYear] = useState<any>();
  const flashMessageRef = useRef<any>();
  const { detailsObj, setDetailsObj, checkRiderAgeInput, formatDateOfBirthInput } =
    useContext<any>(SetupContext);

  useEffect(() => {
    if (!displayDate || detailsObj.postal_code == "") {
      setBtnActive(true);
      return;
    }

    setBtnActive(false);
  }, [detailsObj.dob, detailsObj.postal_code]);

  const handlePress = (): any => {
    console.log(year);
    let d = new Date();

    if (detailsObj.account_type == 'Rider') {
      if ((d.getFullYear() - year) < 18) {
        flashMessageRef.current.showMessage({
          message: 'Too Young',
          description: 'You Must Be At Least 18 Years Old To Apply As A Rider',
          duration: 7000,
          style: SetupStyle.flashMessageContainer,
          type: 'danger',
        });
        return;
      }
    }

    navigation.navigate('Origin');
  }

  return (
    <AccountSetupLayout
      navigateBack={navigation.pop}
      setupFlashMessage={<FlashMessage ref={flashMessageRef} position="top" />}
    >
      {show && (
        <DateTimePicker
          value={new Date(1990, 11, 2)}
          mode="date"
          onChange={(event, selectedDate) => {
            setShow(false);
            setDetailsObj((detailsObj: any) => ({ ...detailsObj, dob: selectedDate?.toISOString().split('T')[0] }));
            setDisplayDate(true);
            setYear(parseInt(selectedDate?.toISOString().split('T')[0].split('-')[0]));
            console.log(selectedDate);
          }}
        />
      )}
      <View style={SetupStyle.generalView}>
        <Text style={SetupStyle.titleText}>Date Of Birth</Text>
        <TouchableWithoutFeedback onPress={() => { setShow(true) }}>
          <View style={[SetupStyle.formInputs]}>
            <Text style={{ fontSize: 18, color: `${(!displayDate) ? '#888888' : '#000'}` }}>
              {detailsObj.dob}
              {/* {(!displayDate)
                ?
                detailsObj.dob.toISOString().split('T')[0]
                :
                detailsObj.dob} */}
                {/* {detailsObj.dob.toISOString().split('T')[0]} */}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={SetupStyle.p}>
          You must be at least 18 years in other to apply as a rider{"\n"}
        </Text>

        <Text style={SetupStyle.titleText}>Postal Code</Text>
        <TextInput
          placeholder="000000"
          style={SetupStyle.formInputs}
          keyboardType="number-pad"
          value={detailsObj.postalCode}
          onChangeText={(e) => {
            setDetailsObj((detailsObj: any) => ({
              ...detailsObj,
              postal_code: e,
            }));
          }}
        />

        <Button
          disabled={btnActive}
          style={SetupStyle.button}
          onPress={() => handlePress()}
        >
          Next
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
