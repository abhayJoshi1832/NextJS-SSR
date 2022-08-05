import React from 'react';
import Table from '../components/Table';



function Page({data}) {

    //console.log('data inside page: ', data );
  return (
    <div>
        <Table data= {data}></Table>
    </div>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/loans')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }


export default Page