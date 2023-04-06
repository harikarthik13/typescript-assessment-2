interface Product{
    id: number;
    pname: string;
    pdescription: string;
    price: number;
}

function getproduct():Promise<Product[]>{
 return fetch('/Product.json')
 .then(res => res.json())
 .then(res => { return res as Product[] })

}
getproduct()
.then(pro => {
    console.log(pro.map(p =>'product id :'+p.id + 'product name :'+p.pname +'product description:'+p.pdescription +'price :'+p.price).toString())
})
