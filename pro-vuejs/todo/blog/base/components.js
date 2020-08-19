// app1 = new Vue({
// 	el: '#app1',
// 	data: {
// 		title: 'Components'
// 	}
// })

// Vue.component('button-counter', {
// 	data: function() {
// 		return {
// 			count: 0
// 		}
// 	},
// 	props: ['post'],
// 	template: '<div> \
// 		<p> {{ post.title }} </p> \
// 		<button v-on:click="count++">You clicked me {{ count }} time.</button>\
// 	</div>'
// })

// Vue.component('blog-post', {
// 	props: ['post'],
// 	template:`
// 	<div>
// 		<h3>{{ post.title }}</h3>
// 		<button v-on:click="$emit('enlarge-text', post.title)"">Button</button>
// 	</div>`
// })

// Vue.component('login', {
// 	props: ['user_info'],
// 	template: `
// 	<div>
// 	<div>
// 	<input v-model="user_info.user_name"></input>
// 	</div>
// 	<div>
// 	<input type="password" v-model="user_info.password"></input>
// 	</div>
// 	<div>
// 	<button v-on:click="$emit('login_user')">Login</button>
// 	</div>
// 	</div>
// 	`
// })

// Vue.component('model_sample', {
// 	props: ['value'],
// 	template: `
// 	<div>
// 		<div>
// 			<p>{{ value }}</p>
// 		</div>
// 		<div>
// 			<input v-bind:value="value" v-on:input="$emit('input', $event.target.value)"></imput>
// 		</div>
// 		<div>
// 			<slot></slot>
// 			<slot></slot>
// 			<slot></slot>
// 			<slot></slot>
// 			<slot></slot>
// 		</div>
// 	</div>
// 	`
// })

// Vue.component("tab-archive", {
// 	template: "<div>Archive component</div>"
// });

// Vue.component('sample', {
// 	template: '<p>Sample1</p>'
// })

// var app2 = new Vue({
// 	el: '#app2',
// 	data: {
// 		posts: [
// 			{id: 1, title: 'Haha'},
// 			{id: 2, title: 'Lala'},
// 			{id: 3, title: 'End'},
// 			{id: 4, title: 'vala'}
// 		],
// 		user_info: {
// 			user_name: 'NgocPT',
// 			password: 'D@ssM0rq'
// 		},
// 		text_edit: 'defauls',
// 		sample: 'sample',
// 	},
// 	methods: {
// 		action: function(value) {
// 			console.log('Test ' + value)
// 		},
// 		login: function() {
// 			console.log(this.user_info)
// 		},
// 		show: function(value) {
// 			this.text_edit = value
// 			console.log(this.text_edit)
// 		}
// 	}
// })

// var app3 = new Vue({
// 	el: '#app3',
// 	data: {
// 		name_component: 'none'
// 	},
// 	computed: {
// 		name: function() {
// 			return 'sample'
// 		}
// 	}
// })

// var dynamic_component_demo = new Vue({
//         el: "#dynamic-component-demo",
//         data: {
//           currentTab: "Home",
//           tabs: ["Home", "Posts", "Archive"]
//         },
//         computed: {
//           currentTabComponent: function() {
//             return "tab-" + this.currentTab.toLowerCase();
//           }
//         }
//       });


import ComponentA from './ComponentA'

// var ComponentA = Vue.component('component-a', {
// 	template: '<p> Component </p>'
// })

new Vue({
	el: '#hello',
	data: {
		title: 'Hello'
	},
	templates: {
		ComponentA
	}
})