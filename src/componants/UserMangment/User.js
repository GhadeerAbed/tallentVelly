import React,{useState,useEffect} from 'react'
import {GridContainer1,SearchContainer} from '../../styled/Container2.js'
import Navlink  from '../Invoices/Navlink'
import Table from './Table.js'
import Search from './Search'

// import axios from 'axios'


const User = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const endpoint = `https://talents-valley-backend.herokuapp.com/api/team/user/list`;
    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.data.users);
        setData(resp.data);
      })
      .catch((error) => console.log(error));
  
  }, []);


  return (
    <div style={{marginTop:"100px"}}>
        <GridContainer1>
          <div className='grid-item1'>
            <Navlink/>
          </div> 

          <SearchContainer >
          <div> 
            <p className='userpharg'>User Management</p>
            <Search setSearch={setSearch}/>
          </div>
           <div className='grid-item2'>
            <Table data={data} search={search} />
          </div>
          </SearchContainer>
     </GridContainer1>

    </div>
  )
}
 // const fetchData = async () => {
    //   const res = await axios.get(`https://talents-valley-backend.herokuapp.com/api/team/user/list`,{
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     }
    //   });
    //   setData(res.data);
    // };
    // fetchData()
export default User