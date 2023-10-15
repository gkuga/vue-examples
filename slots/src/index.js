window.addEventListener('load', () => {
  const { createApp, ref } = Vue
  const User = {
    setup() {},
    template: `<p>この人の名前は<slot></slot>です。</p>`
  }
  app = createApp({
    setup() {},
    template: `<User>John Doe</User>`,
    components: {
      User,
    },
  })
  app.mount('#app')
});
