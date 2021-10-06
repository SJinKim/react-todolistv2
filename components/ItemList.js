import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Entypo } from '@expo/vector-icons'

//styles
import {
  ListView,
  ListViewHidden,
  HiddenButton,
  TodoText,
  TodoDate,
  SwipedTodoText,
  colors,
} from '../styles/appStyles'

const ItemList = ({ todos, setTodos, handleTriggerEdit }) => {
  const [swipedRow, setSwipedRow] = useState(null)

  const handleDelete = (rowKey, rowMap) => {
    const ItemCopy = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey)
    ItemCopy.splice(todoIndex, 1)
    setTodos(ItemCopy)
  }

  return (
    <>
      {todos.length == 0 && <TodoText>Nothing to do today!</TodoText>}
      {todos.length != 0 && (
        <SwipeListView
          data={todos}
          renderItem={(data) => {
            const RowText =
              data.item.key == swipedRow ? SwipedTodoText : TodoText

            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => {
                  handleTriggerEdit(data.item)
                }}
              >
                <>
                  <RowText>{data.item.title}</RowText>
                  <TodoDate>{data.item.date}</TodoDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={(data, rowMap) => (
            <ListViewHidden>
              <HiddenButton onPress={() => handleDelete(data.item.key, rowMap)}>
                <Entypo name='trash' size={25} colors={colors.tertiary} />
              </HiddenButton>
            </ListViewHidden>
          )}
          leftOpenValue={80}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingBottom: 30,
            marginBottom: 40,
          }}
          onRowOpen={(rowKey) => setSwipedRow(rowKey)}
          onRowClose={() => setSwipedRow(null)}
        />
      )}
    </>
  )
}

export default ItemList
