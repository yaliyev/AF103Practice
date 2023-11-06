async function request1(){
   let response = await fetch('https://northwind.vercel.app/api/products')
   let data =await response.json()
   return data;
}
async function request2(){

   let response = await fetch('https://northwind.vercel.app/api/orders',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({id:120,name:'Bounty Chocolate'})
    });

    console.log(response);
    
}
async function request3(){

    let response = await fetch('https://northwind.vercel.app/api/orders/10266',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "region":"NY"
        })
    });

    

    console.log(response);
    
}
async function request4(){
    let response = await fetch('https://northwind.vercel.app/api/orders/10292',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "region":"NY"
        })
    });

    

    console.log(response);
    
}
async function request5(){
    
}


document.getElementsByTagName('button')[0].addEventListener('click',async function(){
  let data = await request1();

  console.log(data);
});
document.getElementsByTagName('button')[1].addEventListener('click',async function(){
    let data = await request2();
  
  });

  document.getElementsByTagName('button')[2].addEventListener('click',async function(){
    let data = await request3();
  
  });