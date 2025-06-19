import { RiArrowDownSLine, RiMore2Line } from "react-icons/ri";
import { motion } from "motion/react";
import { useState } from "react";

const Nav = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

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
    <div className="container shadow header">
      <nav className="navbar navbar-expand-lg">
        <motion.a
          className="navbar-brand mx-3 mx-md-0 mx-lg-0 fw-bold"
          href="#"
          initial={{
            x: -220,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span>Blue</span>Leads
        </motion.a>
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
          <motion.ul
            className="navbar-nav px-3 px-md-0 ms-auto fw-bold"
            initial="hidden"
            variants={containerVariants}
            animate="show"
          >
            {navItems.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <motion.li
                    key={index}
                    className="nav-item"
                    variants={itemVariants}
                  >
                    <a href={`#${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </a>
                  </motion.li>
                );
              } else if (item.dropdown) {
                return (
                  <div className="dropdown text-white">
                    <motion.li
                      variants={itemVariants}
                      className="nav-item"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={toggleDropdown}
                    >
                      <a href="" className="nav-link">
                        Services
                        <RiArrowDownSLine
                          style={{
                            transform: isopen ? "rotate(180deg)" : "rotate(0)",
                            transition: "transform .4s ease",
                          }}
                          size={30}
                        />
                      </a>
                    </motion.li>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#solutions">
                          Solutions
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#process">
                          Process
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#testimonials">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#insights">
                          Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              }
            })}
          </motion.ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
