import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewParametersButton(props) {
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Zmien parametry</Text>
      </View>
    </TouchableHighlight>
  );
}

ViewParametersButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
