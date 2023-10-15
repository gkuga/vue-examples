window.addEventListener('load', () => {
	const { createApp, ref } = Vue
	const Menu = {
		setup() {
			const display = ref(true)
			const onClick = () => (display.value = !display.value);
			return { display, onClick }
		},
		template: `
<div>
	<slot name="activator" v-bind:onClick="onClick"></slot>
  <slot v-if="display"></slot>
</div>
`
	}
	app = createApp({
		setup() { },
		template: `
<Menu>
  <template v-slot:activator="{ onClick }">
    <button @click="onClick">Click</button>
  </template>
  <ul>
    <li>List1</li>
    <li>List2</li>
    <li>List3</li>
  </ul>
</Menu>
`,
		components: {
			Menu,
		},
	})
	app.mount('#app')
});
