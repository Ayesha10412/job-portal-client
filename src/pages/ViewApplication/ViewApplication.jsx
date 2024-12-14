import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data);
    });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">
        View Application:{applications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              {/* <th>Status</th> */}
              <th> Update Status</th>
              {/* <th> Applications</th> */}
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>
                  {/* xs */}
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled selected>
                      Change Status
                    </option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
                {/* <td>{job.applicationCount}</td> */}
                {/* <td>
                  <Link
                    to={`/viewApplications/${job._id}`}
                    className="btn btn-link"
                  >
                    View Applications
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
