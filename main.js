const app = {
    data() {
        return {
            tasks: [{ name: 'Lobster', img: './images/001.jpg', isFav: false },
            { name: 'Mussel', img: './images/002.jpg', isFav: false },
            { name: 'Crab', img: './images/003.jpg', isFav: false }
            ],
            favCount: 0,
        }
    },
    methods:

    {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        updateFav(index) {

            this.tasks[index].isFav = !this.tasks[index].isFav
            if (this.tasks[index].isFav) {
                this.favCount += 1
            } else {
                this.favCount -= 1
            }

        }
    },
    computed: {
        calculate() {
            return this.tasks.length
        }
    }
}
Vue.createApp(app).mount('#app')