window.addEventListener('load', () => {
  const { createApp, ref } = Vue
  const Counter = {
    setup() {
      let count = ref(0)
      return { count }
    },
    template: `<button @click="count++">
You clicked me {{ count }} times.
</button>`
  }
  app = createApp({
    setup() {
      let count = ref(0)
      setInterval(() => {
        count.value++
      }, 1000)
      const message = ref('Hello vue!')
      return { message, count }
    },
    components: {
      Counter
    },
  })
  app.mount('#app')
});
