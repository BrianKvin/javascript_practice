import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#1d1e22] text-[#d4d4dc] px-80 py-16">
      <section className="w-full flex items-center justify-between border-b border-solid pb-4">
        <p>VF-AUTOMATIONS</p>
        <p className="text-xs">&copy; 2016 VFAUTOMATIONS.com. ALL RIGHTS RESEVED</p>
      </section>
      <section className="w-full flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex flex-cols">
            <p className="pt-4">ABOUT</p>
            <p className="text-sm ml-4 pt-5">
              Our Company | Careers | Advertising | Press Room | Trademarks |
              Terms of Service | Privacy Policy
            </p>
          </div>
          <div className="flex flex-cols">
            <p className="pt-2">SUPPORT and CONTACTS</p>
            <p className="text-sm pt-3 ml-4">
              Customer Support Contacts | Feedback | Help | Sitemap
            </p>
          </div>
          <div className="flex flex-cols">
            <p className="pt-2">STAY CONNECTED</p>
            <p className="text-sm pt-3 ml-4">
              Facebook | Twitter | LinkedIn | Google+ | RSS
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>VF-AUTOMATIONS Dashboard</p>
          <p className="text-sm">Professional</p>
          <p className="text-sm">Subscriber Login</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
