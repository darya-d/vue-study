const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите заголовок заметки'
    }
  }
}

Vue.createApp(App).mount('#app')