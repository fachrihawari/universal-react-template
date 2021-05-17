jest.useFakeTimers()

jest.mock('react-native/Libraries/ReactNative/AppRegistry')
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('react-native/Libraries/Linking/Linking', () => {
  // we need to mock both Linking.getInitialURL()
  // and Linking.getInitialURL().then()
  const getInitialURL = jest.fn()
  getInitialURL.mockReturnValueOnce({ then: jest.fn() })

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: getInitialURL
  }
})