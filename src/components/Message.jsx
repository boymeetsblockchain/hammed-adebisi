import React, { useState } from 'react';
import Input from './Input';

function Message() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server
    console.log('Form Data:', formData);
  };

  return (
    <div className='px-4 my-5'>
      <h2 className="text-center font-semibold text-2xl mb-4">Send me a Message</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Message"
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#ff7999]  text-white py-3 px-4 rounded-md flex gap-2 hover:bg-red-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Message;
    