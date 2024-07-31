import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer' className='text-center text-lg-start'>
      <div className='container p-4'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-6 col-md-12 mb-2 mb-lg-0 text-lg-start'>
            <h5 className='footerLogo text-lowercase'>saudade art</h5>
          </div>
          <div className='col-lg-6 col-md-12 mb-2 mb-lg-0 text-lg-end'>
            <h5 className='footer text-lowercase'>Follow Me</h5>
          </div>
        </div>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-6 col-md-12 mb-2 mb-lg-0 text-lg-start'>
            <p className="footer">© 2024 saudade art. All rights reserved.</p>
          </div>
          <div className='col-lg-6 col-md-12 mb-2 mb-lg-0 text-lg-end'>
            <a
              href='https://www.pinterest.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='me-3'
            >
              <i className='fab fa-pinterest fa-2x'></i>
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;