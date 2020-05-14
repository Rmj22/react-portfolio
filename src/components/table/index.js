import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import TopNav from '../navbar'
import Container from 'react-bootstrap/Container'
import '../table/style.css'

export class JobTable extends Component {

    render() {
        return (

            <div className="faq">
              <TopNav />
<Container className="table" >
  <div className="content">
  <h3 className="title" >Pre-screen Questions</h3>
<Table bordered>
  <thead>
    <tr>
      <th className="header">Question</th>
      <th className="header">Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="item">Availibility?</td>
      <td className="item">I can start as soon as possible.</td>
    </tr>
    <tr>
      <td className="item">Willing to relocate?</td>
      <td className="item">Yes</td>
      
    </tr>
    <tr>
      <td className="item">Citizenship Status?</td>
      <td className="item">US Citizen</td>
      
    </tr>
    <tr>
      <td className="item">What kind type of employment am I looking for?</td>
      <td className="item">Contract or Full-Time</td>
    </tr>
    <tr>
      <td className="item">Why did I leave my last position?</td>
      <td className="item">The contract ended.</td>
    </tr>
    <tr>
      <td className="item">Why am I in the job market?</td>
      <td className="item">I'm looking for a position where I can expand on my MERN capabilities.</td>
    </tr>
    <tr>
      <td className="item">What would I most like to work with?</td>
      <td className="item">MongoDB, React,SharePoint Node and MySQL</td>

    </tr>
  </tbody>
</Table>
</div>
</Container>

</div>


            
        )
    }
}

export default JobTable;