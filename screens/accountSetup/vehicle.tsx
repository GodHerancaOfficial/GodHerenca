import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { AccountSetupLayout } from "../../layouts";
import { SetupStyle } from "../../styles/Auth";
import { useState } from "react";
import { Shadow } from "react-native-shadow-2";

export default function VehicleScreen({navigation}: any): any{
    const Bicycle = require('../../assets/images/vehicles/bicycle.png');
    const electric_bike = require('../../assets/images/vehicles/electric_bike.png');
    const scooter = require("../../assets/images/vehicles/scooter.png");
    const car = require('../../assets/images/vehicles/car.png');

    const [selectedVehicle, setSelectedVehicle] = useState<string>("");
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

    return (
        <AccountSetupLayout navigateBack={navigation.pop}>
            <View style={SetupStyle.generalView}>
                <View style={SetupStyle.vehicleContainer}>
                    {
                        vehicles.map((vehicle)=>(
                            <View key={vehicle.id} style={[SetupStyle.vehicleWrapper]}>
                                <Shadow distance={3} startColor="#86868626" endColor="#86868626" offset={[0,0]}>
                                    <TouchableWithoutFeedback>
                                        <View style={[SetupStyle.vehicleBox]}>
                                            <Image source={vehicle.image} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </Shadow>
                                <Text style={[SetupStyle.p, {fontFamily: 'Raleway-bold', marginVertical: 5, color: '#000'}]}>
                                    {vehicle.name}
                                </Text>
                            </View>
                        ))
                    }
                </View>

                <Text style={[SetupStyle.p, {color: "#737373", marginVertical: 50}]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </Text>

                <TouchableWithoutFeedback>
                    <Text style={[SetupStyle.button, { marginVertical: 10, opacity: (btnActive) ? 1 : 0.5 }]}>
                        Finish
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </AccountSetupLayout>
    )
}