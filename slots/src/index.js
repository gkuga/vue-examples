window.addEventListener('load', () => {
	const { createApp, defineProps, ref } = Vue
	const Table = {
		props: ['header', 'items'],
		setup() { },
		template: `
<table border="1">
  <thead>
    <tr>
      <th v-for="row_name in header" :key="row_name">{{ row_name }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in items" :key="index">
      <td v-for="(value,index) in item" :key="index">{{ value }}</td>
    </tr>
  </tbody>
</table>
`
	}
	const app = createApp({
		setup() {
			const header = ['ID', 'FIRSTNAME', 'LASTNAME', 'EMAIL'];
			const items = [
				{
					id: 1,
					firstName: 'John',
					lastName: 'Doe',
					email: 'john@example.com',
				},
				{
					id: 2,
					firstName: 'Kevin',
					lastName: 'Wood',
					email: 'kevin@example.com',
				},
				{
					id: 3,
					firstName: 'Harry',
					lastName: 'Bosch',
					email: 'harry@test.com',
				},
			];
			return { header, items }
		},
		template: `<Table :header="header" :items="items"></Table>`,
		components: {
			Table,
		},
	});
	app.mount('#app')
});
