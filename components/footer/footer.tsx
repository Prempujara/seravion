import Link from "next/link";
const footerLinks = {
 Company: ["About Us", "Careers", "Blog", "Press"],
 Services: ["UI/UX Design", "Web Development", "Mobile Apps", "Cloud Solutions"],
 Industries: ["FinTech", "HealthTech", "E-Commerce", "SaaS"],
 Support: ["FAQs", "Contact Us", "Privacy Policy", "Terms of Service"],
};
const socials = [
 {
   label: "Twitter",
   href: "#",
   icon: (
     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
       <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
     </svg>
   ),
 },
 {
   label: "LinkedIn",
   href: "#",
   icon: (
     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
       <circle cx="4" cy="4" r="2" />
     </svg>
   ),
 },
 {
   label: "Dribbble",
   href: "#",
   icon: (
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
       <circle cx="12" cy="12" r="10" />
       <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
     </svg>
   ),
 },
 {
   label: "GitHub",
   href: "#",
   icon: (
     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
     </svg>
   ),
 },
];
const Footer = () => {
 return (
   <footer className="bg-black text-white pt-16 pb-8 px-6">
     <div className="max-w-6xl mx-auto">
       {/* Top row */}
       <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12 border-b border-white/10">
         {/* Brand */}
         <div className="col-span-2">
           <div className="flex items-center gap-2.5 mb-4">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-sm">S</span>
             </div>
             <div>
               <p className="text-white font-semibold text-base">Seravion</p>
               <p className="text-gray-500 text-[10px] tracking-widest uppercase">Technologies</p>
             </div>
           </div>
           <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
             Engineering the future of digital experience — one product at a time.
           </p>
           <div className="flex items-center gap-3 mt-6">
             {socials.map((s) => (
               <Link
                 key={s.label}
                 href={s.href}
                 aria-label={s.label}
                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
               >
                 {s.icon}
               </Link>
             ))}
           </div>
         </div>
         {/* Link columns */}
         {Object.entries(footerLinks).map(([group, links]) => (
           <div key={group}>
             <h4 className="text-white text-sm font-semibold mb-4">{group}</h4>
             <ul className="flex flex-col gap-2.5">
               {links.map((link) => (
                 <li key={link}>
                   <Link
                     href="#"
                     className="text-gray-400 text-sm font-light hover:text-white transition-colors"
                   >
                     {link}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
       {/* Bottom row */}
       <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
         <p>© 2025 Seravion Technologies. All rights reserved.</p>
         <p>Built with Next.js · Tailwind CSS · TypeScript</p>
       </div>
     </div>
   </footer>
 );
};
export default Footer;
