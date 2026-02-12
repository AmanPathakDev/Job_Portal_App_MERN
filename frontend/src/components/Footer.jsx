import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aman Pathak. All rights reserved.
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-primary transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="text-sm text-muted-foreground">
          Built with ❤️ using React
        </div>
      </div>

      <Separator />
    </footer>
  );
};

export default Footer;
