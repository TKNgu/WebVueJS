<template>
	<div class="container-fluid">
		<div class="row my-2" v-for="category in categories" v-bind:key="category">
			<button class="btn btn-block" v-bind:class="category == currentCategory ? 
				'btn-primary' : 'btn-secondary'" v-on:click="test(category)">
				{{category}}
			</button>
		</div>
	</div>
</template>

<script>

	import {mapGetters, mapState, mapMutations} from "vuex";

	export default {
		computed: {
			...mapGetters(["categories"]),
			...mapState(["currentCategory"])
		},
		methods: {
			...mapMutations(["setCurrentCategory"]),
			test: function(category) {
				window.console.log(category);
				this.setCurrentCategory(category);
			}
		}
	}

</script>