let jobs = [
  { id: 1, title: "Frontend Developer", location: "Remote", description: "React, JS, CSS" },
  { id: 2, title: "Backend Developer", location: "Remote", description: "Node.js, Express, MongoDB" },
];

export const getJobs = () => [...jobs];

export const addJob = (job) => { jobs.push({ id: Date.now(), ...job }); };

export const updateJob = (id, updatedJob) => {
  jobs = jobs.map(job => job.id === id ? { ...job, ...updatedJob } : job);
};

export const deleteJob = (id) => {
  jobs = jobs.filter(job => job.id !== id);
};
