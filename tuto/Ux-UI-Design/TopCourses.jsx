import {View, Text, Image} from 'react-native';
import React from 'react';
import designStyles from './designStyles';
// import {useNavigation} from '@react-navigation/native';

const TopCourses = ({courses}) => {
  //   const navigation = useNavigation();
  //   console.log('courses :', courses);
  return (
    <View
      style={{
        // flexDirection: 'row',
        height: 200,
        width: 260,
        backgroundColor: 'red',
        borderRadius: 20,

        // flex: 1,

        // borderBottomEndRadius: 30,
        margin: 30,
      }}>
      {/* <Text>text 1</Text>
      <Text>text 2</Text>
      <Text>text 3</Text>
      <Text>text 4</Text> */}
      <Text style={{paddingLeft: 25}}>{courses.rate}</Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: 'white',
          margin: 10,
        }}>
        {courses.title}
      </Text>
      <View
        style={{
          // flexDirection: 'row',
          // justifyContent: 'flex-start',
          marginVertical: 20,
          gap: 10,
          margin: 10,
        }}>
        <Image
          source={courses.image}
          style={{height: 50, width: 50, borderRadius: 30}}
        />

        <Text style={{}}>{courses.poste}</Text>
      </View>
      <Text
        style={{
          marginHorizontal: 70,
          marginVertical: -30,
          fontSize: 16,
          color: 'white',
        }}>
        {courses.name}
      </Text>
    </View>
  );
};

export default TopCourses;
