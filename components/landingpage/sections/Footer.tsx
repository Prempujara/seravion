import Link from "next/link";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog", "Press"],
  Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"],
  Industries: ["Healthcare", "Finance", "E-Commerce", "Education"],
  Support: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-white font-semibold text-xl">Seravion</p>
              <p className="text-gray-500 text-xs">Technologies</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Engineering the future of digital experience through innovation and
              excellence.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition font-light"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            © 2026 Seravion Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-gray-500 text-sm hover:text-white transition font-light"
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
