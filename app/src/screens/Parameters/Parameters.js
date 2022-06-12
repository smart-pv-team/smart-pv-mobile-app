import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {getAllParameters} from '../../data/MockDataAPI';

export default function Parameters(props) {
  const {navigation, route} = props;

  const item = route.params?.parameters;
  const parametersArray = getAllParameters(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressParameter = item => {
    console.log(' ');
  };

  const renderParameter = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressParameter(item[0])}>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={require('../../../assets/icons/ingredients.png')}
        />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{color: 'grey'}}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={parametersArray}
        renderItem={renderParameter}
        keyExtractor={item => `${item.deviceId}`}
      />
    </View>
  );
}
