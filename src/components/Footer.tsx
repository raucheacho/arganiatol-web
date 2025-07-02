"use client";

import { Heart, HomeIcon, Mail, Phone, TagIcon, User2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative ">
      <div className="bg-black text-white pt-12 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-sm">
          <div className="">
            <h3 className="text-lg text-[#FFF6DA] font-semibold mb-4">
              About us
            </h3>
            <p className="text-gray-300">
              Your nature-inspired supplier of all-organic and fresh produce for
              all your daily needs. We offer skin treatments, nutrition advisory
              and more.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-[#FFF6DA] font-semibold mb-4">
              Contact us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <span>
                  <HomeIcon className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>27 Rue du Aire 60000 Tillé, usa</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>
                  <Phone className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>+589 55668 8569 44</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <Mail className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>contact@arganiatol.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#FFF6DA] font-semibold mb-4">
              Profile
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>
                  <User2 className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>My account</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <TagIcon className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>Checkout</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <Heart className="h-4 w-4 text-[#FFF6DA]" />
                </span>
                <span>Wishlist</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-[#FFF6DA] font-semibold mb-4">Lagal</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span></span>
                <Link className="hover:underline" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center">
                <span></span>
                <Link className="hover:underline" href={"/terms-of-use"}>
                  Terms Of Use
                </Link>
              </li>
              <li className="flex items-center">
                <span></span>
                <Link className="hover:underline" href="/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
              <li className="flex items-center">
                <span></span>
                <Link className="hover:underline" href="/refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#FFF6DA] font-semibold mb-4">
              Payment
            </h3>
            <p className="text-gray-300 mb-4">
              Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expet.
            </p>

            <div className="w-full">
              <img
                src="/assets/images/payment-logos.png"
                alt="Payment methods"
                className="h-6 object-contain"
              />
            </div>
          </div>

          <button
            className="absolute right-0 bottom-16 h-24 w-8 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:-translate-x-0.5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="absolute inset-0 bg-[#E5BC38] w-full h-full z-0"></span>

            <span className="relative text-[#FFF6DA] rotate-90 text-xs font-medium z-10 whitespace-nowrap tracking-wide">
              Back to top
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#121212] pb-5 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-end space-x-2">
            <img src="/assets/logo.svg" alt="Arganiatol" className="h-20" />
            <span>Copyright © 2021 arganiatol, All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
