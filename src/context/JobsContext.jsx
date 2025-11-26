import React, { createContext, useEffect, useState } from "react";

/**
 * JobsContext
 * - stores jobs in state
 * - persists to localStorage under 'trinob_jobs'
 * - exposes async functions: fetchJobs(url), addJob(job), updateJob(id, job), deleteJob(id)
 */

export const JobsContext = createContext();

const LS_KEY = "trinob_jobs_v1";

export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // load from localStorage initially (fallback to bundled initial data)
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        setJobs(JSON.parse(raw));
        return;
      } catch (e) {
        console.warn("Failed to parse jobs in localStorage, clearing", e);
        localStorage.removeItem(LS_KEY);
      }
    }
    // if no localStorage, load bundled default (optional)
    import("../data/jobs.js").then(mod => {
      if (mod && mod.jobs) setJobs(mod.jobs);
    }).catch(e => {
      console.error("Failed to load bundled jobs", e);
    });
  }, []);

  // persist to localStorage whenever jobs change
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(jobs));
    } catch (e) {
      console.warn("Failed to write jobs to localStorage", e);
    }
  }, [jobs]);

  // Fetch jobs from a remote endpoint (replace url or pass null to simulate)
  // Returns a promise that resolves to the fetched job array.
  async function fetchJobs(url) {
    setLoading(true);
    setError(null);
    try {
      let fetched;
      if (!url) {
        // simulate remote fetch with a delay if no url provided
        fetched = await new Promise(resolve => {
          setTimeout(() => resolve(jobs.length ? jobs : []), 500);
        });
      } else {
        const res = await fetch(url, { method: "GET" });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        fetched = await res.json();
      }

      // normalize IDs (ensure numeric or string consistent)
      // you can transform fetched if your API returns different shape
      setJobs(fetched);
      return fetched;
    } catch (err) {
      setError(err.message || String(err));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Add job (returns created job)
  async function addJob(job) {
    setLoading(true);
    setError(null);
    try {
      const newJob = { id: Date.now(), ...job };
      // if you had a server, you'd POST here and use returned resource
      setJobs(prev => {
        const next = [...prev, newJob];
        return next;
      });
      return newJob;
    } catch (err) {
      setError(err.message || String(err));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Update job by id (returns updated job)
  async function updateJob(id, updates) {
    setLoading(true);
    setError(null);
    try {
      let updatedJob = null;
      setJobs(prev => {
        const next = prev.map(j => {
          if (String(j.id) === String(id)) {
            updatedJob = { ...j, ...updates };
            return updatedJob;
          }
          return j;
        });
        return next;
      });
      return updatedJob;
    } catch (err) {
      setError(err.message || String(err));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Delete job by id (returns true)
  async function deleteJob(id) {
    setLoading(true);
    setError(null);
    try {
      setJobs(prev => prev.filter(j => String(j.id) !== String(id)));
      return true;
    } catch (err) {
      setError(err.message || String(err));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const value = {
    jobs,
    loading,
    error,
    fetchJobs,
    addJob,
    updateJob,
    deleteJob,
    // helper quick access
    getJobById: id => jobs.find(j => String(j.id) === String(id))
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}
