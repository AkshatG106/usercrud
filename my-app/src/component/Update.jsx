// import React from 'react'

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Update() {

    const navigate = useNavigate();
    const {id} = useParams();
    // console.log(id)

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [category, setCategory] = useState('')


    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     const username = params.get('username') || '';
    //     const email = params.get('email') || '';
    //     setUserName(username);
    //     setUserEmail(email);
    // }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers : {"content-type" : "application/json"},
            body: JSON.stringify({ 
                username: userName,
                email: userEmail,
                category:category
               }),
        }).then(response => {
            if (response.ok) {
                navigate('/');
              alert("Data Updated successfully");
            } else {
              alert("Failed to Update data");
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });

          setUserEmail('')
          setUserName('')
          setCategory('')
    }

  return (
    <div className='flex justify-center items-center h-screen'>
        <form className='w-1/2 bg-white shadow-lg shadow-gray-500 rounded-lg px-10 py-8 mb-8 text-lg text-black'>
            <label className='block text-black font-bold mb-2 text-xl'>New UserName</label><input type="text" placeholder="Enter New Username" className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline " value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <label className='block text-black font-bold mb-2 text-xl mt-5'>New Email</label><input type="email" placeholder="Enter New Email" className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline " value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <label className='block text-black font-bold mb-2 text-xl mt-4'>Points</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='shadow shadow-gray-300 mt-3 border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
              <option>Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Game-Winning</option>
              <option>Good-Performance</option>
              <option>Three-Year-Anniversary</option>
              {/* <RiArrowDropDownLine /> */}
            </select><br /><br/>
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl">Update</button>
        </form>
    </div>
  )
}

export default Update