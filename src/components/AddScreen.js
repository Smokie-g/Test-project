import React, { Component } from 'react';
import { View, Text, Button,TextInput, Alert, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { dataCreate } from '../../actions/main_action';
import DatePicker from 'react-native-datepicker';



class AddScreen extends Component {

    state = {
        date: '',
        income: 0,
        outcome: 0,
        profit: 0
    }

    onButtonPress = () => {
        if (this.state.date=="" || this.state.income=="" || this.state.outcome=="" || this.state.profit=="") {
            return Alert.alert('Sorry, empty=(');
        }
        else if (isNaN(this.state.income) || isNaN(this.state.outcome) || isNaN(this.state.profit)) {
            return Alert.alert('Incorrect values!');
        } 
        else { 
            const { date, income, outcome, profit } = this.state;
            const new_data=[{ date, income, outcome, profit }];
            this.props.dataCreate(new_data);
            this.props.navigation.navigate('info');
        } 
    }
  
    render() {
        return (
            <ScrollView>
                <View style={{marginTop:10, marginLeft:25, marginRight:25}}>
                    <Text style={{marginBottom: 10, fontSize:18, fontWeight: 'bold'}}>Date</Text>
                    <DatePicker
                        dataValid="false"
                        date={this.state.date}
                        value={this.state.date}
                        mode="datetime"
                        placeholder="Select date"
                        format="YYYY-MM-DDTHH:mm:ss.sssZ"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                display: 'none'
                            },
                            dateInput: {
                                height: 40,
                                borderWidth: 2,
                                border: 50,
                                borderRadius: 5,
                                borderColor: '#1E90FF',
                            },
                            placeholderText: {
                                color: '#000',
                                fontSize: 18,
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({date:date});
                        }}
                    />
                </View>
                <TextInput
                    style={{
                        borderBottomWidth:1, 
                        marginBottom:15, 
                        marginLeft: 25,
                        marginRight: 35, 
                        paddingTop: 15, 
                        paddingBottom: 5, 
                        fontSize: 18
                    }}
                    placeholder="Income"
                    placeholderTextColor="#000"
                    keyboardType='numbers-and-punctuation'
                    onChangeText={value=>{
                        this.setState({ income:value })
                    }}
                />
                <TextInput
                    style={{
                        borderBottomWidth:1, 
                        marginBottom:15, 
                        marginLeft: 25,
                        marginRight: 35, 
                        paddingTop: 15, 
                        paddingBottom: 5, 
                        fontSize: 18
                    }}
                    placeholder="Outcome"
                    placeholderTextColor="#000"
                    keyboardType='numbers-and-punctuation'
                    onChangeText={value=>{
                        this.setState({ outcome:value })
                    }}
                />
                <TextInput
                    style={{
                        borderBottomWidth:1, 
                        marginBottom:15, 
                        marginLeft: 25,
                        marginRight: 35, 
                        paddingTop: 15, 
                        paddingBottom: 5, 
                        fontSize: 18
                    }}
                    placeholder="Profit"
                    placeholderTextColor="#000"
                    keyboardType='numbers-and-punctuation'
                    onChangeText={value=>{
                        this.setState({ profit:value })
                    }}
                />
                <View style={{marginTop: 10}}>
                    <Button
                        title='Save'
                        onPress={this.onButtonPress}
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        new_data:state.tableReducer.new_data
    };
};

export default connect(mapStateToProps, {dataCreate})(AddScreen);