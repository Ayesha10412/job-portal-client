import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAUth from "../../hooks/UseAUth";

const AddJob = () => {
  const { user } = UseAUth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myApplications");
      });
  };
  return (
    <div className="w-full mx-auto p-12">
      <h2 className="text-3xl font-bold">Add a new job</h2>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              placeholder="Job Location"
              name="location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick a job type
              </option>
              <option>Full-Time</option>
              <option>Intern</option>
              <option>Part-Time</option>
            </select>
          </div>
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick a job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* salary range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                placeholder="Max"
                name="max"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                placeholder="Min"
                name="min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-ghost w-full max-w-xs"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
              name="description"
            ></textarea>
          </div>
          {/* company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              className="input input-bordered"
              required
            />
          </div>
          {/* job requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="Put each requirements in a new line"
              name="requirements"
            ></textarea>
          </div>
          {/* responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="Put each responsibilities in a new line"
              name="responsibilities"
            ></textarea>
          </div>
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit btn */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
