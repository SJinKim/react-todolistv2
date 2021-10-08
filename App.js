import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Components
import Home from './components/Home'

//Styles
import { Container } from './styles/appStyles'

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [ready, setReady] = useState(false)

  const initialTasks = []

  const [todos, setTodos] = useState(initialTasks)

  //Loading todos
  const loadTodos = () => {
    AsyncStorage.getItem('storedTodos')
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data))
        }
      })
      .catch((error) => console.log(error))
  }

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <Container>
      <StatusBar style='light' />
      <Home todos={todos} setTodos={setTodos} />
    </Container>
  )
}
