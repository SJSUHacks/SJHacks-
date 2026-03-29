import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center">
      <Image
        src="/assets/skyline.svg"
        alt="Skyline Sillhouette"
        width={100}
        height={100}
        className="w-full"
      />
      <div className="bg-[#0097B2] mx-auto pt-36 pb-12 -mt-1">
        <div className="flex justify-center gap-6 mb-2">
          <Link
            href="https://www.instagram.com/sjhacks._/"
            aria-label="Instagram"
          >
            <FaInstagram size={42} />
          </Link>
          <Link href="mailto:contact@sjhacks.org" aria-label="Email">
            <MdOutlineEmail size={42} />
          </Link>
        </div>
        <p className="text-base">Made with love, by the SJHacks Team</p>
      </div>
    </footer>
  );
};

export default Footer;
