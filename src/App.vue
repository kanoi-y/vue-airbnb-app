<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useStoreTodo from './stores/todo';

const todoStore = useStoreTodo();
const { todos } = storeToRefs(todoStore);

const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value === '') return;
  todoStore.addTodo(newTodo.value);
  newTodo.value = '';
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Todo List</h1>
    <div class="flex flex-col gap-3 mb-5">
        <div v-if="todos.length === 0">todoがありませんでした</div>
        <div v-for="todo in todos" :key="todo.id">
          <label :for="todo.id" class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              :id="todo.id"
              :value="todo.done"
              @input="() => todoStore.toggleDone(todo.id)"
            />
            <p :class="todo.done ? 'line-through' : ''">{{ todo.title }}</p>
          </label>
          <button type="button" @click="() => todoStore.deleteTodo(todo.id)">
            X
          </button>
        </div>
    </div>
    <div>
      <label><input type="text" v-model="newTodo" /></label>
      <button type="button" @click="addTodo">追加</button>
    </div>
  </div>
</template>
