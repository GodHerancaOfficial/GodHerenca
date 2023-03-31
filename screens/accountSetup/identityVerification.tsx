import { Text, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useState, useContext, useEffect } from "react";
import { Button } from "../../components/common";
import SetupContext from "../../contexts/SetupContext";

interface documentProps {
  id: number;
  documentType: string;
}

export default function IdentityVerificationScreen({ navigation }: any): any {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const { detailsObj, setDetailsObj } = useContext(SetupContext);

  useEffect(() => {
    if (detailsObj.id_type == "") {
      setBtnDisabled(true);
      return;
    }

    setBtnDisabled(false);
  }, [detailsObj.id_type]);

  const handleNextPress = (): void => {
    console.log(detailsObj);
    navigation.navigate("Legal");
  };

  const documents: documentProps[] = [
    {
      id: 1,
      documentType: "ID Card",
    },

    {
      id: 2,
      documentType: "Student Visa",
    },

    {
      id: 3,
      documentType: "Permanent Residence",
    },

    {
      id: 4,
      documentType: "Protocol",
    },

    {
      id: 5,
      documentType: "Driver's License"
    },
  ];

  const documentData = documents.map((document) => (
    <TouchableWithoutFeedback
      key={document.id}
      onPress={() => {
        setDetailsObj((detailsObj: any) => ({
          ...detailsObj,
          'id_type': document.documentType
        }));
      }}
    >
      <View style={SetupStyle.documentSelectionView}>
        <Text style={SetupStyle.documentTitle}>{document.documentType}</Text>

        <View style={SetupStyle.documentSelectionViewCircleBig}>

          {((document.documentType == detailsObj.id_type) ?
            <View style={SetupStyle.documentSelectionViewCircleSmall}></View>
            :
            null)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  ));

  return (
    <AccountSetupLayout navigateBack={navigation.pop}>
      <View style={SetupStyle.generalView}>
        <Text style={SetupStyle.titleText}>Choose a document to upload</Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {documentData}
        </View>

        <Button
          style={SetupStyle.button}
          onPress={() => handleNextPress()}
          disabled={btnDisabled}
        >
          Continue
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
