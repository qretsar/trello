import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './screens/Navigator/Navigation';
import {UserProvider} from './context/userContext';
function App() {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

export default App;
