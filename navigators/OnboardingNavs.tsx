import { useWindowDimensions } from 'react-native';
import { useState } from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import { One, Two, Three, Four } from '../screens/Onboarding';

export default function OnboardingNavs(props:any): any {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState<any[]>([
        {key: 'one', title: 'One'},
        {key: 'two', title: 'Two'},
        {key: 'three', title: 'Three'},
        {key: 'four', title: 'Four'}
    ]);

    return (
        <TabView 
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderScene={({route}): any=>{
                switch(route.key){
                    case 'one':
                        return <One changeViews={props.changeViews} />;
                        break;
                    case 'two':
                        return <Two />
                        break;
                    case 'three':
                        return <Three />
                        break;
                    case 'four':
                        return <Four />
                        break;
                    default:
                        return null;
                }
            }}
            renderTabBar={()=>null}
        />
    )
}
