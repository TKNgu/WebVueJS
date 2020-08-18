var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: '#app3',
	data: {
		seen: false
	}
})

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{text: 'Learn JavaScript'},
			{text: 'Learn Vue'},
			{text: 'Build something awesome'}
		]
	}
})

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Hello Vue.Js'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split(' ').reverse().join(' ')
		}
	}
})

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Hello'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app7',
	beforeCreate: function () {
		console.log('Befor create')
	},
	created: function() {
		this.todos.push({text: 'Haha', id: 4})
	},
	data: {
		todos: [
			{text: 'Hoc JS', id: 1},
			{text: 'Hoc VueJS', id: 2},
			{text: 'Hoc vutify', id: 3}
		]
	}
})

var app8 = new Vue({
	el: '#app8',
	data: {
		message: "Hello"
	}
})

var app9 = new Vue({
	el: '#app9',
	data: {
		html: '<h1> Show </h1>'
	}
})

var app10 = new Vue({
	el: '#app10',
	data: {
		number: 0,
		isDisable: false
	},
	methods: {
		add: function() {
			this.number += 1
		},
		changState: function() {
			this.isDisable = !this.isDisable
		}
	}
})

var app11 = new Vue({
	el: '#app11',
	data: {
		key: null,
		value: null
	},
	methods: {
		url: function() {
			this.key = 'href'
			this.var = 'google.com'
		},
		color: function() {
			this.key = "color"
			this.var = 'navy'
		}
	}
})

var app12 = new Vue({
	el: '#app12',
	data: {
		value: 0,
		message: "Hello learning "
	},
	computed: {
		reversedMessage: {
			get: function() {
				return this.message.split(' ').reverse().join(' ')
			},
			set: function(newValue) {
				this.message = newValue
			}
		},
		dateTime: function() {
			return Date.now()
		}
	},
	methods: {
		update: function() {
			this.value += 1
			this.message += this.value
		}
	}
})

var app13 = new Vue({
	el: '#app13',
	data: {
		sample: ['center', 'large'],
		center: false,
		large: false
	},
	computed: {
		classObject: function() {
			dinamicClass = []
			if (this.center) {
				dinamicClass.push('center')
			}
			if (this.large) {
				dinamicClass.push('large')
			}
			 return dinamicClass
		}
	},
	methods: {
		changCenter: function() {
			this.center = !this.center
		},
		changLage: function() {
			this.large = !this.large
		}
	}
})

var app14 = new Vue({
	el: '#app14',
	computed: {
		classObject: function() {
			dinamicClass = []
			if (this.color) {
				dinamicClass.push('center')
			}
			if (this.size) {
				dinamicClass.push('large')
			}
			return dinamicClass
		}
	},
	data: {
		color: false,
		size: false,
		show: true
	},
	methods: {
		changLage: function() {
			this.size = !this.size
		},
		changColor: function() {
			this.color = !this.color
		},
		hide: function() {
			this.show = !this.show
		}
	}
})

var app15 = new Vue({
	el: '#app15',
	data: {
		items: [
			{message: '1'},
			{message: '2'},
			{message: '3'},
			{message: '4'},
			{message: '5'}
		],
		object: {
			key: '100',
			value: '1000',
			end: '0'
		}
	}
})

Vue.component('todo-item-new', {
	template: '\
		<li>\
			{{ title }}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		</li>',
	props: ['title']
})

var app16 = new Vue({
	el: '#app16',
	data: {
		newTodoText: '',
		todos: [],
		nextTodoId: 1
	},
	methods: {
		addNewTodo: function() {
			this.todos.push({
				id: this.nextTodoId++,
				tilte: this.newTodoText})
			this.newTodoText = ''
		}
	}
})