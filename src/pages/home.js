import React from 'react'
import Stack from 'react-bootstrap/Stack';
import DNavbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";



function Home() {
  return (
    <>
    <Stack gap={2}>
    <DNavbar/>
    <Header/>
    </Stack>
    <Footer/>
    </>
  )
}

export default Home