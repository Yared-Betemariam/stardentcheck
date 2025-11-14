const Footer = () => {
  const date = new Date();
  return (
    <section className="text-center py-10 font-normal absolute bottom-0 w-full inset-x-0">
      <p className="opacity-45 hover:cursor-pointer hover:opacity-50 duration-200 transition-all text-base">
        &copy; {date.getFullYear()} Stardent Trading Plc. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
