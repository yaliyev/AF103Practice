
let userID = 1;

let sentMessages = [];
let receivedMessages = [];

async function getChatHistoryWithSomeone(sentToID){
    let dialogHistoryMessages = [];
    let history = await fetch('db.json')
    .then(response=>response.json());
    let currentUser = history.users.find((element)=>{
        if(element.id === userID){
            return element;
        }
    });
    
    // console.log(currentUser);

    for(let i = 0;i < currentUser.sentMessages.length;i++){
        let sentMessage = currentUser.sentMessages[i];
        if(sentMessage.sentToID === sentToID){
            dialogHistoryMessages.push(sentMessage);
        }
    }
    
    for(let i = 0;i < currentUser.receivedMessages.length;i++){
        let receivedMessage = currentUser.receivedMessages[i];
        if(receivedMessage.receivedFromID === sentToID){
            dialogHistoryMessages.push(receivedMessage);
        }
    }

    return dialogHistoryMessages;


}
async function getSortedChatHistoryWithSomeone(sendToId){
    let data = await getChatHistoryWithSomeone(sendToId);

    

    data.map((element)=>{
        element.date = new Date(Date.parse(element.date));
    })
    data.sort((a,b)=>{
        return a.date - b.date
    })
    console.log(data);
}

async function sendMessage(toSomeoneID,msgContent){
    let response = await fetch('db.json',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({sentToID:toSomeoneID,msgContent:msgContent,date: new Date()})
    })
    return response.ok;
}

getSortedChatHistoryWithSomeone(2);

