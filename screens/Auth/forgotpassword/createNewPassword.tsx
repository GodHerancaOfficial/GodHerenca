import { Text, View, Image } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import { ForgotLayoutStyle } from "../../../styles/Auth";
import { Button, Input } from "../../../components/common";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { GeneralModal } from "../../../components/modals";

export default function CreateNewPassword({ navigation }: any): any {
    const image = require('../../../assets/images/forgot_password/screen2.png');
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const [visible, setVisible] = useState<boolean>(false);
    const imageSource = require('../../../assets/images/modals/changePwd.png');

    useEffect(() => {
        if (newPassword == "" || confirmPassword == "" || confirmPassword != newPassword) {
            setBtnDisabled(true);
            return;
        }

        setBtnDisabled(false);
    }, [newPassword, confirmPassword]);

    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <GeneralModal visible={visible} setVisible={setVisible} imageSource={imageSource} >
                <Text style={[ForgotLayoutStyle.text, {
                    fontFamily: 'Raleway-bold',
                    fontSize: 24,
                    textAlign: 'center',
                    paddingHorizontal: 20
                }]}>
                    Congratulations! {'\n\n'}

                    <Text style={[ForgotLayoutStyle.text, { fontSize: 16, paddingVertical: 15 }]}>
                        Your password was successfully changed. You will be redirected to your
                        login page in few seconds.
                    </Text>
                </Text>
            </GeneralModal>

            <View style={[ForgotLayoutStyle.contentContainer, { paddingHorizontal: 20 }]}>
                <Image source={image} style={[ForgotLayoutStyle.imageStyle]} />

                <Text style={[ForgotLayoutStyle.text, { width: '100%', marginVertical: 30 }]}>
                    Create Your New Password
                </Text>

                <Input
                    placeholder="New Password"
                    secureTextEntry={true}
                    icon={
                        <MaterialIcons name="lock" size={24} color={'#000'} />
                    }
                    onChangeText={(e: string) => { setNewPassword(e) }}
                />

                <Input
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    icon={
                        <MaterialIcons name="lock" size={24} color={'#000'} />
                    }
                    onChangeText={(e: string) => { setConfirmPassword(e) }}
                />

                <Button
                    onPress={() => { setVisible(!visible) }}
                    disabled={btnDisabled}
                    style={[ForgotLayoutStyle.btnStyle, { width: '100%', position: 'absolute', bottom: 20 }]}
                >
                    Continue
                </Button>
            </View>
        </ForgotPasswordLayout>
    )
}
