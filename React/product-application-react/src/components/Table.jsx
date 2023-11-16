import React from 'react'

const Table = ({children}) => {
  return (
    <table className='table table-bordered m-5 mt-2'>
      {children}
    </table>
  )
}

export default Table