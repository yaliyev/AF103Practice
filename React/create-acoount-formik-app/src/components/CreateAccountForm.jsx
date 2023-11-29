import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useFormik } from 'formik'
import {createAccountSchema} from '../validation/form-validation'
const CreateAccountForm = () => {
  const formik = useFormik({
    initialValues:{
      'firstName':'',
      'lastName':'',
      'email':'',
      'dateBirth':'',
      'password':'',
      'confirmPassword':''
    },
    onSubmit: async(values,actions)=>{
      
    },
    validationSchema: createAccountSchema
  })
  return (
    <div>
      <div className='title'>
         <h3 className='text-light' >Create account</h3>
      </div>

<form onSubmit={formik.handleSubmit}>
<div className="row input-boxes">
        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">First Name</label>
          <input onBlur={formik.handleBlur} name='firstName' value={formik.values.firstName} onChange={formik.handleChange} className='form-control' type="text" />
          {formik.errors.firstName&&formik.touched.firstName && <div className='text-danger'>{formik.errors.firstName}</div>}
        </div>
        </div>
        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">Last Name</label>
          <input onBlur={formik.handleBlur} name='lastName' value={formik.values.lastName} onChange={formik.handleChange} className='form-control' type="text" />
          {formik.errors.lastName&&formik.touched.lastName && <div className='text-danger'>{formik.errors.lastName}</div>}
        </div>
        </div>

        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">Email</label>
          <input onBlur={formik.handleBlur} name='email' value={formik.values.email} onChange={formik.handleChange} className='form-control' type="text" />
          {formik.errors.email&&formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>}
        </div>
        </div>

        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">Date birth</label>
          <input onBlur={formik.handleBlur} name='dateBirth' value={formik.values.dateBirth} onChange={formik.handleChange} className='form-control' type="text" />
          {formik.errors.dateBirth&&formik.touched.dateBirth && <div className='text-danger'>{formik.errors.dateBirth}</div>}
        </div>
        </div>

        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">Password</label>
          <input onBlur={formik.handleBlur} name='password' value={formik.values.password} onChange={formik.handleChange} className='form-control' type="password" />
          {formik.errors.password&&formik.touched.password && <div className='text-danger'>{formik.errors.password}</div>}
        </div>
        </div>

        <div className="col-5">
        <div className="input-box">
          <label className='text-light' htmlFor="">Confirm password</label>
          <input onBlur={formik.handleBlur} name='confirmPassword' value={formik.values.confirmPassword}  onChange={formik.handleChange} className='form-control' type="password" />
          {formik.errors.confirmPassword&&formik.touched.confirmPassword&& <div className='text-danger'>{formik.errors.confirmPassword}</div>}
        </div>
        </div>

        <div className="col-5 my-3">
          <button className='btn btn-primary w-100'>Create account</button>
        </div>

        <div className="col-5 my-3">
          <button className='btn btn-warning w-100'>Sign in with google</button>
        </div>
        
      </div>
</form>
      
    </div>
  )
}

export default CreateAccountForm