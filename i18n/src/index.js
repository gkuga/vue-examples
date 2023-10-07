const messages = {
	en: {
		message: {
			hello: 'hello world'
		}
	},
	ja: {
		message: {
			hello: 'こんにちは、世界'
		}
	}
}
window.addEventListener('load', () => {
	const { createApp, ref } = Vue
	const i18n = VueI18n.createI18n({
		locale: 'ja',
		fallbackLocale: 'en',
		messages,
	})
	const app = createApp()
	app.use(i18n)
	app.mount('#app')
})
