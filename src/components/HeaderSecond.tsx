"use client";

import { menuItems } from "@/constants/menu";
import { useModal } from "@/lib/ModalProvider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import Menu from "./Menu";

export default function HeaderSecond() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="bg-black text-[#E5BC38] sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href={"/"} className="lg:flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:text-amber-300">
              <span className="text-amber-300">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Login */}
          <button
            onClick={() => openModal(<LoginModal />)}
            className="flex space-x-2 items-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                stroke="#E5BC38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                stroke="#E5BC38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Login</span>
          </button>

          {/* Wishlist */}
          <Link href="/wishlist" className="flex space-x-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z"
                stroke="#E5BC38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Wishlist (0)</span>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <svg
              width="25"
              height="32"
              viewBox="0 0 25 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8079 7.82395C22.7725 7.45894 22.4659 7.17956 22.0992 7.17956H17.4071V4.76732C17.4071 2.1383 15.2675 0 12.6393 0C10.01 0 7.87071 2.1383 7.87071 4.76757V7.17981H2.90171C2.53497 7.17981 2.22787 7.45919 2.19273 7.82419L0.00295962 30.9048C-0.015105 31.1047 0.049977 31.3027 0.185833 31.4512C0.320451 31.5994 0.511985 31.6836 0.711685 31.6836H24.2887C24.4886 31.6836 24.6799 31.5992 24.8148 31.4512C24.9507 31.3027 25.016 31.1047 24.9974 30.9048L22.8079 7.82395ZM9.29484 4.76757C9.29484 2.92374 10.7949 1.4229 12.6395 1.4229C14.4828 1.4229 15.9832 2.92374 15.9832 4.76757V7.17981H9.29484V4.76757ZM1.49465 30.2602L3.54857 8.60295H8.58265H16.6951H21.4521L23.5062 30.2602H1.49465Z"
                fill="#E5BC38"
              />
            </svg>
          </Link>
          {/* Mobile Menu Button */}
        </nav>
        {/* Cart */}
        <Link className="lg:hidden" href="/cart">
          <svg
            width="25"
            height="32"
            viewBox="0 0 25 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8079 7.82395C22.7725 7.45894 22.4659 7.17956 22.0992 7.17956H17.4071V4.76732C17.4071 2.1383 15.2675 0 12.6393 0C10.01 0 7.87071 2.1383 7.87071 4.76757V7.17981H2.90171C2.53497 7.17981 2.22787 7.45919 2.19273 7.82419L0.00295962 30.9048C-0.015105 31.1047 0.049977 31.3027 0.185833 31.4512C0.320451 31.5994 0.511985 31.6836 0.711685 31.6836H24.2887C24.4886 31.6836 24.6799 31.5992 24.8148 31.4512C24.9507 31.3027 25.016 31.1047 24.9974 30.9048L22.8079 7.82395ZM9.29484 4.76757C9.29484 2.92374 10.7949 1.4229 12.6395 1.4229C14.4828 1.4229 15.9832 2.92374 15.9832 4.76757V7.17981H9.29484V4.76757ZM1.49465 30.2602L3.54857 8.60295H8.58265H16.6951H21.4521L23.5062 30.2602H1.49465Z"
              fill="#E5BC38"
            />
          </svg>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 cursor-pointer lg:hidden"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_54)">
              <path
                d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                fill="#E5BC38"
              />
              <path
                d="M9.5 3C10.3284 3 11 2.32843 11 1.5C11 0.671573 10.3284 0 9.5 0C8.67157 0 8 0.671573 8 1.5C8 2.32843 8.67157 3 9.5 3Z"
                fill="#E5BC38"
              />
              <path
                d="M17.5 3C18.3284 3 19 2.32843 19 1.5C19 0.671573 18.3284 0 17.5 0C16.6716 0 16 0.671573 16 1.5C16 2.32843 16.6716 3 17.5 3Z"
                fill="#E5BC38"
              />
              <path
                d="M1.5 11C2.32843 11 3 10.3284 3 9.5C3 8.67157 2.32843 8 1.5 8C0.671573 8 0 8.67157 0 9.5C0 10.3284 0.671573 11 1.5 11Z"
                fill="#E5BC38"
              />
              <path
                d="M9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11Z"
                fill="#E5BC38"
              />
              <path
                d="M17.5 11C18.3284 11 19 10.3284 19 9.5C19 8.67157 18.3284 8 17.5 8C16.6716 8 16 8.67157 16 9.5C16 10.3284 16.6716 11 17.5 11Z"
                fill="#E5BC38"
              />
              <path
                d="M1.5 19C2.32843 19 3 18.3284 3 17.5C3 16.6716 2.32843 16 1.5 16C0.671573 16 0 16.6716 0 17.5C0 18.3284 0.671573 19 1.5 19Z"
                fill="#E5BC38"
              />
              <path
                d="M9.5 19C10.3284 19 11 18.3284 11 17.5C11 16.6716 10.3284 16 9.5 16C8.67157 16 8 16.6716 8 17.5C8 18.3284 8.67157 19 9.5 19Z"
                fill="#E5BC38"
              />
              <path
                d="M17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 18.3284 16.6716 19 17.5 19Z"
                fill="#E5BC38"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_54">
                <rect width="19" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {/* Fullscreen Menu Component */}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      {/* Uncomment if you want to use the full-screen menu */}
    </header>
  );
}
