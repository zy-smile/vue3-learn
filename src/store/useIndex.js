import {defineStore} from "pinia";

export const useIndex = defineStore('counter',{
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        add() {
            this.count++
            console.log('调用了')
        }
    },
    getters: {
        doublecount() {
            return this.count * 2
        }
    }
})
