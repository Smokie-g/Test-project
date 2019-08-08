import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import { dataFetch } from '../../actions/main_action';
import _ from 'lodash';

class InfoScreen extends Component {
  
  componentWillMount() {
    this.props.dataFetch();
  }

  componentWillReceiveProps(nextProps){ 
    this.createDataSource(nextProps); 
  } 
    
  createDataSource({tableReducer}){ 
    const temp = tableReducer.concat(this.props.new_data);
    console.log(temp);
    this.setState({data:temp});
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'List of data',
    headerTitleStyle: {
      fontSize: 24,
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#1E90FF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
    },
    headerRight: (
      <Button
        title='Add'
        onPress={() => navigation.navigate('add')}
        color= '#fff' 
      />
    ),
  })

  renderItems = () => {
    return this.props.new_data.map(item => 
      <View style={styles.viewStyle}> 
        <Text style={styles.textStyle}> 
          {'Date: '+item.date} {'\n'}
          {'Income: '+item.income} {'\n'}
          {'Outcome: '+item.outcome} {'\n'}
          {'Profit: '+item.profit} {'\n'}
        </Text>
      </View>
    )
  }

  render() {
    const state = this.state;
    return (
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollStyle}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

  const mapStateToProps=(state)=>{
    const tableReducer = _.map(state.tableReducer, (val)=>{
      return {...val};
    })
    return {tableReducer, new_data:state.tableReducer.new_data};
  };

  const styles = StyleSheet.create({
    viewStyle: {
      justifyContent: 'space-between',
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderColor: '#1E90FF',
      borderWidth: 5,
      borderRadius: 10
    },
    textStyle: {
      fontSize: 18,
      textAlign: 'left',
      color: '#000'
    },
    scrollStyle: {
      backgroundColor: '#fff'
    }
  });

export default connect(mapStateToProps, {dataFetch})(InfoScreen);