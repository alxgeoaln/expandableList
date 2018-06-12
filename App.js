
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const data = [
  'Apparel', 
  'Beauty', 
  'Electronics', 
  'Grocery',
  'Home Improvement',
  'Jewlry', 
  'Pharmacy'
];

import ExpandableList from './components/ExpandableList';

export default class App extends Component {
  

  

 render() {
   return (
     <View style={styles.container}>
       <ExpandableList
        data={data}
       />
       </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
});