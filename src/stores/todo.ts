import { createId } from '@paralleldrive/cuid2';
import { defineStore } from 'pinia';

const useStoreTodo = defineStore('todo', {
  state: () => ({
    todos: [] as { id: string, title: string, done: boolean }[],
  }),
  actions: {
    addTodo(title: string) {
      const todo = { id: createId(), title, done: false };
      this.todos.push(todo);
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleDone(id: string) {
      const targetTodo = this.todos.find((todo) => todo.id === id);
      if (targetTodo) {
        targetTodo.done = !targetTodo.done;
      }
    }
  },
});

export default useStoreTodo;
