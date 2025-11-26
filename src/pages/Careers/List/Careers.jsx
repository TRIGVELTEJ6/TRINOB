// import React, { useContext } from "react";
// import PageWrapper from "../../../components/PageWrapper.jsx";
// import JobCard from "../../../components/JobCard.jsx";
// import { JobsContext } from "../../../context/JobsContext.jsx";

// export default function Careers(){
//   const { jobs } = useContext(JobsContext);
//   return (
//     <PageWrapper bgColor="#eef7ff" heading="Open Positions">
//       {jobs.length === 0 ? <p>No open positions right now.</p> : jobs.map(j => <JobCard key={j.id} job={j} />)}
//     </PageWrapper>
//   );
// }

import React from "react";
import PageWrapper from "../../../components/PageWrapper";
import JobCard from "../../../components/JobCard";
import { getJobs } from "../../../data/jobs.js";
import { useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();
  const jobs = getJobs();

  return (
    <PageWrapper bgColor="#f3f4f6" bgImage="/images/careers-bg.jpg">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onClick={() => navigate(`/careers/apply/${job.id}`)} />
      ))}
    </PageWrapper>
  );
}
