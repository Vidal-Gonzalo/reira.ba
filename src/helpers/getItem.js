
export default function getItem(id) {

    const items = [{id: 1, title:"Sticker uno"}, {id: 2, title:"Sticker dos"}]

    
    return new Promise((res) => {
        setTimeout(() => {
            res(items.find((item) => item.id === id))
        }, 2000)
    })
}