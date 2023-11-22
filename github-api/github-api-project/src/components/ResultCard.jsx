import React, { useRef } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton} from '@coreui/react'
const ResultCard = ({user}) => {
   let cardDisplay = 'none';
   console.log(user);
   if(user.name != ""){
    cardDisplay = 'block';
   }
  return (
    <CCard  style={{display:cardDisplay,width:'30%',marginTop:'20px' }}>
    <CCardImage orientation="top" src={user.avatar_url} />
    <CCardBody>
      <CCardTitle className='text-center'>{user.name}</CCardTitle>
      <CCardText>
        {user.location} {user.company} {user.bio}
      </CCardText>
      <div className='d-flex justify-content-center '>
      </div>
      
    </CCardBody>
  </CCard>
  )
}

export default ResultCard