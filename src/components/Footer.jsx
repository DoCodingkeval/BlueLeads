import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5 text-white text-center">
        <div className="row row-cols-1 row-cols-lg-3 align-items-center">
          <div className="col mb-3 mb-md-5 mb-lg-0">📞 (+91) 98765 43210</div>
          <div className="col mb-3">
            <a href="#">✉️ support@blueleads.com</a>
          </div>
          <div className="col mt-md-4 mt-lg-0">
            🏢 405, BlueLeads Building, Tech Street, Mumbai, Maharashtra, India
            – 400001
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 text-white">
        <hr className="container w-100 mx-auto mt-5" />
        <div className="d-flex flex-column flex-md-row justify-content-between text-center">
          <p>
            Copyright &copy;2023 All rights reserved. | This template is made
            with by keval
          </p>
          <div className="mb-4">
            <a href="#">
              <i className="bi bi-instagram mx-lg-3"></i>
            </a>
            <a href="#">
              <i className="bi bi-whatsapp mx-2 mx-lg-5"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
