import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const {id}=useParams();
  const [user, setUser]=useState(null);
  const [isLoading, setLoading]=useState(true)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
      setUser(res.data);
      setLoading(false);
    })
  },[id]);

  return (
    <div className='user'>
      <h2>User</h2>
      <div className="userDetail">
        {
          isLoading?(<div className='loding'>로딩중...</div>):(
            <div>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default User;