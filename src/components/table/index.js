import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

export class JobTable extends Component {

    render() {
        return (

            <div>
 <Container>
   <h3>Location Preference</h3>  
 <Table bordered>
  <thead>
    <tr>
      <th>Location</th>
      <th>Position Type</th>
      <th>Title</th>
      <th>Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Maine</td>
      <td>Full Time</td>
      <td>MERN developer</td>
      <td>Maine is very beautiful and we would consider making this our home.</td>
    </tr>
    <tr>
      <td>Baltimore,MD</td>
      <td>Full Time </td>
      <td>MERN Developer</td>
      <td>Not Dc, Southern Md or Va just good old Baltimore city, where I currently live.
      </td>
    </tr>
    <tr>
      <td>Washington(Pullman/Clarkston area)</td>
      <td>Full Time</td>
      <td>MERN Developer</td>
      <td>My wife is from Idaho and would love to move back.</td>
    </tr>
    <tr>
      <td>Minnieapolis/Saint Paul</td>
      <td>Contract</td>
      <td>MERN Developer</td>
      <td>We have family in the area and would like to see them alittle bit more then we currently do.</td>
    </tr>
  </tbody>
</Table>
</Container>
<Container id="faq">
  <h3>FAQ Pre-screen Questions</h3>
<Table bordered>
  <thead>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Availibility?</td>
      <td>I cant start as soon as possible.</td>
    </tr>
    <tr>
      <td>Citizenship Status?</td>
      <td>US Citizen</td>
      
    </tr>
    <tr>
      <td>What kind type of employment am I looking for?</td>
      <td>Contract, I dont want to be a drain on your companies budget.</td>
    </tr>
    <tr>
      <td>Why did I leave my last position?</td>
      <td>The contract ended.</td>
    </tr>
    <tr>
      <td>Why am I in the job market?</td>
      <td>I'm looking for a position where I can exspand on my MERN capabilities.</td>
    </tr>
    <tr>
      <td>What would I most like to work with?</td>
      <td>MongoDB, React,SharePoint Node and MySQL</td>

    </tr>
  </tbody>
</Table>
</Container>


</div>


            
        )
    }
}

export default JobTable;