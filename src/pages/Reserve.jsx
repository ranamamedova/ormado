import React from 'react';
import { useFormik } from 'formik';
import BreadCrumb from '../pages/BreadCrumb';
import { Link } from 'react-router-dom';

const initialValues = {
  name: '',
  emailOrPhone: '',
  person: '',
  date: '',
  time: '',
  branch: '',
  remarks: ''
};

const Reserve = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      const isFormValid = Object.keys(formik.errors).length === 0;

      if (isFormValid) {
        localStorage.setItem('reservationData', JSON.stringify(values));
        console.log(values);
        resetForm();

        alert('Thank you! Your reservation has been submitted.');
      } else {
       
        alert('Please fill in all required fields.');
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Fill input';
      }
      if (!values.emailOrPhone) {
        errors.emailOrPhone = 'Fill input';
      }
      if (!values.phone) {
        errors.phone = 'Fill input';
      }
      if (!values.person) {
        errors.person = 'Fill input';
      }
      if (!values.date) {
        errors.date = 'Fill input';
      }
      if (!values.time) {
        errors.time = 'Fill input';
      }
      if (!values.branch) {
        errors.branch = 'Fill input';
      }
      

      return errors;
    }
  });


  return (
    <>
     <BreadCrumb title="Reserve" isOtherPage={true} />
      <div className="reserve my-5">
        <div className="row ">
          <div className="reserve-style col-12 col-sm-12 col-md-6 order-md-1 order-2">
          <div className="signImg">
                  <img src="https://ormado.webluna.org/cdn/img/login.png" alt="" className="img-fluid" />
                  <div className="logoTitle ">
                    <div className="logoImg">
                      <Link to="/">
                        <img src="https://ormado.webluna.org/cdn/img/logo.png" alt="" className="mt-3 mb-5" />
                      </Link>
                    </div>
                    <h2>WELCOME TO ORMADO KAFFEEHAUS</h2>
                  </div>
                </div>
          </div>
          <div className="reserve-form-tabel col-12 col-sm-12 col-md-6 order-md-2 order-1 my-3">
            <div className="unicorn ms-2">
              <div className="reserve-form  ">
                <form onSubmit={formik.handleSubmit}>
                  <p className="heading mt-5">Reserve a table</p>
                  <p>Full name</p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="error">{formik.errors.name}</p>
                  )}

                  <p>Email or phone number</p>
                  <input
                    type="text"
                    placeholder="Type your e-mail or phone number"
                    name="emailOrPhone"
                    value={formik.values.emailOrPhone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                    <p className="error">{formik.errors.emailOrPhone}</p>
                  )}

                  <p>Phone number</p>
                  <input
                    type="number"
                    placeholder="Enter your phone"
                    name="phone"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="error">{formik.errors.phone}</p>
                  )}

                  <p>Number of guests</p>
                  <input
                    type="number"
                    placeholder="6-7"
                    min={1}
                    max={7}
                    name="person"
                    value={formik.values.person}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.person && formik.errors.person && (
                    <p className="error">{formik.errors.person}</p>
                  )}

                  <p>Date</p>
                  <input
                    type="date"
                    placeholder="Choose date"
                    name="date"
                    value={formik.values.date}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.date && formik.errors.date && (
                    <p className="error">{formik.errors.date}</p>
                  )}

                  <p>Time</p>
                  <input
                    type="time"
                    placeholder="00:00"
                    name="time"
                    value={formik.values.time}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.time && formik.errors.time && (
                    <p className="error">{formik.errors.time}</p>
                  )}

                  <p>Branch</p>
                  <select
                    id="branch"
                    name="branch"
                    value={formik.values.branch}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  >
                    <option value="Ormado Kaffeehaus Berlin | Einbecker">Ormado Kaffeehaus Berlin | Einbecker</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                  {formik.touched.branch && formik.errors.branch && (
                    <p className="error">{formik.errors.branch}</p>
                  )}

                  <p>Additional remarks</p>
                  <input
                    type="text"
                    placeholder="Enter additional remarks"
                    name="remarks"
                    value={formik.values.remarks}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.remarks && formik.errors.remarks && (
                    <p className="error">{formik.errors.remarks}</p>
                  )}

                  <div className="radio d-flex my-3">
                    <div className="step ">
                      <input type="radio" name="" id="" />
                      <p>The purpose of the meeting</p>
                    </div>
                    <div className="step">
                      <input type="radio" name="" id="" />
                      <p>For a meeting with friends</p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="coffee d-flex "
                    onClick={formik.handleSubmit}
                  >
                     <img src='https://ormado-demo.webluna.space/cdn/img/Vector%201.png' alt="" />
                  <img src='https://ormado-demo.webluna.space/cdn/img/Vector%201.png' alt="" />
                  <p>Reserve</p>
                  <img src='https://ormado-demo.webluna.space/cdn/img/Vector%203.png' alt="" />
                  <img src='https://ormado-demo.webluna.space/cdn/img/Vector%204.png' alt="" />
                    
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;