import React, {useState, useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,
Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

import axios from 'axios';


const Customers = () => {

  const [customers,setCustomers] = useState([]);
  const getCustomersData = () => {
    return axios.get("http://localhost:8089/backoffice/customers").then((response) => {
      setCustomers(response.data)
    })
  }
  useEffect(() => {
    getCustomersData();
  }, [])
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Customers"/>
      <GridComponent
          dataSource={customers}
          allowPaging
          allowSorting
          toolbar={['Delete','Search']}
          editSettings={{allowDeleting: true, allowEditing: true}}
          width="auto"
          className="mt-10"
      >
        <ColumnsDirective>
        {customers.map((item, index) => (
            <ColumnDirective 
              key={index} {...item}
            />
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers
