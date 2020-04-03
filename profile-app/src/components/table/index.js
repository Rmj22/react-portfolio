import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

export class JobTable extends Component {

    render() {
        return (

            <div>
<Container id="faq">
  <h3>FAQ Pre-screen Questions</h3>
<Table responsiver>
  <thead>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Availibility?</td>
      <td>Two weeks from when you say that I officially have the job and i've signed the officail paperwork. If I have to 
                fly out to your location please be advised that I have a house that I have to pack up and rent out before I can fly out 
                so lets make it 3 weeks.</td>
    </tr>
    <tr>
      <td>Citizenship Status?</td>
      <td>US Citizen</td>
      
    </tr>
    <tr>
      <td>What kind type of employment am I looking for?</td>
      <td>1099 contract work. Why hiring a 1099 would be good for you busniess? You hire me for a specific amount of time to do a certain 
                 task when the task has ended I will move on to another client and wont be a lench on your companies budget. I have done 1099 work
                 for government agencies and it has went really smoothly because all the admin stuff falls on me and I already have it set up.</td>
    </tr>
    <tr>
      <td>Why did I leave my last position?</td>
      <td>Stop being a messy queen this has nothing to do with what I can do for you.</td>
    </tr>
    <tr>
      <td>Why am I in the job market?</td>
      <td>I'm looking for a job</td>
    </tr>
    <tr>
      <td>What would I most like to work with?</td>
      <td>Whatever your company is using and paying me to make better or alter in some way</td>

    </tr>
  </tbody>
</Table>
</Container>



 <Container>
   <h3>Location Preference</h3>  
 <Table bordered>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Location</th>
      <th>Position Type</th>
      <th>Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Chicago</td>
      <td>Full Stack Developer</td>
      <td>Great city with tons to do</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Baltimore MD</td>
      <td>Full Stack Developer</td>
      <td>Baltimore is where I live and would like to work right in the city to save on gas and time in traffic. Please note that this says 
          Baltimore and not the washington area, I'm sorry but I will not be taking anymore positions in the DC and Va area the traffic is a nightmare
          and I turn in to a horrible person.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bosie, ID</td>
      <td>Database Developer/Full Stack</td>
      <td>My wife is from Idaho, Bosie or northern Idaho close to the clarkston area would be ideal but Bosie is still close enough</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Minnieapolis/Saint Paul</td>
      <td>Full Stack Developer</td>
      <td>We have family in this area as well and its a very healthy city. One year they beat my hometown of Arlington Va for that title.</td>
    </tr>
  </tbody>
</Table>
</Container>
</div>
            
        )
    }
}

export default JobTable;