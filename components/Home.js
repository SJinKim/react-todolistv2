import React, { useState } from 'react'

//Components
import Header from './Header'
import ItemList from './ItemList'
import InputModal from './InputModal'

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ todos, setTodos }) => {
  //clear all todos
  const handleClearTodos = () => {
    setTodos([])
    AsyncStorage.setItem('storedTodos', JSON.stringify([]))
      .then(() => {
        setTodos([])
      })
      .catch((error) => console.log(error))
  }

  //modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false)
  const [todoInputValue, setTodoInputValue] = useState()

  //Edit trigger
  const [todoToBeEdited, setTodoToBeEdited] = useState(null)

  const handleAddTodo = (todo) => {
    var copyInitialTask = [...todos, todo]

    AsyncStorage.setItem('storedTodos', JSON.stringify(copyInitialTask))
      .then(() => {
        setTodos(copyInitialTask)
        setModalVisible(false)
      })
      .catch((error) => console.log(error))
  }

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item)
    setModalVisible(true)
    setTodoInputValue(item.title)
  }

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key)
    newTodos.splice(todoIndex, 1, editedTodo)

    AsyncStorage.setItem('storedTodos', JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos)
        setTodoToBeEdited(null)
        setModalVisible(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Header setTodos={setTodos} />
      <ItemList
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todos={todos}
        handleTriggerEdit={handleTriggerEdit}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
      />
    </>
  )
}

export default Home
