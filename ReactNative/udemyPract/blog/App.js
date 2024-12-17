import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigation } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigation({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'

  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
)}