class Bank {

    constructor(bal,accNumber,city,branchName){
        this.balance = bal
        this.accountNumber = accNumber
        this.city = city 
        this.branchName = branchName
        this.transaction = []
    }

    withDrawl(amount){
        if(amount < this.balance){
            console.log('withdrawl successful')
            this.balance = this.balance - amount
            this.transaction.push(-amount)
            return this.balance
        }
        else {
            console.log('Insufficient bal')
            return this.balance
        }
    }

    deposit(amount){
        this.balance = this.balance + amount
        console.log('Deposit successful')
        this.transaction.push(amount)
        return this.balance
    }

    lastfiveTransaction(){
       return  this.transaction.slice(-5)
    }

    //          0  1  2  3  4   5 6  7
    // let a = [22,33,44,55,66,77,88,99]
    // a.slice(-5)

}
// withdrawl()
// deposit()

let chinmay = new Bank(1000,123,"pune","kharadi")
console.log(chinmay)
let w1 = chinmay.withDrawl(100)
let w2 = chinmay.withDrawl(150)
let d1 = chinmay.deposit(10000)
let w3 = chinmay.withDrawl(150)
let w4 = chinmay.withDrawl(150)
let d2 = chinmay.deposit(900)
let w5 = chinmay.withDrawl(150)
let d3 = chinmay.deposit(800)
let d4 = chinmay.deposit(100)
let d5 = chinmay.deposit(1000)

console.log(w1,w2,w3,w4,w5)
console.log(chinmay.transaction)
let r3 = chinmay.lastfiveTransaction()
console.log(r3)

// [
//     -100, -150, 10000,
//     -150, -150,   900,
//     -150,  800,   100,
//     1000
//   

// total deposit

let totalD = chinmay.transaction.filter(function(el){
    return el > 0
})
console.log(totalD)

let totalDa = totalD.reduce(function(acc,el){
    return acc + el
},0)
console.log(totalDa)

// total withdrawl

totalW = chinmay.transaction.filter(function(el){
    return el < 0
})
console.log(totalW)
let totalWa = totalW.reduce(function(acc,el){
    return acc + el
},0)
console.log(totalWa)

