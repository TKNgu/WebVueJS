app1 = new Vue({
	el: '#app1',
	data: {
		title: 'Action',
		buttonTitle: 'Add',
		count: 0
	}
})

app2 = new Vue({
	el: '#app2',
	data: {
		title: 'Event',
		name: 'Vue.js'
	},
	methods: {
		greet: function(event) {
			alert('Hello ' + this.name + '!')
			if (event) {
				event.preventDefault()
				alert(event.target.tagName)
			}
		},
		say: function(message) {
			alert(message)
		}
	}
})

// app2.greet()

app3 = new Vue({
	el: '#app3',
	data: {
		title: 'Key',
		buttonTitle: 'CheckKey'
	},
	methods: {
		update: function() {
			console.log('Enter')
		}
	}
})

app4 = new Vue({
	el: '#app4',
	data: {
		title: 'Model',
		text: '',
		checked: false,
		arrayName: ['Jack', 'Dev', 'Lala'],
		arraycheck: []
	}
})
