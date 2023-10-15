window.addEventListener('load', () => {
  const { createApp, ref } = Vue
  const User = {
    setup() {},
    template: `
<ul>
  <li>名前：<slot>名無しの権兵衛</slot></li>
  <li>年齢：<slot name="age">記入なし</slot></li>
  <li>性別：<slot name="sex">不明</slot></li>
</ul>
`
  }
  app = createApp({
    setup() {},
    template: `
<User>
  <template #default>John doe</template>
  <template #age>25</template>
  <template #sex>男性</template>
</User>`,
    components: {
      User,
    },
  })
  app.mount('#app')
});
