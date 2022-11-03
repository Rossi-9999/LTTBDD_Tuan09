import { StyleSheet, Text, View } from 'react-native';
import FollowMouse from './components/FollowMouse';
import Cau2 from './components/Cau2';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FollowMouse/> */}
      <Cau2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
