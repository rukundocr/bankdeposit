window.onload = (event) => {

  class Account {
constructor(clientName,balance){
this.clientName= clientName;
this.balance = balance;
}
    //deposit method
deposit(amount){
if(isNaN(amount)){
console.log("Enter Amount Please");
  document.getElementById("error").textContent= "Enter Valid Amount";
}
else{
document.getElementById("error").textContent= "";
const newBalance = this.balance + amount;
this.balance= newBalance;
console.log('You have a deposit of :' + amount);
console.log("Yaour new Balance is :" + newBalance);
document.getElementById("balance").textContent= Client1.balance;
}

}
    //withraw method
withdraw(amount){
if(isNaN(amount)){
 document.getElementById("error").textContent= "Enter Valid Amount";
console.log("Enter Amount Please");
}else{
  document.getElementById("error").textContent= "";
if (amount > this.balance){
console.log('not Enough Balence on your Account');
}else{
const newBalance = this.balance-amount;
console.log('You have withdrown :'+ amount + " from your Account")
console.log('Your Remaining Balence is :' + newBalance);
this.balance = newBalance;
document.getElementById("balance").textContent= Client1.balance;
}
}

}
}
const Client1 = new Account('RUKUNDO',5000);
document.getElementById("balance").textContent= Client1.balance;
const depositTry = document.getElementById('submitDeposit');
depositTry.addEventListener('click',(e)=> {
e.preventDefault();
let inputValue = document.getElementById('deposit').value;
//console.log(amount);
const amount= parseInt(inputValue);
Client1.deposit(amount);
document.getElementById("form1").reset();
})

  // withdrawing 
const withdrawtTry = document.getElementById('submitWithdraw');
withdrawtTry.addEventListener('click',(e)=> {
e.preventDefault();
//console.log('withdraw');
//clear balance 
document.getElementById("balance").textContent= "";
const inputValue = document.getElementById('withdraw').value;
//console.log(amount);
const amount= parseInt(inputValue);
Client1.withdraw(amount);
document.getElementById("form2").reset();
});

  //balance check 
document.getElementById("check").addEventListener('click',()=>{
document.getElementById("error").innerHTML ="";
console.log(Client1.balance);
document.getElementById("balance").textContent= Client1.balance;
});

//const Client1 = new Account('RUKUNDO',5000);
//Client.deposit(100);
//Client1.withdraw(4000);
//Client1.withdraw(1000);
};


