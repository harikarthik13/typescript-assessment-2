"use strict";
function getproduct() {
    return fetch('/Product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getproduct()
    .then(pro => {
    console.log(pro.map(p => 'product id :' + p.id + 'product name :' + p.pname + 'product description:' + p.pdescription + 'price :' + p.price).toString());
});
