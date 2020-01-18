<template>
	<div class="row mt-2">
		<div class="col form-group">
			<select class="form-control" v-on:change="changePageSize">
				<option value=4>4 per page</option>
				<option value=8>8 per page</option>
				<option value=12>12 per page</option>
			</select>
		</div>
		<div v-if="pageCount > 1" class="text-right col">
			<div class="btn-group mx-2">
				<button v-for="index in pageNumbers" v-bind:key="index"
					class="btn btn-secpmdary"
					v-bind:class="{'btn-primary' : index == currentPage}"
					v-on:click="setCurrentPage(index)">
					{{index}}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapMutations} from "vuex";

	export default {
		computed: {
			...mapState(["currentPage"]),
			...mapGetters(["pageCount"]),
			pageNumbers() {
				return [...Array(this.pageCount + 1).keys()].slice(1);
			}
		},
		methods: {
			...mapMutations(["setCurrentPage", "setPageSize"]),
			changePageSize($event) {
				this.setPageSize(Number($event.target.value));
			}
		}
	}
</script>