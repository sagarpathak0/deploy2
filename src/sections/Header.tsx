import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white gap-3">
        <p className="text-white/60 hidden md:block">
          Secure. Transparent. Decentralized. The Future of Trust Starts Here.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Home</a>
              <a href="#">Customer</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-center justify-center tracking-tight">
                <Link href="/auth/login">Get Started</Link>
              </button>
            </nav>
            <nav></nav>
          </div>
        </div>
      </div>
    </header>
  );
};
