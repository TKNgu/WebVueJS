import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const testData = [];
for(let index = 1; index <= 10; index++) {
	testData.push({
		id: index, name: `Product #${index}`,
		category: `Category ${index % 3}`,
		description: `Thi is Product #${index}`,
		price: index * 50
	})
}

export default new Vuex.Store({
	strict: true,
	state: {
		products: testData
	}
})