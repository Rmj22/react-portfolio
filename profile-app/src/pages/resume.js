import React from'react'
import JobTable from '../components/Table'
import '../pages/About.css'
import TopNav from '../components/Navbar';

function Resume() {
    return (
      <div className="pages">
        <TopNav />
        <JobTable />
      </div>
    )
  }
  
  export default Resume;
  