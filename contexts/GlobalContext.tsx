import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React, { createContext, useContext } from "react";


interface GlobalProps {
    toSignup: VoidFunction;
    toLogin: VoidFunction;
    onToggleDrawer: VoidFunction;

}


const GlobalContext = createContext<any>(null)


export const useGlobal = (): GlobalProps => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error('Global context error....')
    }

    return context

}
export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const navigation = useNavigation()
    
    const toSignup = () => {
        router.push('/sign-up')
    }

    const toLogin = () => {
        router.push('/login')
    }

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
      };
    
    return(
        <GlobalContext.Provider value={{toSignup, toLogin, onToggleDrawer}}>
            {children}
        </GlobalContext.Provider>
    )
}