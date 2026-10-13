import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView
  source={{ uri: 'https://chat.websitedevelopershub.co.uk' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  startInLoadingState={true}
  originWhitelist={['*']}
  mixedContentMode="always"
  onError={(e) => console.log('WebView error', e.nativeEvent)}
/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
