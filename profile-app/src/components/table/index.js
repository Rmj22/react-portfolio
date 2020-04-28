import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import './style.css'

export class JobTable extends Component {

    render() {
        return (

            <div className="faq">
<Container className="table" >
  <div className="content">
  <h3 className="title" >FAQ Pre-screen Questions</h3>
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
      <td className="item">I cant start as soon as possible.</td>
    </tr>
    <tr>
      <td className="item">Citizenship Status?</td>
      <td className="item">US Citizen</td>
      
    </tr>
    <tr>
      <td className="item">What kind type of employment am I looking for?</td>
      <td className="item">Contract, I dont want to be a drain on your companies budget.</td>
    </tr>
    <tr>
      <td className="item">Why did I leave my last position?</td>
      <td className="item">The contract ended.</td>
    </tr>
    <tr>
      <td className="item">Why am I in the job market?</td>
      <td className="item">I'm looking for a position where I can exspand on my MERN capabilities.</td>
    </tr>
    <tr>
      <td className="item">What would I most like to work with?</td>
      <td className="item">MongoDB, React,SharePoint Node and MySQL</td>

    </tr>
  </tbody>
</Table>
</div>
</Container>



 <Container className="table">
 <div className="content">
   <h3 className="title">Location Preference</h3>  
 <Table bordered>
  <thead>
    <tr>
      <th className="header">Location</th>
      <th className="header">Position Type</th>
      <th className="header">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="item">Chicago</td>
      <td className="item">Full Stack Developer</td>
      <td className="item">Great city with tons to do</td>
    </tr>
    <tr>
      <td className="item">Baltimore MD</td>
      <td className="item">Full Stack Developer</td>
      <td className="item">Baltimore is where I live and would like to work right in the city to save on gas and time in traffic. Please note that this says 
          Baltimore and not the washington area, I'm sorry but I will not be taking anymore positions in the DC and Va area the traffic is a nightmare
          and I turn in to a horrible person.
      </td>
    </tr>
    <tr>
      <td className="item">Bosie, ID</td>
      <td className="item">Database Developer/Full Stack</td>
      <td className="item">My wife is from Idaho, Bosie or northern Idaho close to the clarkston area would be ideal but Bosie is still close enough</td>
    </tr>
    <tr>
      <td className="item">Minnieapolis/Saint Paul</td>
      <td className="item">Full Stack Developer</td>
      <td className="item">We have family in this area as well and its a very healthy city. One year they beat my hometown of Arlington Va for that title.</td>
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