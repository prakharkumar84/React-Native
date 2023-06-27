import {StyleSheet, View, FlatList, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ListItemComponent from './ListItemComponent';
import NewListComponent from './NewListComponent';

interface NestedObject {
  [key: string]: null | string | number | boolean | NestedObject;
}
interface MyData {
  [key: string]: null | string | number | boolean | NestedObject;
}

const App = () => {
  const [data, setData] = useState<MyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://prakharkumar84.github.io/Data/data.json',
        {
          headers: {'Content-Type': 'application/json; charset=utf-8'},
        },
      );
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading && <ListItemComponent props={data} />}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
