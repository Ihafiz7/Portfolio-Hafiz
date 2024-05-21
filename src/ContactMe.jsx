import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Alart from './components/Alart';

const ContactMe = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [failed, setFailed] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ykayxdw', 'template_rvwk6sh', form.current, {
        publicKey: 'FKJs5wEhjaL2wlVQ9',
      })
      .then(
        () => {
          setShowAlert(true);
          form.current.reset();
        },
        (error) => {
          setFailed(true);
        },
      );
    };

    const handleCloseAlert = () => {
      setShowAlert(false) || setFailed(false);
    }

    const GoToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return (
    <div id='contact' className='w-screen h-screen flex flex-col items-center justify-center mt-16 dark:bg-black dark:text-white'>
      <div>
        <h1 className='xl:text-5xl sm:text-4xl xl:font-bold sm:font-medium tracking-wide text-blue-600 text-center mb-8'>Send me a message!</h1>
        <h2 className='xl:text-3xl sm:text-2xl font-normal tracking-wide text-center'>Got a question or proposal, or just want to say hello? Go ahead.</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col w-3/4 mt-8 gap-8'>
        <div className='flex xl:flex-row sm:flex-col justify-center gap-8'>
          <input type="text" name="user_name" placeholder='Enter Your Name' required className='xl:w-1/3 sm:w-full h-12 border-b border-gray-950 focus:outline-none text-2xl font-light dark:rounded-md dark:px-2' />
          <input type="email" name="user_email" placeholder='Enter Your Email' required className='xl:w-1/3 sm:w-full h-12 border-b border-gray-950 focus:outline-none text-2xl font-light dark:rounded-md dark:px-2' />
        </div>

        <textarea name="message" required className='xl:w-[70%] sm:w-full h-20 border-b border-gray-950 self-center focus:outline-none text-2xl font-light p-2 resize-none dark:rounded-md' placeholder='Enter Your Message' />

        <button type='submit' value='Send' className=' btn btns self-center uppercase text-center'>Shoot</button>
      </form>

      {showAlert && (
        <Alart message={'Email Sent Successfully'} onClose={handleCloseAlert} />
      )}
      {failed && (
        <Alart message={'Failed to send message.'} onClose={handleCloseAlert} />
      )}
      <img src="images/to top.svg" alt="GO TO TOP" onClick={GoToTop} className='w-12 h-12 self-end mr-8 cursor-pointer' />
    </div>
    
  )
}

export default ContactMe;