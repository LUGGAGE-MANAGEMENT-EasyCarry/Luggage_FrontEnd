import React, {useState, useEffect} from 'react';
import { Header, Button} from '../components';
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

  const [newStateValue, setNewStateValue] = useState('');
  
  const handleStateChange = async (index) => {

    const updatedLuggages = [...luggages];
    updatedLuggages[index].state = newStateValue;
    const luggageId = updatedLuggages[index].luggageId;
    setLuggages(updatedLuggages);
    try {
      await axios.patch(
        `http://localhost:8089/backoffice/api/v1/luggage/edit/status/${luggageId}?state=${newStateValue}`
      );
    } catch (error) {
      console.error("Error updating luggage state:", error);
    }
   
  };

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
              <td className="px-6 py-4 whitespace-nowrap"> 
                  <select
                    value={newStateValue}
                    onChange={(e) => setNewStateValue(e.target.value)}
                  >
                   
                    <option value="PENDING">PENDING</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                  <Button
                   color="white"
                   bgColor="gray"
                   text="edit"
                   borderRadius="10px"
                   size="md" 
                   className="mt-10"
                    onClick={() => handleStateChange(index)}
                  />
              </td>
              
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
