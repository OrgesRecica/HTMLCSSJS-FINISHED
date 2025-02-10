const form = document.getElementById('form')
const firstname_input = document.getElementById('username')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')
const repeat_passowrd_input = document.getElementById('password')

form.addEventListener('submit', (e) => {
//e.preventDefault() 

let errors = []

if(firstname_input){
    errors=getSignupFormErrors(firstname_input.value, email_input.value, repeat_passowrd_input.value)

}

else{

    errors = getLoginFormErrors(email_input.value, password_input.value)
}
}  )

function getSignupFormErrors(firstname, email, password, repeatpassowrd){
    let errors=[]

    if(firstname === '' || firstname == null) {
        errors.push('Firstname is required')

    }
    
}