import React, { useState } from 'react'

//Components
import Header from './Header'
import ItemList from './ItemList'
import InputModal from './InputModal'

const Home = () => {
  const initialTasks = [
    {
      title: 'Get some iceCream',
      date: '2021-01-09 18:00:00 GMT',
      key: '1',
    },
    {
      title: 'Get some iceCream2',
      date: '2021-01-09 18:00:00 GMT',
      key: '2',
    },
    {
      title: 'Get some iceCream3',
      date: '2021-01-09 18:00:00 GMT',
      key: '3',
    },
  ]

  const [todos, setTodos] = useState(initialTasks)

  //modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false)
  const [todoInputValue, setTodoInputValue] = useState()

  //Edit trigger
  const [todoToBeEdited, setTodoToBeEdited] = useState(null)

  const handleAddTodo = (todo) => {
    var copyInitialTask = [...todos, todo]
    setTodos(copyInitialTask)
    setModalVisible(false)
  }

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item)
    setModalVisible(true)
    setTodoInputValue(item.title)
  }

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key)
    newTodos.splice(todoIndex, editedTodo)
    setTodos(newTodos)
    setTodoToBeEdited(null)
    setModalVisible(false)
  }

  return (
    <>
      <Header setTodos={setTodos} />
      <ItemList todos={todos} setTodos={setTodos} />
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
