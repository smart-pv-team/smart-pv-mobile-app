import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {devices} from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import {getCategoryName} from '../../data/MockDataAPI';

export default function DevicesScreen(props) {
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
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
        numColumns={1}
        data={devices}
        renderItem={renderDevices}
        keyExtractor={item => `${item.deviceId}`}
      />
    </View>
  );
}
