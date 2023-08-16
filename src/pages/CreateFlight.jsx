import React,{ useState, useEffect, useRef, useReducer }  from 'react';
import { Button } from '../components';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

let formObject;

const CreateFlight = () => {
  const userNameRef = useRef(null);
  const [flightDate, setFlightDate] = useState('');
  const initialState = { pnrCode: '', departureLocation:'', phoneNumber:''  };
  const reducer = (state, action) => {
      switch (action.type) {
          case 'update':
              return { ...state, [action.field]: action.value };
          default:
              return initialState;
      }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const dateChangeHandler = (event) => {
    setFlightDate(event.value);
  };
  const update = (field) => (event) => {
      dispatch({ type: 'update', field, value: event.value });
  };
  useEffect(() => {
      userNameRef.current.focusIn();
      const options = {
          // validation rules
          rules: {
              
              pnrCode: {
                required: [true, '* Please enter your PNR Code'],
              },
              flightDate: {
                required: [true, '* Please enter your Flight Date'],
              },
              phoneNumber: {
                required: [true, '* Please enter your Phone Number'],
              },
              departureLocation: {
                required: [true, '* Please enter your Departure Location'],
              },
          },
      };
      // Initialize the form validator
      formObject = new FormValidator('#form1', options);
  }, []);
  const onSubmit = () => {
    console.log("slm");
      formObject.validate();
      if (formObject.validate()) {
          formObject.element.reset();
          console.log("slm");
      }
  };
  return (
  <div className="p-6 m-20 w-600 bg-gray-200 hover:bg-gray-300">
    <div className="justify-center">

      <h3 className="font-extrabold text-gray-600 flex justify-center mb-5">Create New Flight</h3>

      <div className="textbox-form">
        <form className="rounded-full mb-10 w-" id="form1" method="post">
         
          <div className="form-group mt-2">
            <TextBoxComponent ref={userNameRef} type="text" name="pnrCode" value={state.pnrCode} change={update('pnrCode')} placeholder="Pnr Code" floatLabelType="Auto" data-msg-containerid="errroForpnrCode"/>
            <div id="errroForpnrCode"/>
          </div>
          <div className="form-group mt-2">
            <TextBoxComponent type="text" name="departureLocation" value={state.departureLocation} change={update('departureLocation')} placeholder="Departure Location" floatLabelType="Auto" data-msg-containerid="errroFordepartureLocation"/>
            <div id="errroFordepartureLocation"/>
          </div>
          <div className="form-group mt-2">
            <TextBoxComponent type="number" name="phoneNumber" value={state.phoneNumber} change={update('phoneNumber')} placeholder="Phone Number" floatLabelType="Auto" data-msg-containerid="errroForphoneNumber"/>
            <div id="errroForphoneNumber"/>
          </div>
          <div className="form-group">
              <DatePickerComponent name="flightDate" value={flightDate} change={dateChangeHandler} placeholder="Flighth Date" floatLabelType="Auto" data-msg-containerid="errroForflightDate"/>
              <div id="errroForflightDate"/>
            </div>
        </form>
        <Button 
           color="white"
           bgColor="gray"
           text="Save"
           borderRadius="10px"
           size="md" 
           className="mt-10"
           onClick={onSubmit}
          />
      </div>
    </div>
  </div>
  )
}
export default CreateFlight
