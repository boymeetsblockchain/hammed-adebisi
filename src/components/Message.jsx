import React from 'react'
import Input from '../components/Input'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
function Message() {
   const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();
  try {
      
    emailjs.sendForm('service_npigzza',
    'template_amjud78',
     form.current, 
     'XAJs9mRpyPoFzHDej')
    e.target.reset()
    console.log(form)
    toast.success("Message Sent")
  } catch (error) {
     toast.error("something went wrong")
     console.log(error)
  }
  
  };


  return (
    <>

    <div className="mx-auto max-w-screen-xl py-4 h-full w-full px-4 relative md:px-8 lg:px-12">
      <h1 className='text-center my-6 font-bold  text-3xl  capitalize'>Send a Message </h1>
      <form className='flex flex-col space-y-4 justify-center w-full mx-auto' ref={form} onSubmit={sendEmail}>
        <Input label={"name"} type={"text"} name={'name'}/>
        <Input label={"email"} type={"email"} name={"email"}/>
        <Input label={"number"}  type={"number"} name={"number"} />
        <Input label={"Write your message here"}  name={"text"}/>
        <button className=' bg-[#ff7999]  p-2  text-white  text-sm'>
          Send Message 
        </button>
      </form>
    </div>
    </>
  )
}

export default Message  