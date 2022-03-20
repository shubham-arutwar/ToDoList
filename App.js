import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks ⛳</Text>
        <View style={styles.items}>
          <Task text={'task 1'}/>
          <Task text={'task 2'}/>
          <Task text={'task 3'}/>
          <Task text={'task 4'}/>
          <Task text={'task 5'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
