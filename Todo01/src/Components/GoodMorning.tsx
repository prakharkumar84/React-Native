import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface props {
  lenActive: number;
  lenDone: number;
}
const GoodMorning = ({lenActive, lenDone}: props) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const formattedDate = currentDate.toLocaleDateString();

  // Convert day index to string representation
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = days[dayOfWeek];
  let percentage;
  if (lenDone !== 0) {
    percentage = (lenDone / (lenDone + lenActive)) * 100;
    percentage = percentage.toFixed(2);
  } else {
    percentage = 0;
  }

  const per = percentage.toString() + '%';

  return (
    <View style={styles.GoodMorning}>
      <View style={styles.GoodMorningTextContainer}>
        <Text style={styles.GoodMorningText}>Good</Text>
        <Text style={styles.GoodMorningText}>Morning</Text>
      </View>
      <View style={styles.detailscontainer}>
        <View style={styles.dayDetails}>
          <Text style={styles.dayText}>Today's {today}</Text>
          <Text style={styles.dayTexty}>{formattedDate}</Text>
        </View>
        <View style={styles.TaskProgress}>
          <Text style={styles.dayText}>{per}</Text>
          <Text style={styles.dayTexty}>Task Completed</Text>
        </View>
      </View>
    </View>
  );
};

export default GoodMorning;

const styles = StyleSheet.create({
  GoodMorning: {
    backgroundColor: '#111C2F',
    flexDirection: 'column',
    // borderWidth:2,
    // borderColor:'red'
  },
  GoodMorningTextContainer: {
    flexDirection: 'column',
    marginTop: 5,
  },
  GoodMorningText: {
    fontSize: 50,
    marginStart: 20,
    color: '#5E8AFF',
    fontWeight: '500',
  },
  dayText: {
    fontSize: 16,
    marginStart: 20,
    color: 'white',
    fontWeight: '500',
    marginRight: 20,
  },
  dayTexty: {
    fontSize: 16,
    marginStart: 20,
    color: 'grey',
    fontWeight: '500',
    marginRight: 20,
  },
  detailscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  dayDetails: {},
  TaskProgress: {},
});
