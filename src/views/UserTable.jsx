import { useEffect, useState } from "react";
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import SearchBox from "../components/SearchBox";
import _ from lodash;


const baseURL = "api/users";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL)
          .then((response) => {
            setUsers(response.data);
          })
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const combinedName = (rowData) => {
    return (
      <div>
        {rowData.name.first} {rowData.name.last}
      </div>
    )
  }

  const combinedLocation = (rowData) => {
    return (
      <div>
        {rowData.location.street.number}, {rowData.location.street.name}, {rowData.location.city}, {rowData.location.state}, {rowData.location.country}
      </div>
    )
  }
  
  const deleteRow = (rowData) => {
    const name = `${rowData.name.first} ${rowData.name.last}`;
    users.filter
  
  }

  const deleteButton = () => {
    return (
      <Button label="Delete" severity="warning" 
              icon="pi pi-trash" rounded 
              style={{ fontWeight: 'bold', color: 'white' }}
              onClick={deleteRow}
              />
    )
  }
  
  // const globalSearch = users.filter((user) => {
  //   if (searchInput === "") {
  //     return user;
  //   }
  //   else {
  //     return user.name.toLowerCase().match(searchInput);
  //   }
  // })

  return (
    <div>
      <div className="container" style={{ margin: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#37404c', letterSpacing: '2px' }}>Users</h1>
        <SearchBox value={searchInput} style={{ width: '700px', borderRadius: '15px', marginTop: '18px' }} />
        <div></div>
      </div>
      <DataTable value={users} 
                 sortMode="multiple" paginator rows={7} 
                 stripedRows tableStyle={{ minWidth: '50rem' }}
                 style={{ margin: '15px', marginTop: '25px' }}>
        <Column header="Name" sortable body={combinedName} 
                bodyStyle={{ fontWeight: 'bold' }}
                sortField="name.first"></Column>
        <Column field="gender" sortable header="Gender" bodyStyle={{ textTransform: 'capitalize' }}></Column>
        <Column body={combinedLocation} header="Address"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column body={deleteButton}></Column>
      </DataTable>
    </div>
  )
}
