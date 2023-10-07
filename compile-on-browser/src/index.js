import * as Vue from '../node_modules/vue/dist/vue.esm-browser.js'
import { loadModule } from '../node_modules/vue3-sfc-loader/dist/vue3-sfc-loader.esm.js'

window.addEventListener('load', () => {
	const { ref } = Vue
	const options = {
		moduleCache: {
			vue: Vue
		},
		async getFile(url) {
			const res = await fetch(url)
			if (!res.ok)
				throw Object.assign(new Error(res.statusText + ' ' + url), { res })
			return {
				getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
			}
		},
		addStyle(textContent) {
			const style = Object.assign(document.createElement('style'), { textContent })
			const ref = document.head.getElementsByTagName('style')[0] || null
			document.head.insertBefore(style, ref)
		},
	}
	const app = Vue.createApp({
		setup() {
			let count = ref(0)
			setInterval(() => {
				count.value++
			}, 1000)
			const message = ref('Hello vue!')
			return { message, count }
		},
		components: {
			'Counter': Vue.defineAsyncComponent(() => loadModule('/src/components/Counter.vue', options))
		},
		template: `
<div v-cloak>
  <p>{{message}}:{{count}}</p>
  <p><Counter /></p>
</div>
`})

	app.mount('#app')
})
