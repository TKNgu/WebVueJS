<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col bg-dark text-white">
				<a class="navbar-brand">SPORT STORE</a>
			</div>
		</div>
		<div class="row">
			<div class="col-2 bg-info p-2">
				<CategoryControls/>
			</div>
			<div class="col-10 p-2">
				<ProductList/>
			</div>
		</div>
	</div>
</template>

<script>
	
import ProductList from "@/components/ProductList";
import CategoryControls from "@/components/CategoryControls";

export default {
	components: {ProductList, CategoryControls}
}

</script>