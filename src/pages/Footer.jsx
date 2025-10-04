import { RiBuildingLine, RiInstagramLine, RiMailLine, RiPhoneLine, RiTwitterLine, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full text-sm">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2"><RiPhoneLine /> (+91) 98765 43210</div>
          <div className="flex items-center gap-x-2">
            <RiMailLine /> support@blueleads.com
          </div>
          <div className="flex gap-x-2">
            <RiBuildingLine className="size-5"/> 405, BlueLeads Building, Tech Street, Mumbai, Maharashtra, India
            – 400001
          </div>
        </div>
      <div className="mt-4 border-t py-1.5">
        <div className="text-neutral-600">
          <p>
            Copyright &copy;2023 All rights reserved. | This template is made
            with by keval
          </p>
          <div className="flex gap-x-3 mt-1">
            <a href="#">
              <RiInstagramLine className="size-5"/>
            </a>
            <a href="#">
             <RiWhatsappLine className="size-5"/>
            </a>
            <a href="#">
              <RiTwitterLine className="size-5"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
