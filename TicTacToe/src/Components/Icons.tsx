import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;
const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={50} color="#F7CD2E"></Icon>;
      break;
    case 'cross':
      return <Icon name="times" size={50} color="#38CC77"></Icon>;
      break;

    default:
      return <Icon name="pencil" size={38} color="#0D0D0D"></Icon>;
  }
};

export default Icons;

const styles = StyleSheet.create({});
