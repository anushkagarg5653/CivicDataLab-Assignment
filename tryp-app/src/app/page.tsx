import React from 'react'
import DataTable  from './DataTable'

const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];
const rows = [
  {
    timestamp: '2023-07-15 10:30', purchaseId: 1, mail: 'example@example.com', name: 'Anushka Garg', source: 'Web', status:'Completed'
  },
];

export default function Home() {
  return (
    <>
    <DataTable headers={headers} rows= {rows} sorting={true} pagination={true} caption='Bookings'/>
    </>
  )
}
