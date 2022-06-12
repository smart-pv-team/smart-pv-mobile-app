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
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  getParameterName,
  getCategoryName,
  getCategoryById,
} from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewParametersButton from '../../components/ViewParametersButton/ViewParametersButton';
import SwitchButton from '../../components/SwitchButton/SwitchButton';

const {width: viewportWidth} = Dimensions.get('window');

export default function ProducerScreen(props) {
  const {navigation, route} = props;
  const item = route.params?.item;

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

  const renderImage = ({item}) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: item}} />
    </View>
  );

  const onPressParameter = item => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.photo_url}} />
      </View>
      <View style={styles.infoDeviceContainer}>
        <Text style={styles.infoDeviceName}>{item.name}</Text>

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
