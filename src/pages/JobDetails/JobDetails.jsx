import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline } = useLoaderData();

  return (
    <div>
      <h2>Job details for {title} </h2>
      <p>Apply for: {company} </p>
      <p>Deadline: {deadline} </p>
      <Link to={`/jobApply/${_id}`} className="btn btn-primary">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
