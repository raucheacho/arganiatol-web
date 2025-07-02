"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Button from "./ui/button-argan";

export const LoginModal = () => {
  return (
    <Dialog>
      <DialogContent className="bg-[#FFF6DA] border-2 border-black">
        <DialogHeader>
          <DialogTitle className="text-5xl">Login</DialogTitle>
        </DialogHeader>
        <form className="space-y-20">
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>

            <input
              required
              id="email"
              type="email"
              className="border-b-2 border-black w-full placeholder:text-black h-10 focus:outline-0"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              className="border-b-2 border-black w-full placeholder:text-black h-10 focus:outline-0"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button className="bg-[#E5BC38]">Sign In</Button>
            <a
              className="inline-block align-baseline font-bold text-sm text-black"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
