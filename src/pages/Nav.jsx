import { Container } from "react-bootstrap";
import { RiArrowDownSLine, RiMore2Line } from "react-icons/ri";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isopen);

  const navItems = [
    "Home",
    {
      label: "more",
      dropdown: ["Process", "Testimonials", "Insights"],
    },
    "Growth",
    "Contact",
  ];

  return (
    <Container className="header">
      <nav className="navbar navbar-expand-lg">
        <HashLink className="navbar-brand mx-3 mx-md-0 mx-lg-0 fw-bold" to="/">
          <span>Blue</span>Leads
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <RiMore2Line color="white" size={30} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav px-3 px-md-0 ms-auto fw-bold">
            {navItems.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <li key={index} className="nav-item">
                    <HashLink
                      to={`#${item.toLowerCase()}`}
                      className="nav-link"
                    >
                      {item}
                    </HashLink>
                  </li>
                );
              } else if (item.dropdown) {
                return (
                  <div className="dropdown text-white">
                    <li
                      className="nav-item"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={toggleDropdown}
                    >
                      <HashLink to="/" className="nav-link">
                        Services
                        <RiArrowDownSLine
                          style={{
                            transform: isopen ? "rotate(180deg)" : "rotate(0)",
                            transition: "transform .4s ease",
                          }}
                          size={30}
                        />
                      </HashLink>
                    </li>
                    <ul className="dropdown-menu">
                      <li>
                        <HashLink className="dropdown-item" to="#solutions">
                          Solutions
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="#process">
                          Process
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="#testimonials">
                          Testimonials
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="#insights">
                          Insights
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
