import React from 'react'
import { Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

//Styles
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from '../styles/appStyles'

const InputModal = () => {
  return (
    <>
      <ModalButton onPress={() => {}}>
        <AntDesign name='plus' size={33} color={colors.secondary} />
      </ModalButton>
    </>
  )
}

export default InputModal
