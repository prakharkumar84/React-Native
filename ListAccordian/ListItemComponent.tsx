import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List, MD3Colors} from 'react-native-paper';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  IconButton,
} from 'react-native-paper';

interface NestedObject {
  [key: string]: null | string | number | boolean | NestedObject;
}
interface MyData {
  [key: string]: null | string | number | boolean | NestedObject;
}
interface MyProps {
  props: MyData[];
}

const renderNestedObject = (nestedObject: MyData) => {
  return Object.entries(nestedObject).map(([nestedKey, nestedValue]) => {
    if (typeof nestedKey !== 'object') {
      return (
        <List.Item
          titleStyle={styles.txt}
          style={styles.listItemNested}
          key={nestedKey}
          title={nestedKey}
          description={nestedValue === null ? 'null' : nestedValue.toString()}
          descriptionNumberOfLines={5}
        />
      );
    } else {
      return (
        <List.Accordion
          style={styles.containerNested}
          titleStyle={styles.txt2}
          key={nestedKey}
          title={nestedKey}
          left={props => <List.Icon {...props} icon="folder" />}
          descriptionNumberOfLines={5}>
          {nestedValue !== null && renderNestedObject(nestedValue)}
        </List.Accordion>
      );
    }
  });
};
const ListItemComponent = ({props}: MyProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);
  // console.log('props');
  // console.log(props[0]);
  return (
    <List.Section>
      {props.map((item, index) => (
        <List.Accordion
          titleStyle={styles.txt1}
          style={expanded ? styles.containerActive : styles.container}
          theme={{colors: {primary: 'black'}}}
          key={index}
          title={'Item' + ' ' + (index + 1).toString()}
          left={props => <List.Icon {...props} icon="folder" />}
          onPress={handlePress}>
          {Object.entries(item).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
              return (
                <List.Accordion
                  style={styles.containerNested}
                  key={key}
                  title={key}
                  left={props => <List.Icon {...props} icon="folder" />}>
                  {value !== null && renderNestedObject(value)}
                </List.Accordion>
              );
            } else {
              return (
                <List.Item
                  style={styles.listItem}
                  titleStyle={styles.txt}
                  key={key}
                  title={key}
                  description={value === null ? 'null' : value?.toString()}
                  descriptionNumberOfLines={5}
                />
              );
            }
          })}
        </List.Accordion>
      ))}
    </List.Section>
  );
};

export default ListItemComponent;

const styles = StyleSheet.create({
  containerActive: {
    flex: 1,
    borderRadius: 5,
    borderColor: '#F2CEA1',
    borderLeftWidth: 4,
    margin: 5,
    backgroundColor: '#FFF6EE',
  },
  container: {
    flex: 1,
    borderRadius: 5,
    borderColor: '#F2CEA1',
    borderLeftWidth: 4,
    margin: 5,
    backgroundColor: 'White',
  },
  containerNested: {
    marginLeft: 10,
    borderRadius: 5,
    borderColor: '#F2CEA1',
    borderLeftWidth: 4,
    margin: 5,
    backgroundColor: '#FFF6EE',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txt1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt2: {
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    borderColor: '#F2CEA1',
    borderLeftWidth: 4,
  },
  listItemNested: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginStart: 20,
    margin: 5,
    borderColor: '#F2CEA1',
    borderLeftWidth: 4,
  },
});
