// import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';


function AddUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers : {"content-type" : "application/json"},
            body: JSON.stringify({ 
                username: name,
                email: email,
                category:category
               }),
        }).then(response => {
            if (response.ok) {
              alert("Data submitted successfully");
            } else {
              alert("Failed to submit data");
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });

          setEmail('')
          setName('')
          setCategory('')
    }



  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className='w-1/2 bg-white shadow-lg shadow-gray-500 rounded-lg px-10 py-8 mb-8 text-lg text-black'>
            <label className='block text-black font-bold mb-2 text-xl'>UserName</label><input type='text' placeholder='Enter UserName' className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline " value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
            <label className='block text-black font-bold mb-2 text-xl'>Email</label><input type='email' placeholder='Enter Email' className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline " value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
            <label className='block text-black font-bold mb-2 text-xl'>Points</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='shadow shadow-gray-300 mt-3 border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
              <option>Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Game-Winning</option>
              <option>Good-Performance</option>
              <option>Three-Year-Anniversary</option>
              {/* <RiArrowDropDownLine /> */}
            </select><br /><br/>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl">Add User</button>
            <Link to='/display'><button className="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl">View</button></Link>
        </form>
    </div>
  )
}

export default AddUser