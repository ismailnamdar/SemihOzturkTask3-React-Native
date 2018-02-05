import React from 'react';
import { View, Text } from 'react-native';

import Dimensions from 'Dimensions';

const RecordCell = (props) => {
  return (
      <View style={styles.cellStyle}>
        <Text style={styles.textStyle}>
          {props._id}
        </Text>
        <Text style={styles.textStyle}>
          {props._key}
        </Text>
        <Text style={styles.valueStyle}>
          {props.value}
        </Text>
        <Text style={styles.textStyle}>
          {props.createdAt}
        </Text>
        <Text style={styles.textStyle}>
          {props.totalCount}
        </Text>
      </View>
  );
};

const styles = {
  cellStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 10,
    flex: 1
  },
  valueStyle: {
    color: '#000',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 10,
    flex: 3
  }
};

export { RecordCell };
