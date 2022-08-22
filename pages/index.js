import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

export default function Home() {
  const router =useRouter()
  const [form,setForm] = useState({
    name:'',
    email:'',
    password:'',
  })
  const handleChange =(e)=>{
    console.log(e.target.value);
    setForm({
      ...form,
     [e.target.name] :e.target.value
    })
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const data = {
      name : form.name,
      email : form.email,
      password : form.password
    }
   const response = await axios.post('http://localhost:3000/api/test/data',{data})
   console.log(response);
   if(response.status === 200){
     router.push('/login')
   }
  }
  console.log(form)

  return (
    <div className='w-full min-h-screen bg-black'>
      <form onSubmit={handleSubmit}>
        <input type='name' name='name' onChange={(e)=>handleChange(e)}/>
        <input type='email' name='email' onChange={(e)=>handleChange(e)}/>
        <input type='name' name='password' onChange={(e)=>handleChange(e)}/>
        <button type='submit'>Masuk</button>
      </form>
    </div>
  )
}
// export async function getServerSideProps (){
// return{
//   props : {

//   }
// }
// }