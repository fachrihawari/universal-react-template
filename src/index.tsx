import { AppRegistry, Platform } from 'react-native';

import App from './App';
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  const serviceWorker = require('./serviceWorkerRegistration');
  const reportWebVitals = require('./reportWebVitals').default;
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
