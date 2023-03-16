
const icon = document.querySelector('#icon'),
      signU = document.querySelector('#sign_u'),
      signI = document.querySelector('#sign_i'),
      restore = document.querySelector('.restore'),
      aSignIn = document.querySelector('#auth_link'),
      aSignUp = document.querySelector('#auth__link'); 

aSignIn.addEventListener('click', (el) => {
    el.preventDefault()
    if(signI) {
        signU.style.display = 'none'
        signI.style.display = 'block'
    } else {
        console.log('error');
    }
})

aSignUp.addEventListener('click', (el) => {
    el.preventDefault()
    if(signU) {
        signI.style.display = 'none'
        signU.style.display = 'block'
    } else {
        console.log('error');
    }
})

const  firstName = document.querySelector('#firstName'),
       secondName = document.querySelector('#secondName'),
       email = document.querySelector('#email'),
       password = document.querySelector('#password'),
       userName = document.querySelector('#userName'),
       passwordSignIn = document.querySelector('#password_sign-in'),
       signInBtn = document.querySelector('#signInBtn'),
       signUpBtn = document.querySelector('#signUp')

// fetch('http://localhost:5257/api/Account/UserRegistr')
//     .then(req => resq.json())
//     .then(data => console.log(data))

const regPost = async () => {

    const data = {
        "firstName": firstName.value,
        "secondName": secondName.value,
        "email": email.value,
        "password": password.value
    }

    const config = {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    }
    const resp = await fetch('http://sstatus200-001-site1.ftempurl.com/api/Account/UserRegistr', config)
    const val = await resp.json();   
    console.log(val);
   
}
signUpBtn.addEventListener('click', async (e) => {
    e.preventDefault()
     await regPost();

    firstName.value = ''
    secondName.value = ''
    email.value = ''
    password.value = ''
})

const getDataSI = async () => {
    const request = await fetch('http://sstatus200-001-site1.ftempurl.com/api/Account/Authorization')
    const data = await request.json()
    console.log(data);
}
 signInBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getDataSI()
    userName.value = ''
    passwordSignIn.value = ''
})

