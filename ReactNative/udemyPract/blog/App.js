import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigation } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigation({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'

  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App/>
    </BlogProvider>
)}