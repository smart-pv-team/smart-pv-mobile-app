import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default function DrawerContainer(props) {
  const {navigation} = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="DEVICES"
          source={require('../../../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('Devices');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../../../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PRODUCERS"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('Producers');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
