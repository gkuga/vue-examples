window.addEventListener('load', () => {
  const { createApp, ref } = Vue
  const User = {
    setup() {
      const user = ref({
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        sex: '男性',
      })
      const message = ref('Hello Scoped Slot')
      return { user, message }
    },
    template: `
<span>
  <slot v-bind:user="user" v-bind:message="message">{{ user.lastName }}</slot>
</span>
`
  }
  app = createApp({
    setup() { },
    template: `
<User v-slot="dataFromChild">
  <p>{{ dataFromChild }}</p>
</User>`,
    components: {
      User,
    },
  })
  app.mount('#app')
});
