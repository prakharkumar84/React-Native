/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import mockData from './mockData';
import {List} from 'react-native-paper';
import Chiller from './chillers';

const ChillerList: React.FC = () => {
  const renderAccordion = (chiller: Chiller) => (
    <List.Accordion
      title={chiller.name}
      right={() => <></>}
      style={styles.accordion}
      titleStyle={styles.title}
      expandedTitleStyle={styles.expandedTitle}
      descriptionStyle={styles.description}>
      <List.Item
        title={`Brick Class: ${chiller.brickClass}`}
        description={`Serial Number: ${chiller.serialNumber}`}
        style={styles.listItem}
        titleStyle={styles.listItemTitle}
        descriptionStyle={styles.listItemDescription}
      />
      <List.Item
        title={`Description: ${chiller.description}`}
        description={`Model: ${chiller.model}`}
        style={styles.listItem}
        titleStyle={styles.listItemTitle}
        descriptionStyle={styles.listItemDescription}
      />
    </List.Accordion>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingBar}>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Connectivity</Text>
          <Text style={styles.headingText}>Device</Text>
          <Text style={styles.headingText}>Run Status</Text>
        </View>
      </View>
      <ScrollView>
        {mockData.map((chiller: any) => (
          <View key={chiller.id} style={styles.accordionContainer}>
            {renderAccordion(chiller)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingBar: {
    backgroundColor: '#1A237E',
    padding: 10,
  },
  headingTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    font: 'bold',
  },
  headingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accordionContainer: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#EDE7F6',
    marginHorizontal: 10,
    padding: 10,
  },
  accordion: {
    backgroundColor: '#EDE7F6',
  },
  title: {
    color: '#303F9F',
    fontSize: 16,
  },
  expandedTitle: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  listItem: {
    backgroundColor: 'transparent',
  },
  listItemTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItemDescription: {
    color: 'black',
    fontSize: 12,
  },
});

export default ChillerList;
