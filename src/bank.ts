interface ISavingAccount{
    customername:string;
    customerid :number;
    Balance(balance:number, interest:number):any
}
interface ICurrentAccount{
    customername:string;
    customerid :number;
    Balance(balance:number, interest?:number):any
}
class Account implements ISavingAccount,ISavingAccount{
    customername:string;
    customerid :number;
    constructor(customername:string,customerid :number){
       this.customername=customername;
       this.customerid =customerid;
        
    }
    Balance(balance:number, interest:number):void{
        if(interest != null){
              console.log(" WELCOME TO SAVINGS ACCOUNT ")
              console.log('customer name :'+this.customername)
              console.log('customer id :'+this.customerid)
              console.log('the available balance is :'+balance*interest)
              console.log('THANKYOU')
              
    
        }
        else{
            console.log(" WELCOME TO CURRENT ACCOUNT ")
            console.log('customer name :'+this.customername)
            console.log('customer id :'+this.customerid)
            console.log('the available balance is :'+balance)
            console.log('THANKYOU')
            
        }
    }
    
}
let S : ISavingAccount = new Account('hari',101)
S.Balance(10000,4)
let C :ICurrentAccount  = new Account('hari',101)
C.Balance(10000)