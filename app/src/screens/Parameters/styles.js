import {StyleSheet, Dimensions} from 'react-native';
// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const DEVICE_ITEM_HEIGHT = 50;
const DEVICE_ITEM_OFFSET = 10;
const DEVICE_ITEM_MARGIN = DEVICE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: DEVICE_ITEM_OFFSET,
    marginTop: 30,
    width:
      (SCREEN_WIDTH - DEVICE_ITEM_MARGIN) / numColumns - DEVICE_ITEM_OFFSET,
    height: DEVICE_ITEM_HEIGHT + 60,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
  photo: {
    width:
      (SCREEN_WIDTH - DEVICE_ITEM_MARGIN) / numColumns - DEVICE_ITEM_OFFSET,
    height: DEVICE_ITEM_HEIGHT,
    borderRadius: 60,
  },
});

export default styles;
