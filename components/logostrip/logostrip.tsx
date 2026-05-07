// ==========================
// FILE: components/logostrip/logostrip.tsx
// ==========================
"use client";

const LogoStrip = () => {
  return (
    <section className="w-full bg-[#061018] py-10 overflow-hidden">
      <div className="w-full opacity-80">
        <img
          src="/logostrip.png" 
          alt="Logo Strip"
          /* Use w-full to stretch to 100% width and scale appropriately */
          className="w-full h-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};

export default LogoStrip;