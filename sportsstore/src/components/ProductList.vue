<template>
	<div>
		<div v-for="product in products" v-bind:key="product.id"
			class="card m-1 p-1 bg-light">
			<h4>
				{{product.name}}
				<span class="badge badge-pill badge-primary float-right">
					{{product.price | currency}}
				</span>
			</h4>
			<div class="card-text bg-white p-1">
				{{product.description}}
			</div>
		</div>
	</div>
</template>

<script>

import {mapState} from "vuex";

export default {
	computed: {
        ...mapState(["products"])
	},
	filters: {
		currency(value) {
			return new Intl.NumberFormat("en-US",
				{style: "currency", currency: "USD"}).format(value);
		}
	}
}

</script>