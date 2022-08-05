import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className=" bg-grayy h-2/5 w-full flex md:flex-row flex-col justify-around items-start absolute bottom-0 ">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Alt<span className="text-bluee">Way</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-bluee font-bold text-2xl pb-4">Information</p>
						<li  className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							About us 
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Delivery Information
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Brands
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Contact us
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-bluee font-bold text-2xl pb-4">My Account</p>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-bluee font-bold text-2xl pb-4">NewSletter</p>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-bluee cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-regular hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-regular absolute bottom-2">
					© 2021-2022 All rights reserved | ALTWAY
					<span className="hover:text-blue-600 font-regular cursor-pointer">
						
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;
