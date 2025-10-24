import Image from "next/image";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact | Jubayer Hasan",
};

export default function Contact() {
  return (
    <>
      <Image
        src="/background/contact-background.png"
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        fill
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get In Touch
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <a
              href="https://wa.me/8801784355059"
              target="_blank"
              className="w-full sm:w-auto text-center px-4 py-2 rounded-md border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
              aria-label="WhatsApp contact"
            >
              📱 WhatsApp:{" "}
              <span className="font-medium ml-1">+8801784355059</span>
            </a>
            <a
              href="mailto:jubaihasan88@gmail.com"
              className="w-full sm:w-auto text-center px-4 py-2 rounded-md border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
              aria-label="Email contact"
            >
              ✉️ Email:{" "}
              <span className="font-medium ml-1">jubayerhossan.dev@gmail.com</span>
            </a>
          </div>
        </div>
        <Form />
      </article>
    </>
  );
}
