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
    <div className="max-w-4xl mx-auto p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sort</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Luggage ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {luggages.map((easyFly, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{easyFly.luggageId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{easyFly.weight}</td>
              <td className="px-6 py-4 whitespace-nowrap">{easyFly.flightId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{easyFly.customerId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{easyFly.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default Luggages
