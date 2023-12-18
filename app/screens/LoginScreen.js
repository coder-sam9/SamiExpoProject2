import React, { useState } from "react";
import { Image, Switch, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import authApi from "../api/userCalls";
import jwt_decode from "jwt-decode";
import { Formik } from "formik";
import * as yup from "yup";
import storage from "../auth/storage";
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

function LoginScreen(props) {
  // console.log(storage.getToken());
  const loginUser = async (values) => {
    // console.log(values);
    const response = await authApi.loginUser(values);
    //stop execution till response, because awaiting above
    if (response.ok) {
      // console.log("Token: " + response.data);
      // console.log(response);
      storage.storeToken(response.data);

      const user = jwt_decode(response.data);
      // console.log(user);
    } else console.log("Error fetching data");
  };

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <AppScreen
      style={{ justifyContent: "center", alignItems: "center", padding: 10 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 100, borderRadius: 40 }}
        />
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => loginUser(values)}
        validationSchema={loginValidationSchema}
      >
        {({
          handleChange,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Enter email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {errors.email && (
              <Text style={{ fontSize: 14, color: "red" }}>{errors.email}</Text>
            )}
            <AppTextInput
              icon="lock"
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {errors.password && (
              <Text style={{ fontSize: 14, color: "red" }}>
                {errors.password}
              </Text>
            )}
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

export default LoginScreen;
