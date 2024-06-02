import React from "react";
import { useForm } from "react-hook-form"

const Userformss = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("firstName", { required: true, maxLength: 20 })} /><br/>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /><br/>
        <input type="number" {...register("age", { min: 18, max: 99 })} /><br/>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" /> */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Hey, you forgot to enter your name!' })}
        />
        <br />
        {errors.name && <span>{errors.name.message}</span>}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        /> <br />
        {errors.email && (
          <span>
            {errors.email.type === 'required'
              ? 'This field is required.'
              : 'Please enter a valid email address.'}
          </span>
        )}<br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          {...register('age', {
            required: 'We need to know your age!',
            min: {
              value: 18,
              message: "Sorry, you must be at least 18 years old.",
            },
          })}
        /> <br />
        {errors.age && <span>{errors.age.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Userformss