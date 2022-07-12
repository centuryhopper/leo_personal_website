import { defineStore } from 'pinia'


const useStore = defineStore('state', {
    state: () => {
      return { activeRoute: 'home' }
    },
    actions: {
      setRoute(newRoute: string) {
        this.activeRoute = newRoute
      },
    },
     persist: {
      enabled: true
    }
})

export { useStore }

