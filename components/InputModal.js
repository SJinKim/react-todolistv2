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
  HeaderTitleModal,
  colors,
} from '../styles/appStyles'

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  setTodoToBeEdited,
  todoToBeEdited,
  handleEditTodo,
  todos,
}) => {
  //close Modal
  const handleCloseModal = () => {
    setModalVisible(false)
    //maybe ask first if they want to delete input?
    setTodoInputValue('')
    setTodoToBeEdited(null)
  }
  //submit text
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      })
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      })
    }
    setTodoInputValue('')
  }
  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name='plus' size={33} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <HeaderTitleModal>Todos</HeaderTitleModal>
            <ModalIcon>
              <AntDesign name='edit' size={33} color={colors.tertiary} />
            </ModalIcon>

            <StyledInput
              placeholder='Your Task'
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name='close' size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name='check' size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default InputModal
