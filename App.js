import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';
import store from './store';

import InfoScreen from './src/components/InfoScreen';
import GraphScreen from './src/components/GraphScreen';
import AddScreen from './src/components/AddScreen';

const MainNavigator = createAppContainer (
  createBottomTabNavigator ({
    info: { 
      screen:createStackNavigator({
        info:InfoScreen,
        add:AddScreen
      }),
      navigationOptions:{
        title: 'Data',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="description" size={30} color={tintColor} />;
        },
      }
    },
    graph: GraphScreen
  })
);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
