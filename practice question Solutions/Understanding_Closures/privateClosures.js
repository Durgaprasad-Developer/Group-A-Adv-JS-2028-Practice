class BankAccount{
    constructor(balance){
        let _balance = balance;

        function showDetails(){
            return balance
        }

        this.deposite = function(amount) {
            return (_balance += amount)
        }

        this.withdraw = function(amount) {
            return (_balance -= amount);
        }

        this.checkBalance = function() {
            return showDetails();
        }
    }
}

let acc = new BankAccount(1000);

console.log(acc.checkBalance())