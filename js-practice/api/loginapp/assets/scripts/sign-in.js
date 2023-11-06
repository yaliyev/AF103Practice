
let users = [];

async function getData(){
  users = await fetch('http://localhost:3000/users',{
    method:'GET'
  }).then(response=>response.json());

 console.log(users);
}


    let signInForm = document.getElementById('sign-in-form');

    signInForm.addEventListener('submit',function(event){
           event.preventDefault();

           let dataElements = this.querySelectorAll('.data');
          
           let user = {
             username: dataElements[0].value,
             password: dataElements[1].value,
           }

           let result = users.find(element=>element.username === user.username);

           if(result != undefined){
            localStorage.setItem('loginapp-user-login',true);
           }else{
            localStorage.setItem('loginapp-user-login',false);
           }
           


    });


getData();