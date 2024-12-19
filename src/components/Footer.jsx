import React from 'react';

const FooterLink = ({ href, children }) => (
  <li className="mb-2">
    <a 
      href={href} 
      className="hover:underline text-white hover:text-gray-200 transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

const FooterSection = ({ title, children }) => (
  <section>
    <h3 className="font-bold mb-4 text-white">{title}</h3>
    <ul>{children}</ul>
  </section>
);

const FooterBrand = () => (
  <section className="lg:max-w-sm">
    <div className="flex items-center mb-4">
      <img
        src="src/assets/images/logoputih.png"
        alt="KitaSehat logo"
        className="mr-2 w-10 h-10 object-contain"
      />
      <span className="text-xl font-bold text-white">KitaSehat</span>
    </div>
    <p className="mb-4 text-gray-200">
      KitaSehat menyediakan layanan kesehatan yang progresif dan terjangkau, 
      dapat diakses melalui ponsel dan online untuk semua orang.
    </p>
    <small className="text-gray-300">©KitaSehat 2024. All rights reserved</small>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-[#458DFC] py-12">
    <nav className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      <FooterBrand />
      
      <FooterSection title="Company">
        <FooterLink href="#">Tentang Kami</FooterLink>
        <FooterLink href="#">Testimoni</FooterLink>
        <FooterLink href="#">Cari Dokter</FooterLink>
        <FooterLink href="#">Apps</FooterLink>
      </FooterSection>

      <FooterSection title="Region">
        <FooterLink href="#">Indonesia</FooterLink>
      </FooterSection>

      <FooterSection title="Help">
        <FooterLink href="#">Help center</FooterLink>
        <FooterLink href="#">Contact support</FooterLink>
        <FooterLink href="#">Instructions</FooterLink>
      </FooterSection>
    </nav>
  </footer>
);

export default Footer;
