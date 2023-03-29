import { Text, View, TouchableWithoutFeedback } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Button } from "../../components/common";

interface documentProps {
  id: number;
  documentType: string;
}

export default function IdentityVerificationScreen({ navigation }: any): any {
  const [btnActive, setBtnActive] = useState<boolean>(true);

  const handleNextPress = (): void => {
    navigation.navigate("Guarantor");
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
  ];

  const documentData = documents.map((document) => {
    return (
      <TouchableWithoutFeedback>
        <View key={document.id} style={SetupStyle.documentSelectionView}>
          <Text style={SetupStyle.documentTitle}>{document.documentType}</Text>

          <View style={SetupStyle.documentSelectionViewCircleBig}>
            <View style={SetupStyle.documentSelectionViewCircleSmall}></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  });

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
          disabled={false}
        >
          continue
        </Button>
      </View>
    </AccountSetupLayout>
  );
}
