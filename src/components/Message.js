import React, { useState } from 'react';
import Avatar from '../assets/images/avatar.png';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';

const Message = () => {
  const [message, setMessage] = useState('');
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(
        doc(db, 'usersdata', id),
        { messages: arrayUnion(message) },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
    setMessage('');
  };

  return (
    <div className='message-outer-container flex justify-center items-start'>
      <div className='message-container flex flex-col justify-around'>
        <div className='bg-white rounded-2xl h-56 w-80 mx-auto flex justify-center items-center flex-col message-inner-container'>
          <div className='bg-blue-500 h-16 w-16 rounded-full border-4 border-white avatar'>
            <img src={Avatar} alt='avatar' />
          </div>

          <p className='mb-4 msg-label'>Send me anonymous messages!</p>
          <input
            type='text'
            className='msg-input'
            placeholder='Type somthing...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            onClick={handleSubmit}
            className='w-full bg-black hover:bg-gray-900 rounded-b-2xl mt-4 h-12 text-white text-bold'
          >
            Send!
          </button>
        </div>
        <div className='bottom-message-container flex justify-center items-center flex-col'>
          <p className='mb-4 text-white text-lg'>
            👇 280 people just tapped the button 👇
          </p>
          <button className='w-80 bg-black hover:bg-gray-900 rounded-2xl h-12 text-white text-bold items-center animate-bounce'>
            Get your own messages!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
