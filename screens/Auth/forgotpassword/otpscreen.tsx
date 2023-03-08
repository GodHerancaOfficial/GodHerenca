import { Text, TouchableWithoutFeedback, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import { ForgotLayoutStyle } from "../../../styles/Auth";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useEffect, useState } from "react";
import { Button } from "../../../components/common";

export default function OtpScreen({ navigation }: any): any {
    const [code, setCode] = useState<string>('');
    const [countDown, setCountDown] = useState<number>(50);
    const [btnDisaled, setBtnDisabled] = useState<boolean>(true);

    (async() => {
        setTimeout(() => {
            if (countDown == 0) {
                return;
            }
            else {
                setCountDown((number) => (number - 1))
            }
        }, 1000);
    })();

    useEffect(() => {
        ((code.length < 4) ? setBtnDisabled(true) : setBtnDisabled(false));
    }, [code])

    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <View style={[ForgotLayoutStyle.contentContainer]}>
                <Text style={[ForgotLayoutStyle.text, { paddingVertical: 85 }]}>
                    Code has been sent to +234 383 *** 9938
                </Text>

                <OTPInputView
                    pinCount={4}
                    onCodeFilled={(code) => { setCode(code) }}
                    style={{ width: '85%', height: 100 }}
                    codeInputFieldStyle={{
                        borderRadius: 8,
                        width: 68,
                        height: 50,
                        fontFamily: 'Raleway-bold',
                        fontSize: 22,
                        color: '#000',
                        borderColor: '#CACACA',
                        borderWidth: 2,
                    }}
                />

                {
                    ((countDown <= 0) ?
                        <TouchableWithoutFeedback>
                            <Text style={[ForgotLayoutStyle.text, { fontFamily: 'Raleway-bold', paddingVertical: 20 }]}>
                                Resend Code
                            </Text>
                        </TouchableWithoutFeedback>
                        :
                        <Text style={[ForgotLayoutStyle.text, { paddingVertical: 20 }]}>
                            Resend Code In:{' '}
                            <Text style={{ fontFamily: 'Raleway-bold' }}>
                                {countDown}
                            </Text>
                            s
                        </Text>
                    )
                }

                <Button
                    disabled={btnDisaled}
                    onPress={() => { navigation.navigate('CreateNewPassword') }}
                    style={[ForgotLayoutStyle.btnStyle, {position: 'absolute', bottom: 25}]}
                >
                    Verify
                </Button>
            </View>
        </ForgotPasswordLayout>
    )
}
