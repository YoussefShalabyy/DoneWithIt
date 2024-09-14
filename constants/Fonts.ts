import {useFonts} from 'expo-font'

export default function useCustomFont(){
    const [loaded]=useFonts({
        RalewayRegular:require("../assets/fonts/Raleway-Regular.ttf"),
        RalewaySemiBold:require("../assets/fonts/Raleway-SemiBold.ttf")
    })

    return loaded;
}