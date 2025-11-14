/* eslint-disable react/no-unescaped-entities */
"use client";

import { fontWrapper } from "@/lib/utils";
import { Award, Leaf, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="wrapper flex flex-col gap-12 py-28">
      <div className="flex flex-col gap-10">
        <h2 className={fontWrapper("h2")}>
          About <span className="text-primary">Us</span>
        </h2>
        <section>
          <p className="text-gray-700">
            Stardent Trading PLC is a trusted importer and supplier of
            high-quality medical equipment, devices, and hospital solutions
            across Ethiopia and the East African region.
          </p>
          <p className="text-gray-700 mt-2">
            Our journey began with a clear mission—to bridge the gap between
            healthcare providers and reliable, internationally certified medical
            technologies. What started as a small supply operation has grown
            into a reputable company serving hospitals, clinics, laboratories,
            NGOs, and government institutions.
          </p>
          <p className="text-gray-700 mt-2">
            With a dedication to quality, integrity, and customer care, we
            continuously expand our product catalog and improve our logistics
            and service standards to meet the growing demands of the healthcare
            sector.
          </p>
        </section>

        {/* Our Values Section */}
        <section>
          <h2
            className={fontWrapper("text-2xl font-bold text-emerald-800 mb-6")}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Quality
              </h3>
              <p className="text-gray-700 text-center">
                We supply medical equipment that meets international standards,
                ensuring accuracy, durability, and dependable performance for
                healthcare professionals.
              </p>
            </div>

            <div className="bg-emerald-900/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Leaf className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Reliability
              </h3>
              <p className="text-gray-700 text-center">
                From timely delivery to after-sales support, we prioritize
                dependable service that healthcare institutions can trust.
              </p>
            </div>

            <div className="bg-emerald-900/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Partnership
              </h3>
              <p className="text-gray-700 text-center">
                We believe in long-term relationships with our clients,
                suppliers, and communities—working together to improve access to
                quality healthcare equipment.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          <section>
            <h2
              className={fontWrapper(
                "text-2xl font-bold text-emerald-800 mb-4"
              )}
            >
              Our Facility
            </h2>
            <p className="text-gray-700">
              We operate from a well-organized logistics and storage facility
              designed to safely handle sensitive and high-value medical
              equipment. Every product undergoes careful inspection and quality
              assurance before delivery.
            </p>
            <p className="text-gray-700 mt-3">
              Located strategically in Addis Ababa, our distribution network
              enables fast and efficient delivery to clients across Ethiopia,
              with expansion plans throughout East Africa.
            </p>
          </section>

          <section>
            <h2
              className={fontWrapper(
                "text-2xl font-bold text-emerald-800 mb-4"
              )}
            >
              Our Products
            </h2>
            <p className="text-gray-700 mb-4">
              Stardent Trading PLC provides a diverse range of medical equipment
              and supplies for various healthcare applications, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hospital and clinical diagnostic equipment</li>
              <li>Laboratory devices and consumables</li>
              <li>Sterilization and infection-prevention systems</li>
              <li>Dental and surgical instruments</li>
              <li>Patient monitoring and emergency care devices</li>
              <li>Rehabilitation and physiotherapy equipment</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Each product is sourced from reputable international
              manufacturers, ensuring safety, compliance, and trusted
              performance in medical environments.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};
export default About;
