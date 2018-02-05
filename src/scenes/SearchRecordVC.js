import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import { Button } from '../components/Button'

class SearchRecordVC extends Component {
  state = {
              date: "",
              minCount: '',
              maxCount: ''
            }

  constructor(props){
    super(props)

    var dt = new Date();
    moment.locale('en');
    var formattedDate = moment(dt, "ddd MMM DD YYYY").format("YYYY-MM-DD");

    this.state = {
                  date: formattedDate,
                  startDate: formattedDate,
                  endDate: formattedDate
                  }
  }

  componentDidMount () {
    console.disableYellowBox = true;
  }

  handleMinCount = (text) => {
     this.setState({ minCount: text });
  }
  handleMaxCount = (text) => {
     this.setState({ maxCount: text });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Start Date</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.startDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2010-01-01"
          maxDate={this.state.date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              backgroundColor: "#FFF",
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />
        <Text>End Date</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.endDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2010-01-01"
          maxDate={this.state.date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              backgroundColor: "#FFF",
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({endDate: date})}}
        />
        <TextInput
          placeholder="minCount"
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleMinCount}
        />
        <TextInput
          placeholder="maxCount"
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleMaxCount}
        />
        <Button
          onPress={() => this.props.navigation.navigate("RecordListVC",
              {startDate: this.state.startDate,
              endDate: this.state.endDate,
              minCount: this.state.minCount,
              maxCount: this.state.maxCount
              }
          )}>
              Search
        </Button>
      </View>
    );
  }

}

const styles = {
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
};

export default SearchRecordVC;
