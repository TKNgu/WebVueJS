import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500/api";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

// const testData = [];
// for(let index = 1; index <= 10; index++) {
// 	testData.push({
// 		id: index, name: `Product #${index}`,
// 		category: `Category ${index % 3}`,
// 		description: `Thi is Product #${index}`,
// 		price: index * 50
// 	})
// }

export default new Vuex.Store({
	strict: true,
	state: {
		products: [],
		categoriesData: [],
		currentPage: 1,
		pageSize: 4,
		currentCategory: 'All',
		productsCategory: []
	},
	getters: {
		processedProducts: state => {
			let index = (state.currentPage - 1) * state.pageSize;
			return state.productsCategory.slice(index, index + state.pageSize);
		},
		// categorys: state => ['All', ...new Set(state.products.map(product => product.category).sort())],
		pageCount: state => Math.ceil(state.productsCategory.length / state.pageSize),
		categories: state => ['All', ...state.categoriesData]
	},
	mutations: {
		setCurrentPage(state, page) {
			state.currentPage = page;
		},
		setPageSize(state, pageSize) {
			state.pageSize = pageSize;
			state.currentPage =	1;
		},
		setCurrentCategory(state, category) {
			this.state.currentCategory = category;
			this.state.productsCategory = state.products.filter(
				product => state.currentCategory == 'All' ||
				this.state.currentCategory == product.category);
			state.currentPage = 1;
		},
		setData(state, data) {
			state.products = data.pdata;
			state.categoriesData = data.cdata.sort();
			state.productsCategory = data.pdata;
		}
	},
	actions: {
		async getData(context) {
			let pdata = (await Axios.get(productsUrl)).data;
			let cdata = (await Axios.get(categoriesUrl)).data;
			context.commit("setData", {pdata, cdata});
		}
	}
})