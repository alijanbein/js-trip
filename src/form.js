class Form {
    constructor(fname, lname, phone, email, password){
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

     asObject() {
        return JSON.stringify( {
            fname: this.fname,
            lname: this.lname,
            phone: this.phone,
            email: this.email,
            password : this.password
        })
    }
}

const submitHandler = (event) => {
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const form = new Form(fname, lname, phone, email, password)
    console.log(form.asObject());

    const pas = document.getElementById("pas")
    const gm = document.getElementById("gm")
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z])+\.([a-z]+)$/ || false;
    const emailIsValid = !!email.match(emailRegex);
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    const passwordIsValid = !!password.match(passwordRegex) || false
    if(!passwordIsValid) {
        pas.classList.add("error")
    }
    if(!emailIsValid) {
        gm.classList.add("error")
    }
    if (passwordIsValid && emailIsValid) {
        window.location.href = "./course.html";
        pas.classList.remove("error")
        gm.classList.remove("error")
        
    }

}