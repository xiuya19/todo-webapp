<template>
  <section class="real-app">
    <input type="text"
           class="add-input"
           autofocus="autofocus"
           placeholder="接下去我们要做什么"
           @keyup.enter="addTodo">
    <item :todo="todo"
          v-for="todo in filteredTodos"
          :key='todo.id'
          @del='deleteTodo'></item>
    <tabs :filter="filter"
          :todos="todos"
          @toggle="toggleFilter"
          @clearAllCompleted="clearAllCompleted"></tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  name: 'todo',
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      } else {
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    }
  },
  methods: {
    addTodo (e) {
      if (!e.target.value) {
        return
      }
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}

</script>
<style scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  border: 1px solid #999;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  padding: 16px 16px 16px 36px;
}
</style>
