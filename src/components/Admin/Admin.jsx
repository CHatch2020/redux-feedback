import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
      console.log('Deleting Data');
      axios({
          method: 'DELETE',
          url: '/delete',
          data: id
      }).then((res) => {
          console.log('Item is Deleted');
      }).catch((err) => {
          console.log('Error in axios DELETE', err);
      });
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>

          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td> {item.feeling} </td>
                <td> {item.understanding} </td>
                <td> {item.support} </td>
                <td> "{item.comments}" </td>
                <button onClick={deleteFeedback}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
