import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

interface CardProps {
  id: number;
  imageSource: string;
  title: string;
  description: string;
  buttonText: string;
  navigation: any;
  onPressButton: (id: number) => void;
}

const States: React.FC<CardProps> = ({
  id,
  imageSource,
  title,
  description,
  buttonText,
  navigation,
  onPressButton,
}) => {
  const handleButtonPress = () => {
    // Example arguments
    onPressButton(id);
  };
  return (
    <View style={styles.card}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button title={buttonText} onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 390,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default States;
