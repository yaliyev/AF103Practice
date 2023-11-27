import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { CTable,CTableHead,CTableHeaderCell,CTableDataCell,CTableBody,CTableRow,CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import { editCurrentUserAndAddFriend } from '../api/users_request'
const Friends = ({ user, users,setUsers, friends, setShowFriendsPage }) => {

  const [showRequests, setShowRequests] = useState(false);

  function acceptRequest(iteratedFriend,requestIndex){
    user.friends.push({id:iteratedFriend.id});
    console.log(user.friends);
                 user.requests.splice(requestIndex,1);
                 const data = [...users];

                 let currentUserIndex = -1; 
                 data.find((iteratedUser,index)=>{
                  if(iteratedUser.id === user.id){
                      currentUserIndex = index;
                  }
                 })
                 data[currentUserIndex] = {...user};
                 setUsers(data);
                 editCurrentUserAndAddFriend(user);
                 

  }
 
  

  return (



    <>
       
      { user.requests.length > 0&&showRequests ? <>
        <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Friend Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
             {user.requests.map((friend,friendIndex)=>{
              let requestIndex = -1;
               let iteratedRequestUser= users.find((iteratedUser,index)=>{
                if(iteratedUser.id == friend.id){
                  requestIndex = index;
                  return iteratedUser;
                }
               });
                 console.log(iteratedRequestUser);
               return <CTableRow key={friendIndex}>
                  <CTableDataCell>{iteratedRequestUser.name}</CTableDataCell>
                  <CTableDataCell> <CButton onClick={()=>{acceptRequest(iteratedRequestUser,requestIndex)}}>Accept</CButton> </CTableDataCell>
               </CTableRow>


             })

             }
             
            </CTableBody>
          </CTable>

        {
          
         
          

        }

      </> : <></>}


      <CRow>
        <CCol sm={1}></CCol>
        <CCol sm={3}>
          <h1>Username: {user.name} </h1>
        </CCol>
        <CCol sm={2}>
          <h1>Friends</h1>
        </CCol>
        <CCol sm={1}>
          <CButton className='mt-2' onClick={() => { setShowFriendsPage(false) }}>Get Back</CButton>
        </CCol>
        <CCol sm={2}>
        <CButton onClick={()=>{setShowRequests(true);console.log(showRequests);}} className='mt-2'>Show Friend Requests</CButton>
        </CCol>
      </CRow>
      <CRow>

        {friends.map((friend, index) => {

          let friendObject = users.find((iteratedUser) => iteratedUser.id === friend.id);



          return <CCol key={index} className='mx-5 mt-3' sm={3}>
            <CCard>
              <CCardImage orientation="top" src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} />
              <CCardBody>
                <CCardTitle className='text-center display-3'>{friendObject.name}</CCardTitle>

                <CCol className='d-flex justify-content-center mt-3' sm={12}>

                </CCol>

              </CCardBody>
            </CCard>
          </CCol>

        })}

      </CRow>

    </>

  )
}

export default Friends