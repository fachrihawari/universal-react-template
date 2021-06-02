import * as React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef: React.MutableRefObject<NavigationContainerRef | null> =
  React.createRef<NavigationContainerRef>();
export const routeNameRef: React.MutableRefObject<string | null> =
  React.createRef<string>();
export const isReadyRef: React.MutableRefObject<boolean | null> =
  React.createRef<boolean>();

export function navigate(name: string, params?: object) {
  isReadyRef.current && navigationRef.current?.navigate(name, params);
}
export function push(name: string, params?: object) {
  isReadyRef.current &&
    navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function replace(name: string, params?: object) {
  isReadyRef.current &&
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function reset(routes: { name: string; params?: object }[]) {
  isReadyRef.current &&
    navigationRef.current?.resetRoot({
      index: 0,
      routes,
    });
}

export function goBack() {
  isReadyRef.current && navigationRef.current?.goBack();
}

export function popToTop() {
  isReadyRef.current &&
    navigationRef.current?.dispatch(StackActions.popToTop());
}
