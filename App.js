import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Components
import Home from './components/Home'

//Styles
import { Container } from './styles/appStyles'

export default function App() {
  return (
    <Container>
      <StatusBar style='light' />
      <Home />
    </Container>
  )
}
