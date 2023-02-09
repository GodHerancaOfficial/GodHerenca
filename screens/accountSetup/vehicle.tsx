import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle, AuthLayout_Style } from "../../styles/Auth";
import { useContext, useEffect, useState } from "react";
import SetupContext from "../../contexts/SetupContext";
import { GeneralModal } from "../../components/modals";

export default function VehicleScreen({ navigation }: any): any {
    const Bicycle = require('../../assets/images/vehicles/bicycle.png');
    const electric_bike = require('../../assets/images/vehicles/electric_bike.png');
    const scooter = require("../../assets/images/vehicles/scooter.png");
    const car = require('../../assets/images/vehicles/car.png');

    const [visible, setVisible] = useState<boolean>(false);
    const imageSource = require('../../assets/images/modals/regSuccess.png');

    const { selectedVehicle, setSelectedVehicle } = useContext(SetupContext);
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const [vehicles] = useState<any[]>([
        {
            id: 1,
            name: "Bicycle",
            image: Bicycle,
        },
        {
            id: 2,
            name: "Electric Bike",
            image: electric_bike,
        },
        {
            id: 3,
            name: "Scooter",
            image: scooter,
        },
        {
            id: 4,
            name: "Car",
            image: car,
        },
    ]);

    useEffect(() => {
        if (selectedVehicle == "") {
            setBtnActive(false);
            return;
        }

        setBtnActive(true);
    }, [selectedVehicle])

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <GeneralModal visible={visible} setVisible={setVisible} imageSource={imageSource}>
                <Text style={[AuthLayout_Style.pBold, { fontSize: 24, textAlign: 'center', paddingHorizontal: 15 }]}>
                    Congratulations {'\n\n'}

                    <Text style={[AuthLayout_Style.p, {paddingVertical: 10, fontSize: 18}]}>
                        Your account is ready to use. You
                        will be redirected to your home page in
                        a few seconds
                    </Text>
                </Text>
            </GeneralModal>

            <View style={SetupStyle.generalView}>
                <View style={SetupStyle.vehicleContainer}>
                    {
                        vehicles.map((vehicle) => (
                            <View key={vehicle.id} style={[SetupStyle.vehicleWrapper]}>
                                <TouchableWithoutFeedback onPress={() => {
                                    setSelectedVehicle(vehicle.name);
                                }}>
                                    <View style={[SetupStyle.vehicleBox, { borderWidth: (selectedVehicle == vehicle.name) ? 2 : 0, borderColor: '#000' }]}>
                                        <Image source={vehicle.image} />
                                    </View>
                                </TouchableWithoutFeedback>
                                <Text style={[SetupStyle.p, { fontFamily: 'Raleway-bold', marginVertical: 5, color: '#000' }]}>
                                    {vehicle.name}
                                </Text>
                            </View>
                        ))
                    }
                </View>

                <Text style={[SetupStyle.p, { color: "#737373", marginVertical: 28 }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </Text>

                <TouchableWithoutFeedback onPress={() => { (btnActive) ? setVisible(!visible) : null }}>
                    <Text style={[SetupStyle.button, { marginVertical: 0, opacity: (btnActive) ? 1 : 0.5 }]}>
                        Finish
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </AccountSetupLayout>
    )
}