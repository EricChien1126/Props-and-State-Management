/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div className="App">
      {/* Pass the tasks to the ToDoList component */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
<ToDoList tasks={tasks} />
