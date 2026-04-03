import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog", "Press"],
  Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"],
  Resources: ["Documentation", "Case Studies", "FAQs", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Seravion Logo"
                width={36}
                height={36}
                className="brightness-0 invert"
              />
              <div className="leading-tight">
                <p className="text-white font-semibold text-lg tracking-tight">
                  Seravion
                </p>
                <p className="text-gray-500 text-[11px] font-medium tracking-wider uppercase">
                  Technologies
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-normal">
              Engineering the future of digital experience. We build innovative
              solutions that transform businesses worldwide.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 font-normal"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-gray-500 text-xs font-normal">
            &copy; {new Date().getFullYear()} Seravion Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-gray-500 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
