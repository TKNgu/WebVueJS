import ComponentA from './ComponentA.js'
import BlogPost from './BlogPost.js'

var base = new Vue({
	el: '#base',
	template: `
		<div>
			<div>
				{{ title }}
			</div>
			<div>
				<ol>
					<li v-for="blogPost in blogPosts">
						<blog-post v-bind:post-title="blogPost.title"
							v-on:click="update(blogPost.title)"
							v-model=blogPost.status
							url="google.com">Test</blog-post>
					</li>
				</ol>
				<blog-post post-title="Hello" v-on:click=update></blog-post>
			</div>
		</div>
	`,
	data: {
		title: 'Hello',
		blogPosts: [
			{title: 'Hello1', id: 1, status: false},
			{title: 'Hello2', id: 2, status: false},
			{title: 'Hello3', id: 3, status: false},
			{title: 'Hello4', id: 4, status: false},
			{title: 'Hello5', id: 5, status: false},
		]
	},
	components: {
		ComponentA,
		BlogPost
	},
	methods: {
		update: function(title) {
			console.log('Clcik ' + title)
			console.log(this.blogPosts)
		}
	}
})