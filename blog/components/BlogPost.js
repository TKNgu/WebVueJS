export default Vue.component('blog-post', {
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		checked: Boolean,
		postTitle: String,
		url: String
	},
	template: `
		<div>
			<h3>{{ postTitle }}</h3>
			<button v-on:click="$emit('click')">Clcik</button>
			<input type="checkbox" v-on:change="$emit('change', $event.target.checked)"
				v-bind:checked="checked"></input>
			<a v-bind:herf="url">
				<slot>Null</slot>
			</a>
		</div>
	`
})