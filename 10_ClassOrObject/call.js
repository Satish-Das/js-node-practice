function setUserName(username){
    // compex DB Calls
    this.username =username
    console.log("Called");
}

function CreateUser(username, email, password){
    setUserName.call(username)

    this.email = email
    this.password = password
}

const chai = new CreateUser("chai","chia@fb.com","123")
console.log(chai);