import React from "react";
import "./style.css";
import Photo from "./images/Photo.jpg";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import logo from "./images/logo.png";

function Pricing() {
  return (
    <div>
      {/* navbar */}

      <div className="container-fulid  mb-5">
        <div className="navbar d-flex justify-content-between">
          <ul className="nav">
            <li className="nav-link">
              <img src={logo} className="image-navbar" width={40} alt="logo" />
            </li>
            <li className="nav-link  ">
              <i className="bi bi-list  " style={{ fontSize: "30px" }}></i>
            </li>
            <li className="nav-link">
              <h3 className="navar-text">Dreams Technologies</h3>
            </li>
          </ul>
          <ul className="nav justify-content-center align-items-center">
            <li className="nav-link navar-text-list">
              <Form action="#" method="post" className="searchbar">
                <input
                  id="name3"
                  type="text"
                  name="search-queary"
                  placeholder="search here"
                  className="search"
                ></input>
                <button type="submit" className="searchbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </Form>
            </li>

            <span className="fi fi-gr fis"></span>

            <NavDropdown className="navar-text" title="English" text="white">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">kannada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">hindi</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-link navar-text-list">
              <i className="bi bi-bell"></i>
            </li>
            <li className="nav-link navar-text-list ">
              <i className="bi bi-chat"></i>
            </li>

            <img
              className="image-body rounded-pill mt-2"
              src={Photo}
              alt="profile"
              width={40}
              height={40}
            />

            <NavDropdown
              className="navar-text text-center"
              title="admin"
              text="white"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Dashboard
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>

      {/* Header */}
      <div data-new-gr-c-s-check-loaded="14.1144.0" data-gr-ext-installed="">
        <div className="container-fluid d-flex justify-content-between mb-4 ">
          <div>
            <h4>Subscription </h4>
            <span>
              dashboard <span className="text-danger">/subscriptions</span>
            </span>
          </div>
          <button
            className="btn btn-warning rounded-pill float-end "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus-lg"> </i> Add Subscription
          </button>
        </div>

        <div className="text-center mb-5 ">
          <button className="btn btn-outline-secondary">Monthly Plan</button>
          <button className="btn btn-secondary">Anuual Plan </button>
        </div>
        <div className="container py-3">
          {/* <!-- Modal --> */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body  lh-1.5">
                  <h5
                    className="modal-title text-center mt-4 mb-4"
                    id="exampleModalLabel"
                  >
                    Add plan
                  </h5>
                  <Form>
                    <div className="row gy-3">
                      <div className="col-6">
                        <label>Plan Name</label>
                        <input
                          name="text"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Free trial"
                        />
                      </div>
                      <div className="col-6">
                        <label>Plan Amount</label>
                        <input
                          id="name1"
                          name="text"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Plan Type</label>
                        <select id="inputState" className="form-select">
                          <option> Monthly</option>
                          <option>June</option>
                          <option>July</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label>No of Users</label>
                        <select id="inputState" className="form-select">
                          <option> 5 Users</option>
                          <option>6 Users</option>
                          <option>8 Users</option>
                          <option>10 Users</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label>No of Projects</label>
                        <select id="inputState" className="form-select">
                          <option> 5 Projects</option>
                          <option> 8 Projects</option>
                          <option> 10 Projects</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label> No of Storage Space</label>
                        <select id="inputState" className="form-select">
                          <option> 5 GB</option>
                          <option>8 GB</option>
                          <option>10 GB</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Plan Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <div className="form-check form-switch ">
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Status
                        </label>
                        <br />
                        <input
                          className="form-check-input "
                          type="checkbox"
                          name="name4"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg w-50 rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <main>
            {/* Pricing */}

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title  text-center">Free</h4>
                    <h3 className=" text-center mb-5">$0</h3>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>
                      <strong>1 User</strong>
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i> 5 Projects
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>5 GB
                      Storage
                    </p>

                    <div className="d-grid gap-2 mb-4 ">
                      <button
                        className="btn btn-secondary div-btn1 "
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title text-center">Professional</h4>
                    <h3 className="card-title text-center mb-5">$199/mo</h3>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>
                      <strong>30 User</strong>{" "}
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i> 50
                      Projects
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>100 GB
                      Storage
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>Unlimited
                      Message
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>24/7
                      Customer Support
                    </p>

                    <div className="d-grid gap-2 mb-4 ">
                      <button
                        className="btn btn-secondary div-btn2 "
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm ">
                  <div className="card-body">
                    <h4 className=" text-center ">Enterprise</h4>
                    <h3 className=" text-center mb-5">$399/mo</h3>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>
                      <strong>Unlimited User</strong>
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i> Unlimited
                      Projects
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>500 GB
                      Storage
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>Unlimited
                      Message
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>Voice and
                      Video Call
                    </p>
                    <p>
                      <i className="bi bi-check-lg text-success"></i>24/7
                      Customer Support
                    </p>
                    <div className="d-grid gap-2 mb-4 ">
                      <button
                        className="btn btn-secondary div-btn3"
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}

            <div className="card border-0">
              <div className="card-body">
                <h2 className="fs-2 border-bottom bg-light ">Plan Details</h2>

                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">
                        Plan <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                      <th scope="col">
                        Plan Type{" "}
                        <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                      <th scope="col">
                        Create Date{" "}
                        <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                      <th scope="col">
                        Modified Date{" "}
                        <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                      <th scope="col">
                        Amount <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                      <th scope="col">
                        {" "}
                        Subscribed Users{" "}
                        <i className="bi bi-arrow-down text-dark "></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Free Trial</td>
                      <td>Yearly</td>
                      <td>9 Nov 2023</td>
                      <td>8 Dec 2023</td>
                      <td>Free</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          157 User
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Professional</td>
                      <td>Yearly</td>
                      <td>9 Nov 2023</td>
                      <td>8 Dec 2023</td>
                      <td>$199</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          157 User
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>Enterprise</td>
                      <td>Yearly</td>
                      <td>9 Nov 2023</td>
                      <td>8 Dec 2023</td>
                      <td>$199</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          157 User
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
