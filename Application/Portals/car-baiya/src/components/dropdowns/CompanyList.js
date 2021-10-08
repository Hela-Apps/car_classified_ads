import React, {useState,useEffect } from 'react'
import '../layout/Layout.css';


function CompanyListDropDown(){
    debugger
    const [items,setItems] = useState([]);
      useEffect(() => {
          async function getCompanies(){
              const response = await fetch("https://localhost:49459/api/Common/GetAllCompanies");
              const body = await response.json();
              setItems(body.results.map(({ name }) => ({ label: name, value: name })));
          }
          getCompanies();
        },[]);
          
     
    return(
        <select className="form-control">
                    {items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
                  </select>
    );

}

export default CompanyListDropDown;

