import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png"
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    const links = [
        { to: "/", label: "Home" },
        { to: "/apps", label: "Apps" },
        { to: "/installation", label: "Installation" },
    ]
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                {links.map(({ to, label }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            end={to === "/"}
                                            className={({ isActive }) =>
                                                `text-sm font-medium transition-colors duration-200 ${isActive
                                                    ? "text-purple-600 border-b-2 border-purple-600 pb-0.5"
                                                    : "text-gray-500 hover:text-purple-600"
                                                }`
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </li>
                        </ul>
                    </div>

                    <Link to="/" className="flex items-center">
                        <div className=" flex items-center gap-1 font-bold text-sm px-3 py-1.5 rounded-lg tracking-wide"> <img className="w-[40px] h-[40px]" src={Logo} alt="" />
                            <span className="text-[#9F62F2]">HERO.IO</span>
                        </div>
                    </Link>
                </div>
                <ul className="hidden md:flex items-center gap-8">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === "/"}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isActive
                                        ? "text-purple-600 border-b-2 border-purple-600 pb-0.5"
                                        : "text-gray-500 hover:text-purple-600"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <a href="https://github.com/aflazur"
                    className="bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                    <FaGithub />
                    Contribution
                </a>
            </div>
        </nav>
    );
}