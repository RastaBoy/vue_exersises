

const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
        }
    },
    methods: {
        inputChangeHandler() {
            //console.log("Something", event.target.value)
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        clearAllNotes() {
            while(this.notes.length > 0) {
                this.notes.pop()
            }
            
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
        /*
        inputKeyPress(event) {
            //console.log(event.key)
            if (event.key == 'Enter') {
                this.addNewNote()
            }
        }
        */
    }
}



const app = Vue.createApp(App)
app.mount('#app')