import { Link } from "react-router";
import Logo from "../assets/logo.png"
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-white p-[80px]">
        <aside>
          <Link to="/" className="flex items-center">
            <div className=" flex items-center gap-1 font-bold text-sm px-3 py-1.5 rounded-lg tracking-wide"> <img className="w-[30px] h-[30px]" src={Logo} alt="" />
              <span className="text-white">HERO.IO</span>
            </div>
          </Link>
          <p className="text-[#A1A1AA]">
            At HERO.IO, we handpick the finest productivity apps so you
            don't have to. <br /> From focus timers to habit trackers — find your
            perfect app and unlock your best self, every single day.

          </p>
        </aside>
        <nav>
          <h6 className="font-medium">Company</h6>
          <a className="text-[#A1A1AA]">About Us</a>
          <a className="text-[#A1A1AA]">Our Mission</a>
          <a className="text-[#A1A1AA]">Contact Saled</a>

        </nav>
        <nav>
          <h6 className="font-medium">Services</h6>
          <a className="text-[#A1A1AA]">Products & Services</a>
          <a className="text-[#A1A1AA]">Customer Stories</a>
          <a className="text-[#A1A1AA]">Download Apps</a>

        </nav>
        <nav>
          <h6 className="font-medium">Information</h6>
          <a className="text-[#A1A1AA]">Privacy Policy</a>
          <a className="text-[#A1A1AA]">Terms & Conditions</a>
          <a className="text-[#A1A1AA]">Join Us</a>

        </nav>
        <nav>
          <h6 className="font-medium">Social Links</h6>
          <a className="text-[#A1A1AA] flex gap-2"> <FaTwitter /> Twitter</a>
          <a className="text-[#A1A1AA] flex gap-2 "> <FaLinkedin /> Linkedin</a>
          <a className="text-[#A1A1AA] flex gap-2 "> <FaFacebookSquare /> Facebook</a>
          <a className="text-[#A1A1AA] flex gap-2 "> <MdEmail /> Email</a>

        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-black text-[#FAFAFA] p-4 border-t-1 border-gray-700 ">
        <aside>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}