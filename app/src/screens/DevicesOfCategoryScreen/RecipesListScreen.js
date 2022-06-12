import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {getCategoryName, getDevices} from '../../data/MockDataAPI';

export default function DevicesOfCategoryScreen(props) {
  const {navigation, route} = props;

  const item = route?.params?.category;
  const devicesArray = getDevices(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressDevice = item => {
    navigation.navigate('Device', {item});
  };

  const renderDevices = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressDevice(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={devicesArray}
        renderItem={renderDevices}
        keyExtractor={item => `${item.deviceId}`}
      />
    </View>
  );
}
