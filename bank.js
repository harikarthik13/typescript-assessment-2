"use strict";
class Account {
    constructor(customername, customerid) {
        this.customername = customername;
        this.customerid = customerid;
    }
    Balance(balance, interest) {
        if (interest != null) {
            console.log(" WELCOME TO SAVINGS ACCOUNT ");
            console.log('customer name :' + this.customername);
            console.log('customer id :' + this.customerid);
            console.log('the available balance is :' + balance * interest);
            console.log('THANKYOU');
        }
        else {
            console.log(" WELCOME TO CURRENT ACCOUNT ");
            console.log('customer name :' + this.customername);
            console.log('customer id :' + this.customerid);
            console.log('the available balance is :' + balance * interest);
            console.log('THANKYOU');
        }
    }
}
let S = new Account('hari', 101);
S.Balance(10000, 4);
let C = new Account('hari', 101);
C.Balance(10000);
