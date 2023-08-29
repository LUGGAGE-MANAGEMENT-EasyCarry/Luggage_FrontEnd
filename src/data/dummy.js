import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import {  BsBoxSeam, BsCurrencyDollar, BsShield} from 'react-icons/bs';
import { BiSolidPlaneAlt,BiSolidShoppingBag } from 'react-icons/bi';
import { RiContactsFill } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';

export const gridLuggageImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.LuggageImage}
      alt="Luggage-item"
    />
  </div>
);

export const gridLuggageState = (props) => (
  <button
    type="button"
    style={{ background: props.StateBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.State}
  </button>
);

const gridFlightDepartureCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.departureLocation}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
    </div>
  </div>
);

const customerGridState = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StateBg }} className="rounded-full h-3 w-3" />
    <p>{props.State}</p>
  </div>
);

export const links = [

  {
    links: [
      {
        name: 'homepage',
        icon: <AiFillHome />,
      },
      {
        name: 'customers',
        icon: <RiContactsFill />,
       
      },
      {
        name: 'flights',
        icon: <BiSolidPlaneAlt />,
      },
      {
        name: 'luggages',
        icon: <BiSolidShoppingBag />,
      },
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    State: 'Active',
    StateBg: '#8BE78B',
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1002,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    CustomerImage:
      avatar3,
    State: 'Active',
    StateBg: '#8BE78B', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    State: 'Pending',
    CustomerImage:
      avatar4,
    StateBg: '#FEC90F', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    State: 'Completed',
    CustomerImage:
      avatar,
    StateBg: '#8BE78B', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1005,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    State: 'Cancel',
    CustomerImage:
      avatar2,
    StateBg: 'red', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    State: 'Active',
    StateBg: '#8BE78B', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1007,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    State: 'Active',
    CustomerImage:
      avatar3,
    StateBg: '#8BE78B', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
  {
    CustomerID: 1008,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    State: 'Pending',
    CustomerImage:
      avatar4,
    StateBg: '#FEC90F', 
    phoneNumber: '5333337765',
    Created_at: '12/04/2023',
  },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },

  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },

  { field: 'CustomerEmail',
    headerText: 'Customer Email',
    width: '150',
    textAlign: 'Center' },

  { field: 'State',
    headerText: 'State',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridState },
  {
    field: 'phoneNumber',
    headerText: 'Phone Number',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },

  { field: 'Created_at',
    headerText: 'Created_at',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const flighData = [
  {
    flightID: 1,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 2,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 3,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 4,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 5,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 6,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
  {
    flightID: 7,
    pnrCode: 'PC3478',
    flightDate: '01/02/2021',
    departureLocation: 'USA',
    phoneNumber: '5336658872',
  },
];

export const flightsGrid = [

  { field: 'pnrCode',
    headerText: 'PNR Code',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Departure Location',
    width: '120',
    textAlign: 'Center',
    template: gridFlightDepartureCountry },

  { field: 'flightDate',
    headerText: 'Flight Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'phoneNumber',
    headerText: 'Phone Number',
    width: '120',
    textAlign: 'Center' },
  { field: 'flightID',
    headerText: 'Flight ID',
    width: '125',
    textAlign: 'Center' },
];

export const luggagesData = [
  {
    CustomerID: 10248,
    CustomerName: 'Vinet',
    flightID: 333,
    LuggageID: 1,
    Weight: '15kg',
    State: 'pending',
    StateBg: '#FB9678',
    LuggageImage:
      product6,
  },
  {
    CustomerID: 345653,
    CustomerName: 'Carson Darrin',
    flightID: 5634,
    LuggageID: 2,
    Weight: '15kg',
    State: 'complete',
    StateBg: '#8BE78B',
    LuggageImage:
      product5,
  },
  {
    CustomerID: 390457,
    CustomerName: 'Fran Perez',
    flightID: 9331, 
    LuggageID: 3,
    Weight: '15kg',
    State: 'active',
    StateBg: '#03C9D7',
    LuggageImage:
      product7,
  },
  {
    CustomerID: 893486,
    CustomerName: 'Anika Viseer',
    flightID: 9331, 
    LuggageID: 3,
    Weight: '15kg',
    State: 'canceled',
    StateBg: '#FF5C8E',
    LuggageImage:
      product4,
  },
  {
    CustomerID: 748975,
    CustomerName: 'Miron Vitold',
    flightID: 2399,
    LuggageID: 3,
    Weight: '15kg',
    State: 'rejected',
    StateBg: 'red',
    LuggageImage:
    product1,
  },
  {
    CustomerID: 94757,
    CustomerName: 'Omar Darobe',
    flightID: 9599,
    LuggageID: 3,
    Weight: '15kg',
    State: 'canceled',
    StateBg: '#FF5C8E',
    LuggageImage:
      product2,
  },
];

export const luggagesGrid = [
  {
    headerText: 'Image',
    template: gridLuggageImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'LuggageID',
    headerText: 'Luggage ID',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'flightID',
    headerText: 'Flight ID',
    textAlign: 'Center',
    width: '150',
  },
  {
    headerText: 'State',
    template: gridLuggageState,
    field: 'State',
    textAlign: 'Center',
    editType: 'dropdownedit',
    width: '120',
  },
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Weight',
    headerText: 'Weight',
    width: '150',
    textAlign: 'Center',
  },
];