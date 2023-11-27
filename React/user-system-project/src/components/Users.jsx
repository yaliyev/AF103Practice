import React, { useEffect, useState } from 'react'
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import { getUsers, editCurrentUserAndAddFriend } from '../api/users_request'
import Friends from './Friends'
const Users = ({ user, setUser }) => {
  const [users, setUsers] = useState([])
  const [showFriendsPage, setShowFriendsPage] = useState(false);


  function addToFriend(newFriendUser) {
    console.log(user);
    let currentUser = { ...user };

    console.log(currentUser);
    console.log(newFriendUser);
    let isFriend = currentUser.friends.find(friend => newFriendUser.id === friend.id);

    if (isFriend == undefined) {

      newFriendUser.requests.push({id:currentUser.id});

      // currentUser.friends.push({ id: newFriendUser.id });
      // newFriendUser.friends.push({ id: currentUser.id });
    }

    let currentUserIndex = -1;
    users.find((iteratedUser, index) => {
      if (iteratedUser.id === currentUser.id) {
        currentUserIndex = index;
      }
    });

    let newFriendUserIndex = -1;
    users.find((iteratedUser, index) => {
      if (iteratedUser.id === newFriendUserIndex.id) {
        newFriendUserIndex = index;
      }
    });

    let data = [...users];

    data[currentUserIndex] = currentUser;
    data[newFriendUserIndex] = newFriendUser;
    setUser(currentUser);
    setUsers(data);
    editCurrentUserAndAddFriend(currentUser);
    editCurrentUserAndAddFriend(newFriendUser);

  }

  useEffect(() => {
    async function loadUsers() {
      let usersData = await getUsers();

      usersData = [...usersData];

      let loggedUserIndex = null;
      let loggedUser = usersData.find((iteratedUser, index) => {
        if (user.name === iteratedUser.name) {
          loggedUserIndex = index;
          return iteratedUser;
        }
      });

      setUser(loggedUser);

      usersData.splice(loggedUserIndex, 1);



      setUsers(usersData);
    }


    loadUsers();

  }, [])
  return (
    <>

      {showFriendsPage ? <Friends user={user} users={users} setUsers={setUsers} friends={user.friends} setShowFriendsPage={setShowFriendsPage} /> : <>

        <CRow>
          <CCol sm={1}></CCol>
          <CCol sm={3}>
            <h1>Username: {user.name} </h1>
          </CCol>
          <CCol sm={2}>
            <CButton className='btn btn-warning mt-3' onClick={() => { setShowFriendsPage(true) }}>My Friends</CButton>
          </CCol>
        </CRow>

        <CRow>

          {users.map((user, index) => {

            return <CCol key={index} className='mx-5 mt-3' sm={3}>
              <CCard>
                <CCardImage orientation="top" src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} />
                <CCardBody>
                  <CCardTitle className='text-center display-3'>{user.name}</CCardTitle>

                  <CCol className='d-flex justify-content-center mt-3' sm={12}>
                    <CButton onClick={() => { addToFriend(user) }} >Add to friend</CButton>
                  </CCol>

                </CCardBody>
              </CCard>
            </CCol>

          })}

        </CRow>


      </>}




    </>
  )
}

export default Users