import React, { useState } from "react";
import UseJobs from "../../hooks/UseJobs";
import HotJobCard from "../Home/HotJobCard";
import { div, h2 } from "framer-motion/client";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const { jobs, loading } = UseJobs(sort);
  if (loading) {
    return <h2>Job is loading....</h2>;
  }
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted by Salary" : "Sort By Salary"}
        </button>
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
