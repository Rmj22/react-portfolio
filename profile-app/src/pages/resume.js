import React from'react'
import JobTable from '../components/table'
import '../pages/About.css'
import TopNav from '../components/navbar';

function Resume() {
    return (
      <div className="pages">
        <TopNav />
        <JobTable />
      </div>
    )
  }
  
  export default Resume;
  