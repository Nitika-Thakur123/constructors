

    
    function CreateBankAccount(accountNumber,name,type,balance){

        this.accountNumber=accountNumber;
        this.name=name;
        this .type=type;
        this.balance=balance;
        
        this.deposite=function(amount){
           
        
            this.balance +=amount;
        
           }
            this.withDraw = function(amount){
                if(amount <= this.balance) {
                    this.balance -= amount/
                    console.log("succesfully",amount)
                }else{
                    console.log("hey you have insuficient balance" ,this.balance)
                }
        
                // this.balance -= amount
            }
            this.getTotalBalance = function(){
                console.log('your total balance is this- ',this.balance)
            }
        
        };
        let ac1 = new CreateBankAccount(1234,"Nitika","savings",500)
        // console.log(ac1,"without deposite")
        // ac1.deposite(100)
        // console.log(ac1)
        ac1.withDraw(300)
        ac1.getTotalBalance()
        // console.log(ac1)
        
        // console.log(CreateBankAccount())
    
