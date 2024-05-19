import React, { useState } from 'react'

const Form = () => {
    const [title, Settitle] =useState("")
    const [desc, Setdesc] =useState("")
    const [img, Setimg] =useState("")

        const handleFileChange = (event) => {
          const file = event.target.files[0];
          if (file) {
            const url = URL.createObjectURL(file);
            Setimg(url);
            console.log('File URL:', url);
          } else {
            Setimg('');
            console.log('No file selected');
          }
        };

  return (
    // <div className='w-100 h-screen p-5 shadow-x1  border border-black'>
    //    <input type="text" 
    //    placeholder='Title'
    //    className='w-[30%] p-4 border border-black'/>
       
    // </div>
    <form>
       
        <input type="text" 
        placeholder='Title'/>
        <input type="text" 
        placeholder='Description'/>
        <input type="file" 
        onChange={handleFileChange}
        placeholder='Image'/>

       
    </form>
    
    
  )

}

export default Form
