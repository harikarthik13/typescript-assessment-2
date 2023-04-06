"use strict";
function getProduct() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getProduct()
    .then(pro => {
    console.log(pro.map(p => 'product id :' + p.id + 'product name :' + p.pname + 'product description:' + p.pdescription + 'price :' + p.price).toString());
});
