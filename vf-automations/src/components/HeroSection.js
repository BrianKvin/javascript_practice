import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import golf from "../../public/upcoming-event-1.jpg";
import music from "../../public/upcoming-event-2.jpg";
import party from "../../public/upcoming-event-3.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <section className="w-full h-auto px-80 py-4 bg-[#393f4d] text-[#feda6a]">
        <div className="flex items-center justify-between  border-b-2 p-5">
          <div className="">VF-AUTOMATIONS</div>
          <div>
            <Link href="/about">About</Link>
            {/* <Link href="/services" className="mx-4">
              Services
            </Link>
            <Link href="/">Events</Link> */}
            <Link href="/" className="ml-4 bg-[#feda6a] text-black px-4 py-2 rounded-3xl">
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center py-20">
          <p className="text-xl mb-2">Make Your Dream Come True</p>
          <p className="text-lg mb-4">
            Meet your favorite artists, sport teams and parties
          </p>
          <div className="flex items-center justify-between w-full max-w-xl border border-solid py-8 px-8 rounded-3xl mt-4">
            <p>Search Event</p>
            <SearchOutlined />
          </div>
        </div>
      </section>
      <section className="w-full px-80 bg-[#00a0a0]">
        <div className="flex flex-cols items-center justify-between text-sm pt-16 pb-4">
          <p>TODAY'S SCHEDULE</p>
          <p>12 AUGUST 2016</p>
        </div>
        <div className="w-full flex flex-cols">
          <div className="flex flex-col mr-8">
            <p>08:00 AM</p>
            <p>Kiai Kanjeng Orchestra</p>
            <div className="pt-2 pb-4">
              <span className="text-xs items-center justify-center py-1 px-2 bg-[#feda6a] rounded-3xl w-fit">
                GET TICKET
              </span>
            </div>
          </div>
          <div className="flex flex-col mx-8">
            <p>08:00 AM</p>
            <p>Kiai Kanjeng Orchestra</p>
            <div className="pt-2 pb-4">
              <span className="text-xs items-center justify-center py-1 px-2 bg-[#feda6a] rounded-3xl w-fit">
                GET TICKET
              </span>
            </div>
          </div>
          <div className="flex flex-col mx-8">
            <p>08:00 AM</p>
            <p>Kiai Kanjeng Orchestra</p>
            <div className="pt-2 pb-4">
              <span className="text-xs items-center justify-center py-1 px-2 bg-[#feda6a]  rounded-3xl w-fit">
                GET TICKET
              </span>
            </div>
          </div>
          <div className="flex flex-col mx-8">
            <p>08:00 AM</p>
            <p>Kiai Kanjeng Orchestra</p>
            <div className="pt-2 pb-4">
              <span className="text-xs items-center justify-center py-1 px-2 bg-[#feda6a]  rounded-3xl w-fit">
                GET TICKET
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between pb-16">
          <div className="h-px w-[75%] bg-white"></div>
          <div className="text-xs items-center justify-center border border-bg-[#feda6a] bg-[#feda6a] border-solid py-2 px-4 rounded-3xl">
            SEE ALL UPCOMING EVENTS
          </div>
        </div>
      </section>
      <section className="w-full bg-[#393f4d] text-[#feda6a] px-80 py-16">
        Our Services
        <div className="flex flex-cols items-center justify-between text-xs">
          <p className="w-[75%] py-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut.
          </p>
        </div>
        <div className="w-full flex flex-cols items-center justfify-center">
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={music} alt="Golf" />
          </div>
          <div>
            <Image src={party} alt="Golf" />
          </div>
        </div>
      </section>
      {/* <section className="w-full bg-white px-80">
        Services
        <div className="w-full grid grid-cols-3 gap-4 py-16">
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={golf} alt="Golf" />
          </div>
          <div>
            <Image src={golf} alt="Golf" />
          </div>
        </div>
      </section> */}
      

      {/* <section className="w-full">
        <div className="px-80">
          <div className="bg-orange-600 text-white py-16 px-8 rounded">
            <p className="text-2xl mb-8">Share your experiences with friends</p>
          </div>
        </div>
      </section> */}
      {/* <section className="w-full bg-gray-600 items-center text-center justify-center py-16 px-80">
        <p>Live There</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam
          modi voluptates voluptate hic nostrum dolor iure soluta excepturi
          mollitia architecto neque tenetur quidem, tempora quod. Aspernatur,
          ullam. Suscipit labore sit obcaecati accusantium distinctio ducimus
          laboriosam aliquid rerum sed porro?
        </p>
      </section>
      <section className="w-full px-80">
        <div className="py-16">These are our partners</div>
      </section> */}
      <section className="w-full bg-[#00a0a0] py-16">
        <div className="flex flex-col text-center">
          <p>Stay Up to Date with Our Events</p>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            quasi.
          </p>
          <div className="flex flex-cols items-center justify-center">
            <div className="flex flex-cols items-start justify-start py-2 px-16 border rounded-3xl mr-4 bg-[#feda6a]">
              Your Email Address
            </div>
            <div className="items-center justify-center py-2 px-8 border rounded-3xl bg-[#feda6a]">
              Subscribe
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
