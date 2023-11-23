import React from 'react'
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import { getUsers } from '../api/users_request'
const Friends = ({ user,users,friends,setShowFriendsPage }) => {

  

  return (

    <>

<CRow>
  <CCol sm={1}></CCol>
  <CCol sm={3}>
    <h1>Username: {user.name} </h1>
  </CCol>
  <CCol sm={2}>
  <h1>Friends</h1> 
  </CCol>
  <CCol sm={2}>
    <CButton className='mt-2' onClick={()=>{setShowFriendsPage(false)}}>Get Back</CButton>
  </CCol>
</CRow>
      <CRow>

        {friends.map((friend, index) => {

          let friendObject = users.find((iteratedUser)=>iteratedUser.id === friend.id);



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