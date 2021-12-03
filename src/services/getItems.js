import Axios from "axios"

const getItems = {
    getAllItems: async () => {
        return await Axios.get("../assets/items/allItems.json");
    },
    getItem: async (itemId) => {
        return await Axios.get(`../assets/items/item-${itemId}.json`)
    },
    getCategoryItems: async (categoryId) => {
        return await Axios.get(`../assets/${categoryId}/${categoryId}.json`)
    }
}

export default getItems;