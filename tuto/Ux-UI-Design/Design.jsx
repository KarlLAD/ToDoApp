import {View, Text, Image, FlatList, Button} from 'react-native';
import React from 'react';
import designStyles from './designStyles';
import TopCourses from './TopCourses';
import {courses} from './data';
import ForYou from './ForYou';
import {auth} from '@react-native-firebase/auth';

const Design = () => {
  return (
    //   bloc 1
    <View style={designStyles.container}>
      const deconnection = auth().SignedIn();
      <Button title="Sign in : Validez !" onPress={() => inscription()} />
      {/* bloc 2 */}
      <View style={designStyles.containerHeader}>
        {/* bloc 2.1 */}
        <Image
          source={require('./Assets/alex_2.jpg')}
          style={designStyles.containerImage}
        />
        {/* bloc 2.2 */}
        <View style={designStyles.headerBloc22}>
          {/* bloc 2.2.1 */}
          <View style={designStyles.headerBloc221}>
            <Text style={designStyles.HeaderText1}>Hi, Davis</Text>
          </View>
          {/* bloc 2.2.2 */}
          <View style={designStyles.headerBloc222}>
            <Text style={designStyles.HeaderText2}>
              learning is easier and faster with us
            </Text>
          </View>
        </View>
      </View>
      {/*     Top courses*/}
      <View style={designStyles.containerBloc3}>
        <Text style={designStyles.topCoursesText}>Top Courses</Text>
        <FlatList
          data={courses}
          renderItem={({item}) => <TopCourses courses={item} />}
          keyExtractor={item => item.id}
        />
        <ForYou />
      </View>
      {/* For You */}
    </View>
  );
};

export default Design;
