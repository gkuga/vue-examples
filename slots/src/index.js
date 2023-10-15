window.addEventListener('load', () => {
	const { onMounted, computed, createApp, defineProps, ref, useSlots } = Vue
	const BlogPost = {
		setup() {
			const slots = useSlots();
			onMounted(() => {
				console.log(slots);
			});
			return { slots };
		},
		template: `
<div>
  <h1><slot name="title">Title</slot></h1>
  <p><slot></slot></p>
  <p>Slot:{{ slots.title }}</p>
</div>
`
	}
	const app = createApp({
		setup() { },
		template: `
<div>
  <BlogPost>
    <template #title>vue.js</template>
    I'd like to know about $vm.slots.
  </BlogPost>
</div>`,
		components: {
			BlogPost,
		},
	});
	app.mount('#app')
});
