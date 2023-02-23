import React, { useContext } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";

import trelloLoginWebsiteHtml from "./trelloLoginWebsite.html";
import { UserContext } from "../../context/userContext";
import { API_KEY } from "@env";
import IconButton from "../../components/UI/Buttons/IconButton";
import MainContainer from "../../components/UI/Containers/MainContainer";
import { colors } from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const [visible, setVisible] = React.useState(false);
  let webViewRef;

  function onLoginSuccess(authToken) {
    const url = `https://api.trello.com/1/members/me/?key=${API_KEY}&token=${authToken}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser({ ...data, token: authToken });
        // save data to to async storage
        AsyncStorage.setItem(
          "user",
          JSON.stringify({ ...data, token: authToken })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const config = {
    applicationName: "Imperea",
    trelloApiKey: API_KEY,
    onLoginSuccess: onLoginSuccess,
    onLoginFailure: (data) => {
      console.log("Failure ", data);
    },
  };
  log = (message) => {
    console.log("LOG ", JSON.stringify(message));
  };
  const handleWebViewMessage = async (e) => {
    const { applicationName, onLoginFailure, onLoginSuccess, trelloApiKey } =
      config;
    let data;
    try {
      data = await JSON.parse(e.nativeEvent.data);
      console.log("data", data.type);
      this.log("Received webview message with type: ", data.type);
    } catch (err) {
      this.log("Unable to parse webview message: ", e.nativeEvent.data);
      onLoginFailure("Unable to parse webview message");
    }
    if (data.type === "WEBVIEW_LOADED") {
      if (webViewRef) {
        const message = {
          type: "AUTHORIZE",
          trelloApiKey: trelloApiKey,
          applicationName: applicationName,
        };
        webViewRef.postMessage(JSON.stringify(message));
      }
    } else if (data.type === "AUTH_SUCCESS") {
      onLoginSuccess(data.authToken);
    } else if (data.type === "AUTH_FAILURE") {
      this.log("Authentication failed");
      onLoginFailure("Authentication failed");
    } else {
      this.log("Invalid webview message type: ", data.type);
      onLoginFailure("Invalid webview message type");
    }
  };
  return (
    <>
      {visible ? (
        <WebView
          style={styles.webView}
          source={trelloLoginWebsiteHtml}
          ref={(ref) => (webViewRef = ref)}
          onMessage={handleWebViewMessage}
          javaScriptEnabled={true}
          applicationName={config.applicationName}
          debugEnabled={true}
          onLoginFailure={config.onLoginFailure}
          onLoginSuccess={config.onLoginSuccess}
          trelloApiKey={config.trelloApiKey}
        />
      ) : (
        <MainContainer jc="center">
          <IconButton
            text="Log in with Trello"
            onPress={() => setVisible(true)}
            tc={colors.primaryBright}
          />
        </MainContainer>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
