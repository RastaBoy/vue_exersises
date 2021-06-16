

const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler() {
            //console.log("Something", event.target.value)
            this.inputValue = event.target.value
        }
    }
}



const app = Vue.createApp(App)
app.mount('#app')