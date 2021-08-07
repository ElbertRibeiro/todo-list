import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
interface Props { text: string }
export function Task(props: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}