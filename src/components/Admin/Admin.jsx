import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App/App";

function Admin() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    console.log("Getting admin feedback");
    axios({
      method: "GET",
      url: "/admin",
    })
      .then((res) => {
        console.log("Got the Data for admin!");
        setData(res.data);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log("Error in admin GET", err);
      });
  };

  const deleteFeedback = () => {
    console.log("Deleting Data");
    axios({
      method: "DELETE",
      url: "/delete",
      data: id,
    })
      .then((res) => {
        console.log("Item is Deleted");
      })
      .catch((err) => {
        console.log("Error in axios DELETE", err);
      });
  };

  return (
    <div>
      <table className="flex flex-wrap justify-center place-content-center my-44">
        <tbody className=" p-8 w-100 shadow rounded bg-blue-200 border-2 border-gray-200">
          <thead className="bg-gray-300">
            <tr className="text-center underline">
              <th className="px-8">Feeling</th>
              <th className="px-8">Understanding</th>
              <th className="px-8">Support</th>
              <th className="px-8">Comments</th>
              <th></th>
            </tr>
          </thead>

          {data.map((item, i) => {
            return (
              <tr className="text-center bg-yellow-100 rounded border border-white-100" key={i}>
                <td> {item.feeling} </td>
                <td> {item.understanding} </td>
                <td> {item.support} </td>
                <td> "{item.comments}" </td>
                <button
                  className="p-px mx-4 my-2 shadow-lg hover:shadow-inner hover:bg-green-300 rounded bg-purple-300 border border-gray-200 hover:text-gray-200"
                  onClick={deleteFeedback}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
