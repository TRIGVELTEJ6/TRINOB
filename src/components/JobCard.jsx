import React from "react";
import { Link } from "react-router-dom";

// export default function JobCard({ job }) {
//   return (
//     <div className="card" style={{ marginBottom: 16 }}>
//       <h3 style={{ margin: 0 }}>{job.title}</h3>
//       <div className="small-muted" style={{ marginTop: 6 }}>{job.location}</div>
//       <p style={{ marginTop: 12 }}>{job.description}</p>
//       <div style={{ display: "flex", gap: 8 }}>
//         <Link to={`/careers/apply/${job.id}`}><button className="header-cta">Apply</button></Link>
//       </div>
//     </div>
//   );
// }

// import React from "react";
import { motion } from "framer-motion";

export default function JobCard({ job, onClick }) {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      initial={{ opacity: 0, y: 10, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{job.title}</h3>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </motion.div>
  );
}
