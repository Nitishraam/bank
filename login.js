const user=document.querySelector(".login__input--user")
const pin=document.querySelector(".login__input--pin")
const container=document.querySelector(".app")
const movements=document.querySelector(".movements")
const balanceAmt = document.querySelector(".balance__value")
const num = document.querySelector(".form__input--loan-amount")
const transferInput = document.querySelector(".form__input--to")
const transferAmount = document.querySelector(".form__input--amount")


let user1={
    userName:"nitish",
    password: 1111,
    movements:[],

};
let user2={
    userName:"raam",
    password: 2222,                           
    movements:[],
};

let account=[user1,user2]

function loginCon() {
    for(let i=0;i<account.length;i++){
      if(account[i].userName==user.value&&
        account[i].password==pin.value){

        container.style.opacity=1

        if(account[i].userName=="nitish"){
            let balanceAmt=document.querySelector(".balance__value");

            balanceAmt.innerHTML=3000;
        return;


        }
        else{
            let balanceAmt=document.querySelector(".balance__value");

            balanceAmt.innerHTML=4000;
        return;

        }
        console.log(account[i]);
        // console.log("");

      }
    }
    console.log("invalid");

}

function requestLoan(){
    for(let i=0;i<account.length;i++){
        if(account[i].userName==user.value){
            let balance = parseFloat(balanceAmt.textContent);
            let req = parseFloat(num.value);
            let total = balance+req
            console.log(total);
            balanceAmt.innerHTML=total
            let div5 = document.createElement("div")
            let div6 = document.createElement("div")
            let div7 = document.createElement("div")
            let div8 = document.createElement("div")
           
            div5.className="movements__row"
            div6.className="movements__type movements__type--deposit"
            div7.className="movements__date"
            div8.className="movements__value"

            let type2 = "Deposit"
            let date2 = new Date().toLocaleDateString()
        
            div6.innerHTML=type2
            div7.innerHTML= date2
            div8.innerHTML=req+"€"

            console.log(div6);

            div5.appendChild(div6)
            div5.appendChild(div7)
            div5.appendChild(div8)

            let wholeDiv2 = document.querySelector(".movements")
            wholeDiv2.appendChild(div5)

        }
    }
}
function transferMoney(){
    for(let i=0;i<account.length;i++){
        // let sender=document.querySelector(user)
        // let receiver=document.querySelector(transferInput)

        if(account[i].userName==transferInput.value && user.value!=transferInput.value){
            let balance = parseFloat(balanceAmt.textContent);
            let transferAcc = parseFloat(transferAmount.value);
            let balanceTransfer = balance-transferAcc
            console.log(balanceTransfer);
            balanceAmt.innerHTML=balanceTransfer
            account[i].movements.push(transferAcc)
            console.log(account[i]);            
            localStorage.setItem("movements",account[i].movements)
            let storage = localStorage.getItem("movements",account[i].movements)
            console.log(storage);                   
                        
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let div3 = document.createElement("div")
            let div4 = document.createElement("div")
           
            div1.className="movements__row1"
            div2.className="movements__type1 movements__type--withdrawal"
            div3.className="movements__date1"
            div4.className="movements__value1"

            let type = "Withdrawal"
            let date = new Date().toLocaleDateString()
        
            div2.innerHTML=type
            div3.innerHTML= date
            div4.innerHTML="-"+transferAcc+"€"

            // console.log(div2);

            div1.appendChild(div2)
            div1.appendChild(div3)
            div1.appendChild(div4)

            let wholeDiv = document.querySelector(".movements")
            wholeDiv.appendChild(div1)
            console.log(wholeDiv)
            return
             
        
             

        }
    }
}
 
