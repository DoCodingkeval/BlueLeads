import { RiInstagramLine, RiTwitterLine, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5 bg-dark text-white">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center mx-5">
          <div className="col mb-3">
              📞 (+91) 98765 43210
          </div>
          <div className="col mb-3">
              <a href="#">✉️ support@blueleads.com</a>
          </div>
          <div className="col mt-md-4">
              🏢 405, BlueLeads Building, Tech Street, Mumbai, Maharashtra,
              India – 400001
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 text-white">
        <hr className="container mx-auto mt-5" />
        <div className="d-flex flex-column flex-md-row justify-content-between text-center">
          <p>
            Copyright &copy;2023 All rights reserved. | This template is made
            with by keval
          </p>
          <div className="mb-4">
            <a href="#">
              <RiInstagramLine className="mx-lg-3" size={25} />
            </a>
            <a href="#">
              <RiWhatsappLine className="mx-2 mx-lg-5" size={25} />
            </a>
            <a href="#">
              <RiTwitterLine size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
