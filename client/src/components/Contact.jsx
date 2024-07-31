import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="pageHeaderTwo">let&apos;s talk</h1>
      <p id="contactSentence">
        all questions and comments welcome! 
      </p>
      <form id="contactForm">
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input type='email' className='form-control' id='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            message
          </label>
          <textarea className='form-control' id='message' rows='3'></textarea>
        </div>
        <button type='submit' className='btn'>
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
