import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Dimensions from 'Dimensions';

const RecordCellContainer = (props) => {
  return (
      <ScrollView>
        <View style={{flex: 1, width: Dimensions.get('window').width}}>
          {props.children}
        </View>
      </ScrollView>
  );
};

export { RecordCellContainer };
