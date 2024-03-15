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

function App() {

  // Our client Icon Data
  const iconData = [
    {icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIkA4MzoSvjMQv4YkwqHtVoFyH3y_uMSIZKP4GtS4qw&s' },
    {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpheP2yhGJ8qnVJXS7ddFv7p9o6ZfWYsN2eR87YdZjYnwlIyNs2Ut1IiX_lBsI_M59t84&usqp=CAU' },
    {icon: 'https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png' },
    {icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png' },
    {icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png' },
    {icon: 'data:image/png;base64,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' },

  ];
  const [clientValue, setValue] = useState(iconData);

  // Community Cart Data
  const communityData =[
    {icon: 'https://static.thenounproject.com/png/3265979-200.png', heading: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: 'https://cdn-icons-png.flaticon.com/512/24/24914.png', heading: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments'},
    {icon: 'https://cdn-icons-png.flaticon.com/512/3562/3562049.png', heading: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments'}
  ];

  const [cartValue, setcartValue] = useState(communityData);

  // Local Business Right Part Data

  const localBusiness = [
    {icon: 'https://static.thenounproject.com/png/3265979-200.png', number: '2,245,341', description: 'Members'},
    {icon: 'https://cdn-icons-png.flaticon.com/512/3990/3990972.png', number: '46,328', description: 'Clubs'},
    {icon: 'https://cdn-icons-png.flaticon.com/512/3995/3995725.png', number: '828,867', description: 'Event Bookings'},
    {icon: 'https://cdn-icons-png.flaticon.com/512/69/69024.png', number: '1,926,436', description: 'Payments'},
  ];

  const [businessValue, setBusinessValue] = useState(localBusiness);

  // Learn More Data
  const learnMoreData = [
      {image: 'https://i.pinimg.com/564x/be/0f/b1/be0fb11e5a4caa5493c0080b66656cdf.jpg', heading: 'The unseen of spending three years at Pixelgrade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'},
      {image: 'https://i.pinimg.com/564x/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.jpg', heading: 'How to design your site footer like we did', description: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'},
  ]
  
  // Meet All Customers Data
  const meetAllCustomers = [
    {icon: 'https://static.thenounproject.com/png/3265979-200.png' },
    {icon: 'https://cdn-icons-png.flaticon.com/512/24/24914.png' },
    {icon: 'https://cdn-icons-png.flaticon.com/512/3562/3562049.png' },
    {icon: 'https://cdn-icons-png.flaticon.com/512/69/69024.png' },
    {icon: 'https://cdn-icons-png.flaticon.com/512/2618/2618145.png' },
    {icon: 'https://cdn-icons-png.flaticon.com/512/3995/3995725.png' },
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
