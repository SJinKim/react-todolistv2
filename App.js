import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Components
import Home from './components/Home'

//Styles
import { Container } from './styles/appStyles'

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'

export default function App() {
  return (
    <Container>
      <StatusBar style='light' />
      <Home />
    </Container>
  )
}
