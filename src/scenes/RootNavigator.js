import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import SearchRecordVC from './SearchRecordVC';
import RecordListVC from './RecordListVC';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'SearchRecordVC'})
  ]
})

const RootNavigator = StackNavigator({
  SearchRecordVC: {
    screen: SearchRecordVC,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
          backgroundColor: '#FFD300',
      },
      headerTitle: <View style={{
                          height: 20,
                          alignSelf: 'center'
                    }}>
                      <TouchableOpacity>
                        <Text>TASK 3</Text>
                      </TouchableOpacity>
                    </View>
      ,
      headerLeft: <TouchableOpacity>
                    <Image
                      style={{
                        height: 30,
                        width: 80,
                        marginLeft: 10,
                      }}
                      source={require('../img/biTaxi_logo.png')}
                    />
                  </TouchableOpacity>,
      headerRight: <TouchableOpacity>
                      <Image
                        style={{
                          height: 40,
                          width: 80,
                          marginRight: 10
                        }}
                        source={require('../img/getir_logo.png')}
                      />
                    </TouchableOpacity>,
    }),
  },
  RecordListVC: {
    screen: RecordListVC,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
          backgroundColor: '#FFD300',
      },
    }),
  }
})

  export default RootNavigator;
