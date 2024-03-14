import React, { useState } from "react"
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Our_client from "./components/Our_client.jsx"
import Community from "./components/Community.jsx"
import LearnMore from "./components/LearnMore.jsx"
import LocalBusiness from "./components/LocalBusiness.jsx"
import MeetAllCustomers from "./components/MeetAllCustomers.jsx"
import Marketing from "./components/Marketing.jsx"
import Demo from "./components/Demo.jsx"
import Footer from "./components/Footer.jsx"
// Import Images
import logo from "/src/assets/clientLogo.svg"
import logo2 from "/src/assets/clientLogo-1.svg"
import logo3 from "/src/assets/clientLogo-2.svg"
import logo4 from "/src/assets/clientLogo-3.svg"
import logo5 from "/src/assets/clientLogo-4.svg"
import logo6 from "/src/assets/clientLogo-5.svg"
import logo7 from "/src/assets/clientLogo-6.svg"

function App() {

  // Our client Icon Data
  const iconData = [
    {icon: logo },
    {icon: logo2 },
    {icon: logo3 },
    {icon: logo4 },
    {icon: logo5 },
    {icon: logo6 },
    {icon: logo7 },

  ];
  const [clientValue, setValue] = useState(iconData);

  // Community Cart Data
  const communityData =[
    {icon: '../src/assets/communityIcon.svg', heading: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: '../src/assets/communityIcon-1.svg', heading: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: '../src/assets/communityIcon-2.svg', heading: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments'}
  ];

  const [cartValue, setcartValue] = useState(communityData);

  // Local Business Right Part Data

  const localBusiness = [
    {icon: '../src/assets/businessIcon-1.svg', number: '2,245,341', description: 'Members'},
    {icon: '../src/assets/businessIcon-3.svg', number: '46,328', description: 'Clubs'},
    {icon: '../src/assets/businessIcon-3.svg', number: '828,867', description: 'Event Bookings'},
    {icon: '../src/assets/businessIcon-4.svg', number: '1,926,436', description: 'Payments'},
  ];

  const [businessValue, setBusinessValue] = useState(localBusiness);

  // Learn More Data
  const learnMoreData = [
      {image: '../src/assets/frame.svg', heading: 'The unseen of spending three years at Pixelgrade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'},
      {image: '../src/assets/password.svg', heading: 'How to design your site footer like we did', description: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'},
  ]
  
  // Meet All Customers Data
  const meetAllCustomers = [
    {icon: '../src/assets/clientLogo.svg' },
    {icon: '../src/assets/clientLogo-1.svg' },
    {icon: '../src/assets/clientLogo-2.svg' },
    {icon: '../src/assets/clientLogo-3.svg' },
    {icon: '../src/assets/clientLogo-4.svg' },
    {icon: '../src/assets/clientLogo-5.svg' },
  ];

  const [meetCustomers, setMeetCustomersValue] = useState(meetAllCustomers);
  
  // Marketing data
  const marketing = [
    {image: 'https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description:'Creating Streamlined Safeguarding Processes with OneRen'},
    {image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description:'What are your safeguarding responsibilities and how can you manage them?'},
    {image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description:'Revamping the Membership Model with Triathlon Australia'},
  ]

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <Nav />
      <Hero />
      <Our_client value={clientValue} />
      <Community value = {cartValue} />
      <LearnMore value ={learnMoreData[0]} />
      <LocalBusiness value={businessValue} />
      <LearnMore value ={learnMoreData[1]} />
      <MeetAllCustomers value ={meetCustomers} />
      <Marketing value={marketing}/>
      <Demo />
      <Footer />
    </div>
  )
};

export default App
