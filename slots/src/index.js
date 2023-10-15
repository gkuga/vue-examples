window.addEventListener('load', () => {
  const { createApp, ref } = Vue
  const User = {
    setup() {
      let user = ref({
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        sex: '男性',
      })
      return { user }
    },
    template: `
<span>
  <slot v-bind:user="user">{{ user.lastName }}</slot>
</span>
`
  }
  app = createApp({
    setup() { },
    template: `
<User></User>`,
    components: {
      User,
    },
  })
  app.mount('#app')
});
