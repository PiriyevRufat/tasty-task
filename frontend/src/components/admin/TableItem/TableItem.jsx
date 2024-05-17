import axios from "axios";
import React, { useContext } from "react";
import MainContext from "../../../context/context";
function TableItem({ item }) {
  const { data, setData } = useContext(MainContext);
  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`).then((res) => {
      setData([...res.data]);
    });
  };
  return (
    <tr>
    <th scope="row">{item._id}</th>
    <td><img src={item.image} alt="" width="60px" height="60px" /></td>
    <td>{item.ingredients}</td>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td><button className='btn btn-danger' onClick={()=>{
        deleteItem(item._id)
    }}>Delete</button></td>
  </tr>
  );
}

export default TableItem;
