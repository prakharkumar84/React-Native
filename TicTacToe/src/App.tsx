import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from './Components/Icons';
import {FlatList} from 'react-native';
import {Pressable} from 'react-native';

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game.`);
    } else if (
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5] &&
      gameState[3] !== 'empty'
    ) {
      setGameWinner(`${gameState[3]} won the game.`);
    } else if (
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8] &&
      gameState[6] !== 'empty'
    ) {
      setGameWinner(`${gameState[6]} won the game.`);
    } else if (
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game.`);
    } else if (
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game.`);
    } else if (
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7] &&
      gameState[1] !== 'empty'
    ) {
      setGameWinner(`${gameState[1]} won the game.`);
    } else if (
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8] &&
      gameState[2] !== 'empty'
    ) {
      setGameWinner(`${gameState[2]} won the game.`);
    } else if (
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6] &&
      gameState[2] !== 'empty'
    ) {
      setGameWinner(`${gameState[2]} won the game.`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: 'white',
        textColor: 'black',
      });
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position already filled.',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
    checkWinner();
  };

  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Text style={styles.txt}>Tic Tac Toe</Text>
      </View>
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
          ]}>
          <Text style={styles.gameTurnTxt}>
            Player {isCross ? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}
      <FlatList
        style={styles.grid}
        numColumns={3}
        data={gameState}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeItem(index)}>
            <Icons name={item} />
          </Pressable>
        )}></FlatList>
      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start New Game' : 'Reload Game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  nav: {
    backgroundColor: 'aliceblue',
    height: 50,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginStart: 10,
    color: 'black',
  },
});