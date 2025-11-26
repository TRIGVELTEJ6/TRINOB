// import React, { useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import PageWrapper from "../../../components/PageWrapper.jsx";
// import FormInput from "../../../components/FormInput.jsx";
// import { JobsContext } from "../../../context/JobsContext.jsx";

// export default function JobApplication(){
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { jobs } = useContext(JobsContext);
//   const job = jobs.find(j => String(j.id) === String(id));
// //   const [form, setForm] = useState({ name: "", email: "", resume: "" });

// //   if (!job) return <PageWrapper><p>Job not found</p></PageWrapper>;

// //   const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //   const onSubmit = e => {
// //     e.preventDefault();
// //     alert(`Application submitted for ${job.title} — ${form.name}`);
// //     navigate("/careers");
// //   };

// //   return (
// //     <PageWrapper bgColor="#fffaf0" heading={`Apply for ${job.title}`}>
// //       <form onSubmit={onSubmit} style={{ maxWidth: 560 }}>
// //         <FormInput label="Full name" name="name" value={form.name} onChange={onChange} required />
// //         <FormInput label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
// //         <FormInput label="Resume (paste or link)" name="resume" value={form.resume} onChange={onChange} required textarea />
// //         <button className="header-cta" type="submit">Submit Application</button>
// //       </form>
// //     </PageWrapper>
// //   );
// // }


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../../components/PageWrapper";
import { getJobs } from "../../../data/jobs";

export default function JobApplication() {
  const { id } = useParams();
  const job = getJobs().find(j => j.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", resume: "" });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Application submitted for ${job.title} by ${form.name}`);
    setForm({ name: "", email: "", resume: "" });
  };

  return (
    <PageWrapper bgColor="#f9fafb">
      <h2>Apply for {job?.title}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <textarea placeholder="Paste Resume Here" value={form.resume} onChange={e => setForm({...form, resume: e.target.value})} required />
        <button type="submit">Submit Application</button>
      </form>
    </PageWrapper>
  );
}
