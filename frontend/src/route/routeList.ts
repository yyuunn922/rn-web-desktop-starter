import React from 'react';
import {Main} from '../test/main.tsx';
import {NotFound} from '../view/notFound.tsx';

export type RouteListType = {
  name: string;
  title?: string;
  component: React.ComponentType;
  path?: string;
};

export enum RouteListEnum {
  main = 'main',
  notFound = 'notFound',
  temp = 'temp',
}

export type RouteList = {
  [RouteListEnum.main]: undefined;
  [RouteListEnum.notFound]: undefined;
  [RouteListEnum.temp]: undefined;
};

export const ScreenListData: RouteListType[] = [
  {
    name: RouteListEnum.main,
    component: Main,
    path: '/',
  },
  {
    name: RouteListEnum.temp,
    component: Main,
    path: '/aa/a',
  },
  {name: RouteListEnum.notFound, component: NotFound, path: '*'},
];
