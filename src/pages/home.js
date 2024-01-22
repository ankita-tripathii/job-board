import React from 'react'
import Stack from 'react-bootstrap/Stack';
import DNavbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Joblist from "../components/jobList/jobList";
import Footer from "../components/footer/footer";



function Home() {
  return (
    <>
    <Stack gap={2}>
    <DNavbar/>
    <Header/>
    <Joblist/>
    <Footer/>
    </Stack>
    </>
  )
}

export default Home