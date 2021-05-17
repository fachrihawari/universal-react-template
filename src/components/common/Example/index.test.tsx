import React from 'react';
import { render } from '@testing-library/react-native';

import WebComponent from './index.web';
import AndroidComponent from './index.android';
import IosComponent from './index.ios';

test('Web component rendered successfully', () => {
  const { queryByText, toJSON } = render(<WebComponent />);
  expect(toJSON()).toMatchSnapshot();
  expect(queryByText('Example on Web')).not.toBeNull();
});

test('Android component rendered successfully', () => {
  const { queryByText, toJSON } = render(<AndroidComponent />);
  expect(toJSON()).toMatchSnapshot();
  expect(queryByText('Example on Android')).not.toBeNull();
});

test('iOS component rendered successfully', () => {
  const { queryByText, toJSON } = render(<IosComponent />);
  expect(toJSON()).toMatchSnapshot();
  expect(queryByText('Example on iOS')).not.toBeNull();
});
