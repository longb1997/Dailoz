import {images} from '@assets';
import {TabView} from '@components';
import {Grahpic, Home, Profile, Task} from '@features';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {APP_SCREEN} from '../screenTypes';

const Tab = createBottomTabNavigator();

const ImagesForTabView = [
  {
    id: 1,
    name: APP_SCREEN.HOME,
    component: Home,
    active: images.homeInactive,
    idle: images.home,
  },
  {
    id: 2,
    name: APP_SCREEN.TASK,
    component: Task,
    active: images.documentInactive,
    idle: images.document,
  },
  {
    id: 3,
    name: APP_SCREEN.GRAPHIC,
    component: Grahpic,
    active: images.activityInactive,
    idle: images.activity,
  },
  {
    id: 4,
    name: APP_SCREEN.PROFILE,
    component: Profile,
    active: images.folderInactive,
    idle: images.folder,
  },
];
export const MainDrawerScreen = () => (
  <Tab.Navigator tabBar={props => <TabView {...props} />}>
    {ImagesForTabView.map((tab): any => (
      <Tab.Screen
        name={tab.name}
        component={tab.component}
        initialParams={{active: tab.active, idle: tab.idle}}
      />
    ))}
  </Tab.Navigator>
);
