import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/landingStyles.js";
import appStyles from "../styles/appStyles.js";
import useAuth from "../hooks/useAuth.js";
import HomeSvgComponent from "../svg-images/HomeSvgComponent.js";
import HomeBlobSvgComponent from "../svg-images/HomeBlobSvgComponent.js";
import PurpleBGPatternSvgComponent from "../svg-images/PurpleBGPatternSvgComponent.js";
import { useTypingText } from "../hooks/useTypingText.js";

const LandingScreen = () => {
  const { user, setUser } = useAuth();
  
  // Clear user after sign-out
  useEffect(() => {
    setUser('');
  }, []);

  const navigation = useNavigation();

  const { word } = useTypingText(['fun', 'connection', 'adventures',
    'friendship', 'smiles', 'laughter', 'play'], 100, 20);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text>
          <Text style={appStyles.textLogoPurple}>Bark</Text>
          <Text style={appStyles.textLogoPurple}> </Text>
          <Text style={appStyles.textLogoBlack}>Mingle</Text>
        </Text>
        <HomeSvgComponent style={styles.image} />
        <HomeBlobSvgComponent style={styles.blob} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textDescription}>
          <Text style={appStyles.landingDescription}>
            {`Bringing together dogs and owners for \n`} <Text style={{color: "#1E1E1E"}}>{word}</Text>
          </Text>
          
        </View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={appStyles.textWhite}> Get Started </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={appStyles.textWhite}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={appStyles.textSignIn}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <PurpleBGPatternSvgComponent style={styles.background} />
      </View>
    </View>
  );
};

export default LandingScreen;
