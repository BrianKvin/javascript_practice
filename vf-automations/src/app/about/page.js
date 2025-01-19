import Image from "next/image";
import React from "react";
import ticket from "../../../public/2-tickets.webp";

const page = () => {
  return (
    <div className="w-full h-full">
      <section className="flex flex-cols items-center justify-center bg-[#393f4d] text-[#feda6a] px-80 y-16">
        <span className="mr-8">
          <Image src={ticket} alt="ticket" />
        </span>
        <span>
          <p className="text-3xl pb-4">About Us</p>
          <p>
            We manage people in your event using digital solutions that are
            streamlined to ensure an efficient and engaging event experience.
          </p>
        </span>
      </section>
      <section className="w-full bg-[#00a0a0] px-80">
        <div className="w-full flex flex-cols items-center justify-evenly py-16">
          <div className="flex flex-col items-center justify-center">
            <span>598</span>
            <p>Events Active</p>
          </div>
          <div>
            <span>598</span>
            <p>Events Active</p>
          </div>
          <div>
            <span>598</span>
            <p>Events Active</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#393f4d] text-[#feda6a] px-80">
        <div>Our Services</div>
        <div className="w-full flex flex-cols items-center justify-center p-16">
          <span className="border border-gray-200 rounded-lg shadow flex flex-col">
            <p>On-Site Registration</p>
            <p>Secure registration of members</p>
            <p>Door management</p>
            <p>Registration desk ushers</p>
            <p>Accreditation</p>
            <p>Authentication</p>
            <p>Payment integration: M-pesa, JamboPay, Cybersource</p>
            <p>Onsite identification: Laynyards and name tags</p>
            <p>Attendees substitution</p>
            <p>International attendees management</p>
            <p>VIP management</p>
            <p>Give away management</p>
            <p>Accountability</p>
          </span>
          <span className="border border-gray-200 rounded-lg shadow mx-4">
            <p>Pre-Registration</p>
            <p>Secure registration of members</p>
            <p>Security check using QR code</p>
            <p>Door management</p>
            <p>Automated data collection and integration</p>
            <p>Accreditation</p>
            <p>Authentication</p>
            <p>Payment integration: M-pesa, JamboPay, Cybersource</p>
            <p>Onsite identification: Laynyards and name tags</p>
            <p>Attendees substitution</p>
            <p>International attendees management</p>
            <p>Customer service</p>
            <p>VIP Management</p>
            <p>Real time attendee report</p>
            <p>Accountability</p>
          </span>
          <span className="border border-gray-200 rounded-lg shadow ">
            <p>Event Mobile App Solution</p>
            <p>Pre-event participant engagement</p>
            <p>General information sharing</p>
            <p>Program distribution</p>
            <p>Push notification alert</p>
            <p>International attendees management</p>
            <p>Live polling</p>
            <p>Exhibitor content sharing</p>
            <p>Feedback Collection</p>
            <p>Photo and video gallery</p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default page;
