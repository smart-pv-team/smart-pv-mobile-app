import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function SwitchButton(props) {
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Włacz/wyłącz</Text>
      </View>
    </TouchableHighlight>
  );
}

SwitchButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
