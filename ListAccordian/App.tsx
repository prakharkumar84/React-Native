import {StyleSheet, View, FlatList, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ListItemComponent from './ListItemComponent';
import NewListComponent from './NewListComponent';

interface MyLocation {
  [key: string]: string | number | boolean | MyLocation;
}
interface MyCustomer {
  [key: string]: string | number | boolean | MyCustomer;
}
interface MyEdge {
  [key: string]: string | number | boolean | MyEdge;
}
interface GitHub {
  [key: string]: string | number | boolean | GitHub;
}
interface MyData {
  [key: string]: string | number | boolean | MyEdge | MyLocation | MyCustomer;
}

const App = () => {
  const [data, setData] = useState<GitHub[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = './data.json';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/hadley/orgs', {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
      });
      const jsonData = await response.json();
      console.log(jsonData); // Process the JSON data as needed
      setData(jsonData);
      setIsLoading(true);
      console.log(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* {isLoading && <ListItemComponent props={data} />} */}
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
