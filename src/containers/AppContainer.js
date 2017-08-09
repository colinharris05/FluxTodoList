import { Container } from 'flux/utils'

import AppView from '../views/AppView'
import TodoStore from '../data/TodoStore'
import TodoActions from '../data/TodoActions'

function getStores() {
  return [TodoStore]
}

function getState() {
  return {
    todos: TodoStore.getState(),

    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  }
}

export default Container.createFunctional(AppView, getStores, getState)
