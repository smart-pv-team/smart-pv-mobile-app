import {StyleSheet, Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const deviceNumColums = 1;
// item size
const DEVICE_ITEM_HEIGHT = 150;
const DEVICE_ITEM_MARGIN = 20;

// 2 photos per width
export const DeviceCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: DEVICE_ITEM_MARGIN,
    marginTop: 20,
    width:
      (SCREEN_WIDTH - (deviceNumColums + 1) * DEVICE_ITEM_MARGIN) /
      deviceNumColums,
    height: DEVICE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (deviceNumColums + 1) * DEVICE_ITEM_MARGIN) /
      deviceNumColums,
    height: DEVICE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
