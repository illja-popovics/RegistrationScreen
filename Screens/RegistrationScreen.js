import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

const bgImage = require("../assets/photo_bg.png");
const profilePlaceholder = require("../assets/add_photo.png");

const RegistrationPage = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" translucent={true} />
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.background}>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Реєстрація</Text>
            <View style={styles.fields}>
              <TextInput style={styles.textField} placeholder="Логін" />
              <TextInput
                style={styles.textField}
                placeholder="Адреса електронної пошти"
              />
              <View style={styles.passwordGroup}>
                <TextInput
                  style={styles.passwordField}
                  placeholder="Пароль"
                  placeholderTextColor="#B0B0B0"
                  secureTextEntry={!isPasswordVisible}
                />
                <Pressable
                  style={styles.toggleButton}
                  onPress={togglePasswordVisibility}
                >
                  <Text style={styles.toggleButtonText}>
                    {isPasswordVisible ? "Сховати" : "Показати"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <Pressable onPress={onPressFunction} style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Зареєстуватися</Text>
            </Pressable>
            <Pressable onPress={onEnterFunction} style={styles.loginLink}>
              <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
          <Image style={styles.avatar} source={profilePlaceholder}></Image>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  formContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: 549,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 132,
    height: 120,
    zIndex: 2,
    position: "absolute",
    bottom: 489,
  },
  heading: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    paddingTop: 92,
    paddingBottom: 33,
  },
  fields: {
    marginBottom: 27,
  },
  textField: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 16,
  },
  passwordGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 16,
  },
  passwordField: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  toggleButton: {},
  toggleButtonText: {
    fontSize: 16,
    color: "#1B4371",
  },
  registerButton: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: "column",
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
  },
  loginLink: {
    margin: 16,
  },
  loginLinkText: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

const onPressFunction = () => {};
const onEnterFunction = () => {};

export default RegistrationPage;