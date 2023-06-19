import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {List} from 'react-native-paper';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  IconButton,
} from 'react-native-paper';

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
interface MyProps {
  props: MyData[];
}
const NewListComponent = ({props}:MyProps) => {
  return (
    <View>
      {props.map((item, index) => (
        <>
          <List.Item
            title={item.login}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.id}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.node_id}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.avatar_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.gravatar_id}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.html_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.followers_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.following_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.gists_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.starred_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.subscriptions_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.organizations_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.repos_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.events_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.received_events_url}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.type}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
          <List.Item
            title={item.site_admin}
            theme={DefaultTheme}
            titleNumberOfLines={5}
          />
        </>
      ))}
    </View>
  );
}

export default NewListComponent

const styles = StyleSheet.create({})