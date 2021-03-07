"use strict";
//User class
((core)=>{


  class User {
    //getters and setters
    get FirstName() {
      return this.m_firstName;
    }
    set FirstName(value) {
      this.m_firstName = value;
    }
    get LastName() {
      return this.m_lastName;
    }
    set LastName(value) {
      this.m_lastName = value;
    }
    get Username() {
      return this.m_username;
    }
    set Username(value) {
      this.m_username = value;
    }
    get EmailAddress() {
      return this.m_emailAddress;
    }
    set EmailAddress(value) {
      this.m_emailAddress = value;
    }
    get Password() {
      return this.m_password;
    }
    set Password(value) {
      this.m_password = value;
    }
    
    /**
     * 
     * @param {*} firstName 
     * @param {*} lastName 
     * @param {*} username 
     * @param {*} emailAddress 
     * @param {*} password 
     */
    constructor(firstName ="", lastName ="", username="", emailAddress="", password="") {
      this.m_firstName= firstName;
      this.m_lastName= lastName;
      this.m_username = username;
      this.m_emailAddress = emailAddress;
      this.m_password = password;
    }
  
    
    toString() {
      return `First Name: ${this.FirstName} 
  Last Name: ${this.LastName} 
  Username: ${this.Username}
  Email Address: ${this.EmailAddress}`;
    }

    /**
     *this method takes a json object and assigns them to User info
     *
     * @param {object} data
     * @memberof User
     */
    toJSON(){
        return{
            "FirstName":this.FirstName,
            "LastName":this.LastName,
            "Username":this.Username,
            "EmailAddress":this.EmailAddress,
        }
    }

    fromJSON(data){
      this.FirstName = data.FirstName;
      this.LastName = data.LastName;
      this.Username = data.Username;
      this.EmailAddress = data.EmailAddress;
      this.Password = data.Password;
    }

    /**
     *this method converts the User into a comma-seperate string
     *
     * @return {string} 
     * @memberof User
     */
    serialize(){
        if(this.FirstName !== "" && this.LastName !== "" && this.Username !== "" && this.emailAddress !== "" && this.Password !== ""){
            return `${this.DirstName},${this.LastName},${this.Username},${this.EmailAddress}`;
        } else {
            console.error("Error - One or more user fields are empty");
            return null;
        }
    }

    /**
     * this method takes a comma-seperate data string and assigns values to the User class
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data){
        let propertyArray = data.split(",");
        this.FirstName = propertyArray[0];
        this.LastName = propertyArray[1];
        this.Username = propertyArray[2];
        this.EmailAddress = propertyArray[3];
    }
  }

  core.User = User;
})(core || (core = {}));