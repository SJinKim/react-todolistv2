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

  return (
    <>
      <Header setTodos={setTodos} />
      <ItemList todos={todos} setTodos={setTodos} />
      <InputModal />
    </>
  )
}

export default Home
