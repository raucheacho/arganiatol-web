"use client";
import Button from "@/components/ui/button-argan";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="bg-[#E5BC38] flex flex-col items-center justify-center h-screen space-y-20">
      <img className="w-1/2 mb-5" src="/assets/images/404.webp" alt="" />
      <div className="text-center space-y-5 max-w-md">
        <h1 className="text-5xl font-bold">Page not found</h1>
        <p>
          All Grace formulations adhere to strict purity standards and will
          never contain harsh or toxic ingredients
        </p>
      </div>
      <Button onClick={() => router.push("/")}>Back to Home</Button>
    </main>
  );
};

export default NotFound;
