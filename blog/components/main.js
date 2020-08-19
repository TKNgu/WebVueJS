var ComponentSlot = Vue.component('component-slot', {
	props: ['title', 'url'],
	template:`
	<div>
		<p>{{ title }}</p>
		<div>
			<slot name="header"></slot>
		</div>
		<a v-bind:href="url">
			<slot></slot>
		</a>
	</div>
	`
})

var SubSlot = Vue.component('sub-slot', {
	props: ['title'],
	template:`
		<button>
			<slot>Link</slot>
		</button>
	`
})

var Selected = Vue.component('selected', {
	data: function() {
		return {
			selected: 0,
			data: [
				{title: '1', content: 'Haha', id: 1},
				{title: '2', content: 'Lala', id: 2},
				{title: '3', content: 'Mama', id: 3}
			]
		}
	}
})

new Vue({
	el: '#main',
	components: {
		ComponentSlot,
		SubSlot
	},
	template: `
		<div>
			<p>{{ title }}</p>
			<component-slot title="Hello" url="google.com">
				<sub-slot slot="header">Url</sub-slot>
				<p>Hello</p>
				<sub-slot></sub-slot>
			</component-slot>
		</div>
	`,
	data: {
		title: 'Components'
	}
})