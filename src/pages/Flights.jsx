import React, {useState,useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,
Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { flighData, flightsGrid } from '../data/dummy';
import { Header, Button } from '../components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Flights = () => {

  const [flights,setFlights] = useState([]);
  
  const getFlightsData = () => {
    return axios.get("http://localhost:8089/backoffice/api/flights").then((response) => {
      setFlights(response.data)
    })
  }

  const postFlightsData = () => {
    return axios.post("").then((response) => {
      setFlights(response.data)
    })
  }
  useEffect(() => {
    getFlightsData();
    postFlightsData();
  }, [])
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header title="Flights" />
          <Link to="/CreateFlight">
            <Button
              color="white"
              bgColor="gray"
              text="Create New Flight"
              borderRadius="10px"
              size="md"
            />
          </Link>
      </div>
      <GridComponent
          dataSource={flights}
          allowPaging          
          toolbar={['Search']}
          width="auto"
          className="mt-10"
      >
        <ColumnsDirective>
        {flights.map((item, index) => (
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

export default Flights
