<template>
  <div :class = "['todo-item', todo.completed ? 'completed' : '']" >
    <input type="checkbox"
           class="toggle"
           v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory"
            @click="deleteTodo"></button>
  </div>
</template>

<script>

export default {
  name: 'item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id)
    }
  }
}

</script>
<style lang="scss" scoped>
.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
}
.todo-item .todo-item:hover .destory::after {
  content: "x";
}
.todo-item.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}
.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
.toggle {
  text-align: center;
  width: 50px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;
}
.toggle {
  opacity: 0;
}
.toggle:checked {
  opacity: 1;
  content: url("../../assets/images/checked.svg");
}
</style>
