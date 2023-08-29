import React,{ useState, useEffect }  from 'react';
import { Button } from '../components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import axios from 'axios';

const CreateFlight = () => {
  const [createFlight, setCreateFlight] = useState({
    pnrCode: "",
    departureLocation: "",
    phoneNumber: "",
    flightDate: null,
  });

  const onSubmit = () => {

    axios.post("http://localhost:8089/backoffice/api/flights/create", createFlight)
      .then(response => {
        setCreateFlight(response.data)
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }

  const onInputAdd = (fieldName, value) => {
    setCreateFlight(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  return (
    <div className="p-6 m-20 w-500 bg-gray-200 hover:bg-gray-300 rounded-3xl">
      <div className="justify-center">
        <h3 className="font-extrabold text-gray-600 flex justify-center mb-5">Create New Flight</h3>
        <div className="textbox-form">
          <form className="rounded-full mb-10 w-">
          <TextBoxComponent
              type="text"
              name="pnrCode"
              value={createFlight.pnrCode}
              onChange={(e) => onInputAdd('pnrCode', e.target.value)}
              placeholder="Pnr Code"
              floatLabelType="Auto"
            />
          <TextBoxComponent
              type="text"
              name="departureLocation"
              value={createFlight.departureLocation}
              onChange={(e) => onInputAdd('departureLocation', e.target.value)}
              placeholder="Departure Location"
              floatLabelType="Auto"
            />
            <TextBoxComponent
              type="text"
              name="phoneNumber"
              value={createFlight.phoneNumber}
              onChange={(e) => onInputAdd('phoneNumber', e.target.value)}
              placeholder="Phone Number"
              floatLabelType="Auto"
            />
            <DatePickerComponent
                name="flightDate"
                value={createFlight.flightDate}
                onChange={(e) => onInputAdd('flightDate', e.value)}
                placeholder="Flight Date"
                floatLabelType="Auto"
            />
             <Button 
                color="white"
                bgColor="gray"
                text="Save"
                borderRadius="10px"
                size="md" 
                className="mt-10"
                onClick={onSubmit}
             />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateFlight;