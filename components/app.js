

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
        addNewNote() {
            if ( this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        clearAllNotes() {
            while(this.notes.length > 0) {
                this.notes.pop()
            }
            
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        /*
        doubleCount() {
            console.log('Double this!')
            return this.notes.length * 2
        }
        inputKeyPress(event) {
            //console.log(event.key)
            if (event.key == 'Enter') {
                this.addNewNote()
            }
        }
        */
    },
    computed: {
        doubleCountComputed() {
             console.log('Double this by computed!')
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('input Value changed ', value)
        }
    }
}



const app = Vue.createApp(App)
app.mount('#app')