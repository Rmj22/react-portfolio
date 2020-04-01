import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

export class JobTable extends Component {

    render() {
        return (

            <div>


            <h2>FAQ's interview questions out the way so we can have a more productive conversation on the phone</h2>

            <h3>Availibility?</h3>
            <p> Two weeks from when you say that I officially have the job and i've signed the officail paperwork. If I have to 
                fly out to your location please be advised that I have a house that I have to pack up and rent out before I can fly out 
                so lets make it 3 weeks.
            </p>

             <h3>Citizenship Staus</h3>
             <p> US citizen</p>

             <h3>What kind type of employment am I looking for</h3>
             <p>1099 contract work. Why hiring a 1099 would be good for you busniess? You hire me for a specific amount of time to do a certain 
                 task when the task has ended I will move on to another client and wont be a lench on your companies budget. I have done 1099 work
                 for government agencies and it has went really smoothly because all the admin stuff falls on me and I already have it set up.
             </p>
            
            <h3>Why did I leave my last position?</h3>
            <p>Stop being a messy queen this has nothing to do with what I can do for you.</p>

            <h3>Rate Expectation?</h3>
            <p>If the client hasnt seen my resume theres really no reason for us to be worried about this.</p>

            <h3>Why am I in the job market?</h3>
            <p>I'm looking for a job</p>

            <h3>What would I most like to work with</h3>
            <p>Whatever your company is using and paying me to make better or alter in some way</p>
        

            <Table responsiver>
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
</div>
            
        )
    }
}

export default JobTable;