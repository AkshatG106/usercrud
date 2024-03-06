// import React from 'react'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Update from "./Update";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Display() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setData(data);
  };
  // console.log(data)
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  };


  const points = {
    "Birthday" : 200,
    "Anniversary" : 1000,
    "Game-Winning":500,
    "Good-Performance" : 800,
    "Three-Year-Anniversary" : 5000
  }

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="table-auto border border-slate-500  sm:rounded-lg w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              UserName
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Edit/Delete
            </th>
          </tr>
        </thead>
        <tbody className="text-center">  
          {data.map((item, i) => (
            <tr
              key={i}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.username}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.email}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {points[item.category]}
              </td>
              <td className="px-6 py-4">
              <button
                    onClick={() =>
                      handleEdit(item.id)
                    }
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 ml-2 rounded-lg focus:outline-none focus:shadow-outline text-xl"
                  >
                    <MdDelete />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;

{
  /* <tr key={i}>
                <td className="border border-slate-700 p-5">{item.username}</td>
                <td className="border border-slate-700 p-5">{item.email}</td>
                <td>0</td>
                <td className="border border-slate-700 p-5">
                  <button
                    onClick={() =>
                      handleEdit(item.id, item.username, item.email)
                    }
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 ml-2 rounded-lg focus:outline-none focus:shadow-outline text-xl"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr> */
}
