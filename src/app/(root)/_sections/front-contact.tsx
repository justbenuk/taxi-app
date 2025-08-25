import PageContainer from "@/components/shared/page-container";
import ContactForm from "@/forms/contacts/contact-form";
import { IconCoinPound, IconMail, IconPhone, IconPhoneRinging } from "@tabler/icons-react";
import React from "react";

export default function FrontContact() {
  return (
    <div style={{ backgroundImage: `url('/assets/map.png')`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="bg-black/80 py-36 text-white">
        <PageContainer className="flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-black/80 p-12 rounded-xl">
            <div className="flex flex-col justify-center">
              <div className="lg:w-2/3">
                <h3 className="uppercase font-semibold text-yellow-500 dark:text-yellow-300">Contact Us</h3>
                <h1 className="text-3xl font-semibold">More ways to contact us.</h1>
                <p>Our offices are open 24 hours a day, with fully trained staff waiting to take your call.</p>
              </div>
              <nav className="flex flex-col space-y-4 mt-4">
                <div className="flex flex-row items-center gap-4">
                  <span>
                    <IconMail className="text-yellow-500 dark:text-yellow-300 size-8" />
                  </span>
                  <span>company@company.com</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <span>
                    <IconCoinPound className="text-yellow-500 dark:text-yellow-300 size-8" />
                  </span>
                  <span>accounts@company.com</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <span>
                    <IconPhoneRinging className="text-yellow-500 dark:text-yellow-300 size-8" />
                  </span>
                  <span>01827 123456</span>
                </div>
              </nav>
            </div>
            <ContactForm />
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
