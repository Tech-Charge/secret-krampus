import { useState } from 'react';
import Link from 'next/link'
// import React from 'react'

export default function ParticipantsForm({post}) {

    const nameCount = 4; // default number of name fields
    const [inputFields, setInputFields] = useState(
        Array(nameCount).fill().map((_, i) => ({index: i, name: ''}))
      )
    
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    const addField = () => {
        const newField = {name: ''};
        setInputFields([...inputFields, newField])
    }
    
    const submit = (e) => {
        // e.preventDefault(); // prevents page refresh
        console.log(inputFields);
        post(inputFields.map(({index, name}) => name))
    }

    return (
    <div>
        <div className="App">

              <form onSubmit={submit}>
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      <input
                        name='name'
                        placeholder='Name'
                        value={input.name}
                        onChange={event => handleFormChange(index, event)}
                        />
                    </div>
                  )
                })}
              </form>
            </div>            
        <p className='Buttons'>
            <button className='bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg' onClick={addField}>Add Name</button>
            <Link href="/group">
              <button className='bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg' onClick={submit}>Submit</button>
            </Link>
        </p>
    </div>
  );
}
