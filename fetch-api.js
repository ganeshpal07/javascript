async function senddata() {
    try{ 
        const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: "BMW Pencil",
            price: 10,
            discountPercentage: 15,
            rating: 4.5,
            stock: 20,
            brand: "BMW",})
        })
        const data = await response.json()
        console.log(data)}
        catch(error){
            console.log("data not found")}
        }
senddata()
