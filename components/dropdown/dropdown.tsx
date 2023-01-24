import { Text, View, TouchableWithoutFeedback } from "react-native";
import { DropDownStyle } from "../../styles/component";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Prop{
    lists?:any[],
    setOption?: any,
};

export default function DropDown({lists, setOption}:Prop): any {
    const [selected, setSelected] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <TouchableWithoutFeedback onPress={()=>{
            setIsOpen(!isOpen);
        }}>
            <View style={[DropDownStyle.container, {overflow: (isOpen)?undefined:'hidden'}]}>
                <Text style={[DropDownStyle.dropDownText, {color: (selected=="")?'#A5A5A5':'#000000'}]}>
                    {(selected=="")?'Account Type': selected}
                </Text>
                <MaterialIcons name="arrow-drop-down" color={"#000000"} size={24} />

                {/**Drop Down Options */}
                <View style={DropDownStyle.dropDownOptions}>
                    {
                        lists.map((list)=>(
                            <TouchableWithoutFeedback key={list.id} onPress={()=>{setSelected(list.title);setIsOpen(!isOpen);setOption(list.title)}}>
                                <Text style={[DropDownStyle.dropDownText, {paddingVertical: 10}]}>
                                    {list.title}
                                </Text>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}