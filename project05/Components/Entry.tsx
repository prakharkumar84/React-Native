import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface homeProps {
  navigation: any;
}
const Entry: React.FC<homeProps> = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={{
          uri: 'https://cdn.gencraft.com/prod/user/aac51b66-87b9-483f-9251-673f1c78a84a/718db15b-46fb-4730-aef6-19c065bc50c6/images/image1_1024_1024_watermark.jpg?Expires=1685810804&Signature=Lr~D7FIF2gAemhNDDouHMC4JanXThBFC3kedL6vnQvAiMBb-7fYp~DWRC7kQ3QzhwgInq~OBH57FLjFIdYY1LBeybD2SDFptl5r4MWlRgC5hC7cNtXVvLj6FJ7h9As-qz22c4jPWuLN75qG1SOB3lCMXR2jVAbm1~Bn2JKiSEO90zyEuS28je3CZHOIqO-LPQBQkpmJkfZYQVUiYNDDhLeff4pTWSNHM-leAFXDjJFs-9txz7m9sB9SOkwTZtAQHdol3lTf~DXAJkKxkdLWxA3mOeHZN2iaMTC~vwd3JRRCcRNXpYfXVTED3l~HO61ByKMKQyRuOZyESimh02yXYbQ__&Key-Pair-Id=K3RDDB1TZ8BHT8',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.btn}>
          <Button
            color="#000000c0"
            title="Let's Start Wandering"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  main: {
    flex:1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btn:{
    margin:40,
  }
});
