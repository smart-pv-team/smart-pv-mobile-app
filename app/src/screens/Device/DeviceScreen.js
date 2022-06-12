import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import {getCategoryName, getCategoryById} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewParametersButton from '../../components/ViewParametersButton/ViewParametersButton';
import SwitchButton from '../../components/SwitchButton/SwitchButton';

const {width: viewportWidth} = Dimensions.get('window');

export default function DeviceScreen(props) {
  const {navigation, route} = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: 'true',
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressParameter = item => {
    console.log(' ');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.photo_url}} />
      </View>
      <View style={styles.infoDeviceContainer}>
        <Text style={styles.infoDeviceName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            underlayColor="rgba(73,182,77,0.9)"
            onPress={() =>
              navigation.navigate('Categories', {category, title})
            }>
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <ViewParametersButton
            onPress={() => {
              let parameters = item.parameters;
              let title = 'Parametry dla ' + item.title;
              navigation.navigate('Parameters', {parameters, title});
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <SwitchButton onPress={() => {}} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionDevice}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
