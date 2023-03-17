
const icon = document.querySelector('#icon'),
      signU = document.querySelector('.sign_u'),
      signI = document.querySelector('#sign_i'),
      restore = document.querySelector('.restore'),
      aSignIn = document.querySelector('#auth_link'),
      aSignUp = document.querySelector('#auth__link'); 
      userBlock = document.querySelector('.header__link');


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
       client = document.querySelector('.client container')

const regPost = async () => {
    try{
        const data = {
            "firstName": firstName.value,
            "secondName": secondName.value,
            "email": email.value,
            "password": password.value
        }
        console.log(data);
        const config = {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content_type": "application/json",
                },
            body: JSON.stringify(data)
        }
    

        const resp = await fetch('http://sstatus200-001-site1.ftempurl.com/api/Account/UserRegistr', config)
        const val = await resp.json();  
        if(resp.status === 200 || 201){
            console.log(val)
            console.log('Успешный ответ от сервера:', val);
        }
    }
    catch (error) {    
        console.error(error); 
    } 
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
        try {
            const request = await fetch('http://sstatus200-001-site1.ftempurl.com/api/Account/Authorization')
            const data = await request.json()
            console.log(data);
        } catch(err) {
            console.log('ошибка', err)
        }
    }
 signInBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getDataSI()
    userName.value = ''
    passwordSignIn.value = ''
})


const start = document.querySelector('.user_name'),
      end = document.querySelector('#end'),
      userBtn = document.querySelector('#user_btn'),
      infoIpn = document.querySelector('#info'),
      workInfo = document.querySelector('#workInfo'),
      workInfoTwo = document.querySelector('#work_info');

 const userPost = async () => {
     try {
         const data = {
            "projectName": infoIpn.value,
            "assignedTasks": workInfo.value,
            "workReport": workInfoTwo.value,  
            // "userId": 
         } 
         console.log(data);
         const config = {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
                 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                 'content-type':'text/plain; charset=utf-8',
                 'server':' Microsoft-IIS/10.0 ',
                 ' transfer-encoding':' chunked ',
                 'vary':'Accept-Encoding',
                 'x-powered-by':'ASP.NET',
                },
            body: JSON.stringify(data)
        }
        const resp = await fetch('http://sstatus200-001-site1.ftempurl.com/api/User/CreateReport', config)
            console.log(resp);
            const val = await resp.json();   
            console.log('Успешный ответ от сервера:', val);
         }
         catch (error) { 
             const text =  error.message;    
                 console.error('Ошибка при выполнении запроса:', text); 
         } 
 }
    
 const dataStart = async () =>  {
    try {
        const request = await fetch('http://sstatus200-001-site1.ftempurl.com/api/User/GetAllReportDataForUser')
        const data = await request.json()
        console.log(data);
    } catch {
        const text = error.message;
        console.error('Ошибка при выполнении запроса:', text); 
    }
 }

 userBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await userPost();
    await dataStart()
})