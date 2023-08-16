import React, {useState, useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,
Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { luggagesData, luggagesGrid } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';

const Luggages = () => {

  const [luggages,setLuggages] = useState([]);

  const getLuggagesData = () => {
    return axios.get("http://localhost:8089/backoffice/api/v1/luggage").then((response) => {
      setLuggages(response.data)
    })
  }
  useEffect(() => {
    getLuggagesData();
  }, [])

  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Luggages" />
      <GridComponent
          dataSource={luggages}  
          allowPaging
          allowSorting
          toolbar={['Search']}
          editSettings={{allowEditing: true}}
          className="mt-10"
      >
        <ColumnsDirective>
        {luggages.map((item, index) => (
            <ColumnDirective 
            key={index} {...item}
            />
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
    </div>
  )
}

export default Luggages
