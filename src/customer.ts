abstract class Customer {
    CustomerName: string;
    Age: number;
    Address: string;
    ContactNumber: number;
    constructor(CustomerName: string, Age: number, Address: string, ContactNumber: number) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
    abstract AccessDetails():void
}

class Loan extends Customer {
    LoanAccountNo :number;
    LoanType : string;
    LoanAmount : number;
    Duration : number;
    InterestRate:number;

    constructor(CustomerName: string, Age: number, Address: string, ContactNumber: number,LoanAccountNo :number,LoanType : string,LoanAmount : number,Duration : number,InterestRate:number){
  super(CustomerName,Age,Address,ContactNumber)
  this.LoanAccountNo=LoanAccountNo;
  this.LoanType=LoanType;
  this.LoanAmount=LoanAmount;
  this.Duration=Duration;
  this.InterestRate=InterestRate;
    }

AccessDetails():void{
    console.log('CustomerName :'+this.CustomerName+'\n'+'Age :'+this.Age+"\n"+'Address :'+this.Address+"\n"+'ContactNumber :'+this.ContactNumber+"\n"
    +'LoanAccountNo :'+this.LoanAccountNo+"\n"+'LoanType :'+this.LoanType+"\n"+'LoanAmount :'+this.LoanAmount+"\n"+'Duration :'+this.Duration+"\n"+'InterestRate :'+this.InterestRate )
}

InterestCalculate():void{
    console.log("the total amount with added interest :"+(this.LoanAmount*this.InterestRate*this.Duration)/100)
    }

    display():void{
        console.log("Here is your loan details")
        this.AccessDetails();
        this.InterestCalculate();

}
}
let a= new Loan('hari',20,'coimbatore',5675432098,101,'simpleinterest',10000,3,2)
a.display();