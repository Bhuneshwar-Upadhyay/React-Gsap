import { Link } from "react-router"
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import logo from '../assets/logo-coffee.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Header = () => {

    useGSAP(
        () => {
            const tl = gsap.timeline()

            tl.from('.menu a', {
                y: 10,
                delay: .5,
                opacity: 0,
                stagger: .2,
            })
            tl.from('.links a', {
                y: 10,
                delay: .5,
                opacity: 0,
                stagger: .2,
            }, "-=1")
        }
    )

    return (
        <div>
            <div className="header flex fixed z-50 justify-between w-full max-w-[1350px] left-0 right-0 top-2.5 rounded-2xl mx-auto py-4 px-10 border border-amber-800 backdrop-blur-xl">
                <div className="logo flex items-center gap-3 text-2xl text-white">
                    <img src={logo} className="w-8" alt="logo" /> Coffee
                </div>

                <div className="flex">
                    <ul className="menu flex gap-3 text-gray-300">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Contact us</Link>
                    </ul>
                </div>
                <div className="links flex gap-5 text-2xl text-white">
                    <Link><FaRegHeart /></Link>
                    <Link><MdOutlineShoppingBag /></Link>
                    <Link><FaRegUserCircle /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header