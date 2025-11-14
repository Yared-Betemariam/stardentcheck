import { cn, fontWrapper } from "@/lib/utils";
import { url } from "inspector";
import Link from "next/link";
import { FaGlobe, FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

/* eslint-disable react/no-unescaped-entities */
const ContactSection = () => {
  const socialLinks = [
    {
      Icon: FiMail,
      label: "Gmail",
      link: "stardenttradingplc@gmail.com",
      url: "mailto:stardenttradingplc@gmail.com",
    },
    {
      Icon: FiPhone,
      label: "Phone",
      link: "+251 968943081",
      url: "tel:+251968943081",
    },

    {
      Icon: FaGlobe,
      label: "Website",
      link: "www.stardentplc.com",
      url: "https://www.stardentplc.com",
    },
  ];
  return (
    <section className="relative bg-white">
      <section
        id="contact"
        className="wrapper pt-20 pb-36 items-center flex-col md:flex-row flex gap-14 relative overflow-y-hidden"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-cente">
            <h2 className={fontWrapper("h2")}>
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="opacity-80 max-w-[24rem]">
              If you have any questions or inquiries, feel free to reach out to
              us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((item, index) => (
              <Link
                href={item.url}
                key={item.label}
                target="_blank"
                className={cn(
                  "hover:bg-zinc-900/[0.035] group/box p-2 rounded-lg duration-300 transition-all flex items-center gap-5 cursor-pointer",
                  index == 0 && "col-span-2"
                )}
              >
                <item.Icon className="size-12 shrink-0 bg-primary/5 p-2 rounded text-primary brightness-75" />
                <div className="flex flex-col">
                  <span className="opacity-75">{item.label}</span>
                  <span className="text-lg leading-[1.1] group-hover/box:underline">
                    {item.link}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.155775426532!2d38.73518689239539!3d9.03738537780538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1763137156628!5m2!1sen!2set"
          width={400}
          height={350}
          style={{ border: 0 }}
          className="rounded-xl max-w-full mx-auto md:w-[500px] border border-black/15 shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};
export default ContactSection;
