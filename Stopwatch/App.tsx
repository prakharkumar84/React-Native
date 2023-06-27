import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
interface Timer {
  id: string;
  time: string;
}
function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [millis, setMillis] = useState(0);
  const millisecondRef = useRef<NodeJS.Timeout | null>(null);
  const [components, setComponents] = useState<Timer[]>([]);

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
      let newTimer = formatTime(timer);
      const newItem: Timer = {
        id: Math.floor(Math.random() * 1000).toString(),
        time: newTimer,
      };
      setComponents(arr => [...arr, newItem]);
      console.log(components);
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
    setComponents([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText}>Stopwatch</Text>
      </View>
      <View style={styles.count}>
        <View style={styles.round}>
          <ImageBackground
            style={styles.image}
            source={{uri: 'https://clipart-library.com/images/8TzKz9yRc.png'}}>
            <Text style={styles.timer}>{formatTime(timer)}</Text>
          </ImageBackground>
        </View>
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
        {
          <FlatList
            data={components}
            renderItem={item => (
              <View style={styles.card}>
                <Text style={styles.cardTxt}>{`Lap:`}</Text>
                <Text>{item.item.time}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        }
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
  round: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    padding: 10,
    fontSize: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingBottom: 5,
    borderColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 50,
    borderRadius: 5,
  },
  cardTxt: {
    fontWeight: '600',
    marginHorizontal: 10,
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
