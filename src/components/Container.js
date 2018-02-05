import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={ styles.containerStyle }>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#000',
  }
};

export { Container };
