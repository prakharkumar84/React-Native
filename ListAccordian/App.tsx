import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ListItemComponent from './ListItemComponent';
import NewListComponent from './NewListComponent';

interface MyData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const App = () => {
  const [data, setData] = useState<MyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      const jsonData = await response.json();
      console.log(jsonData); // Process the JSON data as needed
      setData(jsonData);
      setIsLoading(true);
      console.log(data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fetchData();
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
