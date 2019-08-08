import React, { Component } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { BarChart } from 'react-native-chart-kit';
import { dataFetch } from '../../actions/main_action';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Header } from './Header';

const screenWidth = Dimensions.get('window').width;

class GraphScreen extends Component {
    
    static navigationOptions = () => ({
        title: 'Graphic',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="graphic-eq" size={30} color={tintColor} />;
        }
    })
    
    render() {

        const dataIncome=_.map(this.props.new_data, 'income').map(parseFloat);
        const dataSumIncome=_.reduce(dataIncome, function(memo, item) {
            return memo + item;
        }, 0);

        const dataOutcome=_.map(this.props.new_data, 'outcome').map(parseFloat);
        const dataSumOutcome=_.reduce(dataOutcome, function(memo, item) {
            return memo + item;
        }, 0);

        const dataProfit=_.map(this.props.new_data, 'profit').map(parseFloat);
        const dataSumProfit=_.reduce(dataProfit, function(memo, item) {
            return memo + item;
        }, 0);

        const data = {
            labels: ['Income','Outcome','Profit'],
            datasets:[{ data:[dataSumIncome, dataSumOutcome, dataSumProfit] }]
        };

        return (
            <ScrollView style={{ paddingTop: 10 }}>
                <Header  headerText="Data Graphic" />
                <BarChart
                    style={{marginLeft: 10}}
                    data={data}
                    width={screenWidth}
                    height={480}
                    chartConfig={chartConfig}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const new_data = _.map(state.new_data, (val) => {
      return {...val};
    })
    return {new_data:state.tableReducer.new_data};
};

const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2
};

export default connect(mapStateToProps, {dataFetch})(GraphScreen);