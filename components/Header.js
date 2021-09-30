import React from 'react'
import { Entypo } from '@expo/vector-icons'

//Styles
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from '../styles/appStyles'

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
        <Entypo name='trash' size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  )
}

export default Header
