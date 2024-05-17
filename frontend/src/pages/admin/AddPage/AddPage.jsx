import React from "react";
import { useContext } from 'react';
import MainContext from '../../../context/context'

import "./AddPage.css";
import { Formik } from "formik";
import axios from "axios";
import Table from "../../../components/admin/Table/Table";
const AddPage = () => {
    const { data, setData } = useContext(MainContext);
  return (
    <div className="add-page-sect">
      <Formik
        initialValues={{ image: "", ingredients: "", name: "", price: "" }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:8080/api/products",values).then((res) => {
            setData([...res.data]);
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="image..."
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              placeholder="ingredients..."
              name="ingredients"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ingredients}
            />
            {errors.ingredients && touched.ingredients && errors.ingredients}
            <input
              type="text"
              placeholder="name..."
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="text"
              placeholder="price..."
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Table items={data} />
    </div>
  );
};
export default AddPage;
