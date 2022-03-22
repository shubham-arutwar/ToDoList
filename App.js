import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput, Keyboard, Alert} from 'react-native';
import Task from './components/Tasks';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const checkText = () => {
    text => setTask(text);
  }

  const handleAddTask =  () => {
    Keyboard.dismiss();
    if (task == null) {
      console.log("empty string");
    }
    else {
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks ⛳</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => Alert.alert("Task completed", "Do you want to delete task?",[
                {text: "yes", onPress: () => completeTask(index)},
                {text: "No", onPress: () => console.log("task not deleted")},
                ])
                }>
              {/* <TouchableOpacity key={index} onPress={() => completeTask(index)}>     */}
                <Task text={item}></Task>
              </TouchableOpacity>
            );
            <Task key={index} text={item}></Task>
          })}
        </View>
      </View>
      <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task here !"} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPressIn={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
    width: '100%',
  },
  writeTaskWrapper: {
    position: 'absolute',
    height: 60,
    bottom: 0,
    backgroundColor:'#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 0,
    // width: 270,
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    borderRadius: 0,
    borderColor: '#C0C0C0',
    borderWidth: 0,
  },
  addWrapper: {
    right: 10,
    bottom: 3,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 40,
    color: '#55BCF6',
    opacity: 0.8,
  },
});