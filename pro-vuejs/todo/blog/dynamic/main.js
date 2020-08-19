var Layout = Vue.component('layout', {
	template: `
		<div>
			<div>
				<slot name="header">Header</slot>
			</div>
			<div>
				<slot>Body</slot>
			</div>
			<div>
				<slot name='foot'>Foot</slot>
			</div>
		</div>
	`
})


var Dynamic = Vue.component('dynamic', {
	template:`
	<div>
		<div>
			<button v-on:click="status = 1">
				Select1
			</button>
			<button v-on:click="status = 2">
				Select2
			</button>
			<button v-on:click="status = 3">
				Select3
			</button>
		</div>
		<div>
			{{ status }}
		</div>
	</div>
	`,
	data: function() {
		return {
			status: 1
		}
	}
})

var Item = Vue.component('item', {
	props: ['value'],
	template:`
	<div>
		<div>
			<p>{{ value.title }}</p>
		</div>
		<div v-if="value.isFolder">
			<ol>
				<li v-for="child in value.childs">
					<item v-bin:value=child></item>
				</li>
			</ol>
		</div>
	</div>
	`
})

var Cache = Vue.component('cache', {
	template: `
	<div>
		<div>
			<p>{{ title }}</p>
		</div>
		<div>
			<item v-bind:value=this.folder></item>
		</div>
	</div>
	`,
	data: function() {
		return {
			title: 'folder',
			folder: {
				title: "Root",
				isFolder: false,
				childs: [
					{title: "usr",
						isFolder: false},
					{title: "var",
						isFolder: false},
					{title: "tmp",
						isFolder: false},
					{title: "home",
						isFolder: false}
				]
			}
		}
	},
	components: {
		Item
	}
})

var BodyDynamic = Vue.component('body-dynamic', {
	template:`
	<div>
		<div>
			<button v-on:click="select">Select</button>
			<button v-on:click="cache">Cache</button>
		</div>
		<keep-alive>
			<component v-bind:is="view" ></component>
		</keep-alive>
	</div>
	`,
	data: function() {
		return {
			view: 'dynamic'
		}
	},
	methods: {
		select: function() {
			this.view = 'dynamic'
		},
		cache: function() {
			this.view = 'cache'
		}
	},
	component: {
		Dynamic,
		Cache
	}
})

var base = new Vue({
	el: '#base',
	components: {
		Layout,
		BodyDynamic
	},
	template: `
		<layout>
			<div slot="header">
				<h1>Haha</h1>
			</div>
			<body-dynamic></body-dynamic>
			<div slot="foot">
				<h2>Lala</h2>
			</div>
		</layout>
	`
})