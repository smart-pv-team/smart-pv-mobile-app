import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {producers} from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';

export default function ProducersScreen(props) {
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
    navigation.navigate('Producer', {item});
  };

  const renderProducers = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressDevice(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={producers}
        renderItem={renderProducers}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
