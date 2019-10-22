import React, { useState } from "react";
import withAxios from '../axios'

const TaskList = () => {
  const [form, setForm] = useState("");
  const handleChange = e => {
    setForm(e.target.value);
  };{}
  const data = {
    name: form,
    familyId: 3
  }

  console.log(data)
  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault()
    withAxios()
      .post("https://home-chore-tracker.herokuapp.com/api/children", data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
        console.log(form)
      })
    setForm('')
  };

  return (
    <div>
      <form>
        <input type='text' name="surname" value={form} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TaskList;
