import React, {useState,useEffect} from 'react';
import { Header, Button } from '../components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Flights = () => {

  const [flights,setFlights] = useState([]);
  
  useEffect(() => {
    getFlightsData();
  }, [])
  
  const getFlightsData = () => {
    return axios.get("http://localhost:8089/backoffice/api/flights",flights).then((response) => {
      setFlights(response.data)
    })
  }

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
      <div className="max-w-6xl mx-auto p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">sort</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PNR Code</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {flights.map((flightdb, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{flightdb.flightId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{flightdb.pnrCode}</td>
              <td className="px-6 py-4 whitespace-nowrap">{flightdb.flightDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{flightdb.departureLocation}</td>
              <td className="px-6 py-4 whitespace-nowrap">{flightdb.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Flights
