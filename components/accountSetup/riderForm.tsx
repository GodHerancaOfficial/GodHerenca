import { TextInput } from "react-native"
import { SetupStyle } from "../../styles/Auth"

export default function RiderForm(): any {
    return (
        <>
            <TextInput
                placeholder="Guarantor Name"
                style={SetupStyle.formInputs}
            />

            <TextInput
                placeholder="Guarantor Phone Number"
                style={SetupStyle.formInputs}
            />
        </>
    )
}