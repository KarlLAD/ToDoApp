import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9965F4',
    borderRadius: 30,
  },

  containerHeader: {
    height: 100,
    width: 170,
    backgroundColor: 'blue',
    padding: 20,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
    margin: 10,
  },
  headerBloc22: {
    backgroundColor: 'green',
    width: 240,
    marginHorizontal: 10,
  },
  headerBloc221: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  HeaderText1: {
    fontSize: 30,
    fontWeight: '800',
  },

  headerBloc222: {
    marginHorizontal: 20,
  },

  HeaderText2: {
    fontSize: 20,
    fontWeight: '600',
  },

  containerBloc3: {
    height: 600,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  topCoursesText: {
    fontSize: 20,
    fontWeight: '700',
  },
  //   topCoursesTitle: {
  //     fontSize: 18,
  //     fontWeight: '600',
  //   },

  containerBrand: {
    flex: 1,
    flexDirection: 'row',
    // height: 100,
    // width: width - 20,
    // marginTop: 10,
    // backgroundColor: '#ccc',
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
});
