import { View } from "react-native";

interface Props{
    children: any,
    section: string,
};

export default function AuthLayout({children, section}:Props): any{
    return (
        <View>
            {children}
        </View>
    )
}