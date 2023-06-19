import React, {useEffect, useRef, useState} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [millis, setMillis] = useState(0);
  const millisecondRef = useRef<NodeJS.Timeout | null>(null);
  const [isSaved, setisSaved] = useState(false);
  const [components, setComponents] = useState<JSX.Element[]>([]);
  useEffect(() => {
    // Function to add components back-to-back
    const addComponents = () => {
      const newComponents: JSX.Element[] = [];

      // Add component 1
      newComponents.push(<Text key="component1">Component 1</Text>);

      // Add component 2
      newComponents.push(<Text key="component2">Component 2</Text>);

      // Add component 3
      newComponents.push(<Text key="component3">Component 3</Text>);

      setComponents(newComponents);
    };

    // Call the addComponents function on event trigger
    // For example, when a button is pressed
    addComponents();
  }, []);
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60);
    let minute;
    if (minutes >= 60) {
      minute = minutes % 60;
    } else {
      minute = minutes;
    }
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${(
      millis % 1000
    )
      .toString()
      .padStart(3, '0')}`;
  };
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (millisecondRef.current) {
        clearInterval(millisecondRef.current);
      }
    }
  };
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setisSaved(true);
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);

      millisecondRef.current = setInterval(() => {
        setMillis(prevmillis => prevmillis + 100);
      }, 100);
    } else {
      setIsRunning(false);
      stopTimer();
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
    setMillis(0);
    setisSaved(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText}>Stopwatch</Text>
      </View>
      <View style={styles.count}>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.time}>
        {isSaved && (
          <View>
            <Text>{timer}</Text>
          </View>
        )}
      </View>
      <View>
        <Button title="Add Components" onPress={() => {}} />
        {components}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: 'white',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    elevation: 5,
  },
  navText: {
    fontSize: 20,
    fontWeight: '500',
    margin: 10,
  },
  count: {
    height: Dimensions.get('window').height / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  time: {},
});

export default App;
