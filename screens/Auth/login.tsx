import { AuthLayout } from "../../layouts";
import { useContext, useEffect, useState } from "react";
import { FormStyle } from '../../styles/Auth'
import { View } from "react-native";
import { Input } from "../../components/common";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AppContext } from "../../contexts";
interface Prop {
    navigation?: any,
}

export default function Login({ navigation }: Prop): any {
    const {username, setUsername, password, setPassword} = useContext<any>(AppContext);
    const [active, setActive] = useState<boolean>(true);

    useEffect(() => {
        ((username == "" || password == "") ? setActive(true) : setActive(false));
    }, [username, password])
    
    // const handlePress = () =>
    // {
    //     navigation.navigate("MainScreens");
    // }
    return (
        <AuthLayout active={active} section="Login" navigate={navigation.navigate}>

            <View style={FormStyle.container}>
                <Input
                    placeholder="Username"
                    onChangeText={(e: string) => { setUsername(e) }}
                    keyboardType="default"
                    icon={<FontAwesome5 name="user-alt" size={19} color="black" />}
                    value={username}
                />

                <Input
                    placeholder="Password"
                    onChangeText={(e: string) => { setPassword(e) }}
                    secureTextEntry={true}
                    icon={<MaterialIcons name="lock" size={24} color="black" />}
                    value={password}
                />
            </View>
        </AuthLayout>
    )
}
