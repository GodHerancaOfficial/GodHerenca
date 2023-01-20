import { View, TextInput } from "react-native";
import { FormStyle } from "../../styles/Auth";
import { MaterialIcons } from '@expo/vector-icons'

interface Prop{
    email: string,
    password: string,
    setEmail: any,
    setPassword: any,
};

export default function Form({email, password, setEmail, setPassword}:Prop): any{
    return (
        <View style={FormStyle.container}>
            <View style={(email=="")?FormStyle.formView:[FormStyle.formViewActive, FormStyle.formView]}>
                <View>
                    <MaterialIcons name="email" size={25} color={(email=="")?'#A5A5A5':'#000000'} />
                </View>
                <TextInput 
                    placeholder="Email" 
                    style={FormStyle.formInput} 
                    onChangeText={(newEmail)=>{setEmail(newEmail)}}
                    value={email}
                />
            </View>

            <View  style={(password=="")?FormStyle.formView:[FormStyle.formViewActive, FormStyle.formView]}>
                <View>
                    <MaterialIcons name="lock" size={25} color={(password=="")?'#A5A5A5':'#000000'} />
                </View>
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    style={FormStyle.formInput} 
                    onChangeText={(newPassword)=>{setPassword(newPassword)}}
                    value={password}
                />
            </View>
        </View>
    )
}