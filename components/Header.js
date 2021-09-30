import React from 'react'
import { Entypo } from '@expo/vector-icons'

//Styles
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from '../styles/appStyles'

const Header = ({ setTodos }) => {
  const handleDeleteAll = () => {
    setTodos([])
  }
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton onPress={() => handleDeleteAll()}>
        <Entypo name='trash' size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  )
}

export default Header
