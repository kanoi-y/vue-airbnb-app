<script setup lang="ts">
import { createId } from '@paralleldrive/cuid2';
import { ref } from 'vue';

const todos = ref([
  { id: createId(), title: '犬の散歩', done: false },
  { id: createId(), title: '本を読む', done: false },
]);

const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value === '') return;
  todos.value.push({
    id: createId(),
    title: newTodo.value,
    done: false,
  });
  newTodo.value = '';
};
const deleteTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Todo List</h1>
    <div class="flex flex-col gap-3 mb-5">
      <div v-for="todo in todos" :key="todo.id">
        <label :for="todo.id" class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" :id="todo.id" v-model="todo.done" />
          <p :class="todo.done ? 'line-through' : ''">{{ todo.title }}</p>
        </label>
        <button type="button" @click="() => deleteTodo(todo.id)">X</button>
      </div>
    </div>
    <div>
      <label><input type="text" v-model="newTodo" /></label>
      <button type="button" @click="addTodo">追加</button>
    </div>
  </div>
</template>
