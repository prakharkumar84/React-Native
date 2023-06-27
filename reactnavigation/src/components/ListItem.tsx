/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';

type ListItemProps = {
  title: string;
  content: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={!isExpanded}>
        <Text style={styles.contentText}>{content}</Text>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentText: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
});

export default ListItem;
