import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'

const Add = () => {
  const [data, setData] = useState([])
  const [input, setinput] = useState('')

  useEffect(() => {
    getAll()
  })

  function getAll() {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then((api) => setData(api))
  }

  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then(res => res.json())
      .then((api) => {
        getAll()
      })
  }

  function handleDelete(id) {
    fetch("http://localhost:3000/" + id, { method: "DELETE" })
      .then(res => res.json())
      .then((api) => {
        getAll()
      })
      .catch(() => console.log("err"))
  }
  return (
    <div className='add'>

      <Formik
        initialinputs={{ name: '', img: '', desc: '', price: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          desc: Yup.string().required('Required'),
          img: Yup.string().required('Required'),
          price: Yup.number().required('Required'),
        })}
        onSubmit={(inputs, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(inputs)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc"> Description</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />


          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <input placeholder='Search Products...' type="text" input={input} onChange={(e) => setinput(e.target.value)} />
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Delete</th>

        </tr>
        {data
          .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
          .map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>$ {item.price}</td>
              <td><button onClick={() => handleDelete(item._id)}>X</button></td>
            </tr>

          ))}
      </table>

    </div>
  )
}

export default Add