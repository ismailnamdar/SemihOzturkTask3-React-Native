import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { RecordCell, RecordCellContainer } from '../components';

class RecordListVC extends Component {
  state = { isLoading: true, cell: [], slider: [] }

  componentDidMount() {
    this.requestRecords()
  }

  configureURL() {
    var url = 'https://getir-bitaksi-hackathon.herokuapp.com/searchRecords';
    url = url + "?startDate=" + this.props.navigation.state.params.startDate +
                "&endDate=" + this.props.navigation.state.params.endDate +
                "&minCount=" + this.props.navigation.state.params.minCount +
                "&maxCount=" + this.props.navigation.state.params.maxCount;

    return url;
  }

  requestRecords() {
    var url = this.configureURL();
    let cell = [];
    var slider = [];

    fetch(url, { method: "POST" })
        .then(response => response.json())
        .then((response) => {
          var data = response.records.map(function(item) {
            return {
              data: item._id,
              count: item.totalCount
            };
          });

          for (let i = 0; i < data.length; i++) {
            if(i != 0 && i % 10 == 0) {
              slider.push(<RecordCellContainer>{cell}</RecordCellContainer>);
              cell = [];
            }

            cell.push( <RecordCell _id={data[i]["data"]["_id"]}
                                    _key={data[i]["data"]["key"]}
                                    value={data[i]["data"]["value"]}
                                    createdAt={data[i]["data"]["createdAt"]}
                                    totalCount={data[i]["count"]}
                        />
                      );

            if(i == data.length - 1) {
              slider.push(<RecordCellContainer>{cell}</RecordCellContainer>);
            }
          }

          this.setState({
                        data: data,
                        cell: cell,
                        slider: slider,
                        isLoading: false});

        }).catch((err) => {
            console.log('fetch', err);
        });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    else {
      return(
        <View style={{flex: 1}}>
          <View style={styles.cellStyle}>
            <Text style={styles.textStyle}>
              _id
            </Text>
            <Text style={styles.textStyle}>
              key
            </Text>
            <Text style={styles.valueStyle}>
              value
            </Text>
            <Text style={styles.textStyle}>
              created
            </Text>
            <Text style={styles.textStyle}>
              count
            </Text>
          </View>
          <ScrollView horizontal={true} pagingEnabled={true}>
            {this.state.slider}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = {
  cellStyle: {
    flex: 0.1,
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

export default RecordListVC;
