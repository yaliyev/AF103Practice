import React, { useRef } from 'react'
import { CForm, CFormInput, CRow, CCol, CFormSelect, CFormCheck, CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { login } from '../api/users_request'
const Login = ({setIsLogin,setUser}) => {
  let usernameRef = useRef("");
  let passwordRef = useRef("");
  async function submitLoginForm(e) {
    e.preventDefault();

    let user = {
      name: usernameRef.current.value,
      pass: passwordRef.current.value
    };

    let result = await login(user);

    if(result != undefined){
      setIsLogin(true);
      setUser(user);
    }
    

  }
  return (
    <CForm onSubmit={submitLoginForm} className="row g-3">




      <CRow className='mt-3'>
        <CCol md={5}></CCol>
        <CCol md={2}>
          <CFormInput ref={usernameRef} id="usernameinput" label="Username:" />
        </CCol>
      </CRow>
      <CRow className='mt-3'>
        <CCol md={5}></CCol>
        <CCol md={2}>
          <CFormInput type='password' ref={passwordRef} id="passwordinput" label="Password:" />
        </CCol>
      </CRow>
      <CRow className='mt-3'>
        <CCol md={5}></CCol>
        <CCol md={2} className='d-flex justify-content-center '>
          <CButton type='submit'>Submit</CButton>
        </CCol>
      </CRow>


    </CForm>
  )
}

export default Login