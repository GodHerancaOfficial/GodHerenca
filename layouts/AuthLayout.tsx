import { ScrollView, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import { IntroText, ActionButtons, LoginWith } from "../components/Auth";
import { AuthLayout_Style } from "../styles/Auth";
import { GeneralModal } from "../components/modals";
import { useState } from "react";


interface Props {
    children: any,
    section: string,
    navigate?: any,
    active: boolean,
    handlePress?: () => any;
    authFlashMessage?: JSX.Element | any;
};

export default function AuthLayout({ children, section, navigate, active, handlePress, authFlashMessage}: Props): any {
    return (
      <View style={AuthLayout_Style.container}>
        {authFlashMessage && authFlashMessage}
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-end",
            minHeight: "98%",
          }}
        >
          {/* <StatusBar translucent={false} backgroundColor={'#ffffff'} barStyle={'dark-content'} /> */}
          <View style={AuthLayout_Style.container1}>
            <IntroText section={section} />
            {children}
            <ActionButtons
              active={active}
              section={section}
              handlePress={handlePress}
              navigate={navigate}
            />
            {section == "Login" ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigate("Forgot");
                }}
              >
                <Text style={[AuthLayout_Style.p, AuthLayout_Style.pBold]}>
                  Forgot Password? {"\n"}
                </Text>
              </TouchableWithoutFeedback>
            ) : null}
            <Text style={AuthLayout_Style.p}>
              {"\n"}Or Continue {"\n\n"}
            </Text>
            <LoginWith />
            {/**Footer section */}
            {section == "Login" ? (
              <Text style={AuthLayout_Style.p}>
                Don't have an account?{" "}
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigate("Signup");
                  }}
                >
                  <Text style={AuthLayout_Style.pBold}>Sign up</Text>
                </TouchableWithoutFeedback>
              </Text>
            ) : (
              <Text style={AuthLayout_Style.p}>
                Already have an account?{" "}
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigate("Login");
                  }}
                >
                  <Text style={AuthLayout_Style.pBold}>Login</Text>
                </TouchableWithoutFeedback>
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
}
