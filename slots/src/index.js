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
<User v-slot:default="dataFromChild">
  <p>{{ dataFromChild.user.firstName }} {{ dataFromChild.user.lastName }}</p>
  <p>{{ dataFromChild.user.age}}/{{ dataFromChild.user.sex}}</p>
</User>`,
    components: {
      User,
    },
  })
  app.mount('#app')
});
