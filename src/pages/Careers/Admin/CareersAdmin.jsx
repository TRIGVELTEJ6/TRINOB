// import React, { useContext, useState, useRef } from "react";
// import PageWrapper from "../../../components/PageWrapper.jsx";
// import FormInput from "../../../components/FormInput.jsx";
// import { JobsContext } from "../../../context/JobsContext.jsx";

// export default function Admin(){
//   const { jobs, addJob, updateJob, deleteJob } = useContext(JobsContext);
//   const [editingId, setEditingId] = useState(null);
//   const [form, setForm] = useState({ title: "", location: "", description: "" });
//   const editRef = useRef(null);

//   const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   async function handleAdd(e){
//     e.preventDefault();
//     try {
//       const created = await addJob(form);
//       setForm({ title: "", location: "", description: "" });
//       // scroll to bottom / the new job: we can wait a tick then scroll
//       setTimeout(() => {
//         const el = document.querySelector(`[data-job-id="${created.id}"]`);
//         el?.scrollIntoView({ behavior: "smooth", block: "center" });
//       }, 80);
//     } catch(err) {
//       alert("Add failed: " + (err.message || err));
//     }
//   }

//   function handleEdit(job){
//     setEditingId(job.id);
//     setForm({ title: job.title, location: job.location, description: job.description });
//     setTimeout(() => editRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
//   }

//   async function handleUpdate(e){
//     e.preventDefault();
//     try {
//       await updateJob(editingId, form);
//       setEditingId(null);
//       setForm({ title: "", location: "", description: "" });
//     } catch(err) {
//       alert("Update failed: " + (err.message || err));
//     }
//   }

//   async function handleDelete(id){
//     if(!confirm("Delete this job?")) return;
//     try {
//       await deleteJob(id);
//     } catch(err) {
//       alert("Delete failed: " + (err.message || err));
//     }
//   }

//   return (
//     <PageWrapper bgColor="#f7eefc" heading="Admin — Manage Jobs">
//       <div style={{ maxWidth: 700 }}>
//         <form ref={editRef} onSubmit={editingId ? handleUpdate : handleAdd} className="card" style={{ marginBottom: 16 }}>
//           <FormInput label="Job Title" name="title" value={form.title} onChange={onChange} required />
//           <FormInput label="Location" name="location" value={form.location} onChange={onChange} required />
//           <FormInput label="Description" name="description" value={form.description} onChange={onChange} required textarea />
//           <div style={{ display: "flex", gap: 8 }}>
//             <button className="header-cta" type="submit">{editingId ? "Update Job" : "Add Job"}</button>
//             {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: "", location: "", description: "" }); }}>Cancel</button>}
//           </div>
//         </form>

//         <div>
//           {jobs.length === 0 ? <p>No jobs yet.</p> : jobs.map(job => (
//             <div key={job.id} data-job-id={job.id} className="card" style={{ marginBottom: 12 }}>
//               <h3 style={{ margin: 0 }}>{job.title}</h3>
//               <div className="small-muted" style={{ marginTop: 6 }}>{job.location}</div>
//               <p style={{ marginTop: 10 }}>{job.description}</p>
//               <div style={{ display: "flex", gap: 8 }}>
//                 <button onClick={() => handleEdit(job)}>Edit</button>
//                 <button onClick={() => handleDelete(job.id)} style={{ background: "#ef4444", color: "white", border: "none", padding: "8px 10px", borderRadius: 6 }}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </PageWrapper>
//   );
// }


import React, { useState, useRef } from "react";
import PageWrapper from "../../../components/PageWrapper";
import { getJobs, addJob, updateJob, deleteJob } from "../../../data/jobs";

export default function CareersAdmin() {
  const [jobs, setJobs] = useState(getJobs());
  const [form, setForm] = useState({ title: "", location: "", description: "" });
  const [editId, setEditId] = useState(null);
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if(editId) updateJob(editId, form);
    else addJob(form);
    setJobs(getJobs());
    setForm({ title: "", location: "", description: "" });
    setEditId(null);
  };

  const handleEdit = job => {
    setForm({ title: job.title, location: job.location, description: job.description });
    setEditId(job.id);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = id => {
    deleteJob(id);
    setJobs(getJobs());
  };

  return (
    <PageWrapper bgColor="#fef3c7">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input placeholder="Job Title" value={form.title} onChange={e => setForm({...form, title:e.target.value})} required />
        <input placeholder="Location" value={form.location} onChange={e => setForm({...form, location:e.target.value})} required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description:e.target.value})} required />
        <button type="submit">{editId ? "Update Job" : "Add Job"}</button>
      </form>
      <hr style={{ margin: "24px 0" }} />
      {jobs.map(job => (
        <div key={job.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div><strong>{job.title}</strong> ({job.location})</div>
          <div>
            <button onClick={() => handleEdit(job)}>Edit</button>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </div>
        </div>
      ))}
    </PageWrapper>
  );
}
