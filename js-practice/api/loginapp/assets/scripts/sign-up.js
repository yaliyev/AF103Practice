let signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit',  function (event) {
    event.preventDefault();
    let dataElements = this.querySelectorAll('.data');

    let user = {
        username: dataElements[0].value,
        password: dataElements[1].value
    };
    console.log(user);
     fetch('http://localhost:3000/users/',
     
    //  {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user)}
     {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    }
    
    
    ).then((response) => {
        return response.json()
    }).then(data=>{
        console.log(data);
    })

})