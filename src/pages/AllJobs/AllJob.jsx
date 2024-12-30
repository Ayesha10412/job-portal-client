import React, { useState } from "react";
import UseJobs from "../../hooks/UseJobs";
import HotJobCard from "../Home/HotJobCard";
import { div, h2 } from "framer-motion/client";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = UseJobs(sort, search, minSalary, maxSalary);
  if (loading) {
    return <h2>Job is loading....</h2>;
  }
  return (
    <div>
      <div className="w-11/12 mx-auto py-5 p-3 flex items-center gap-5 ">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted by Salary" : "Sort By Salary"}
        </button>

        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input input-bordered w-full max-w-xl "
          placeholder="    Search Jobs by Location"
        />
        <div className="flex  gap-3">
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input input-bordered w-full max-w-xs "
            placeholder="Max Salary"
          />
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input input-bordered w-full max-w-xs "
            placeholder="Min Salary"
          />
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 md:gris-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-10 ">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;
