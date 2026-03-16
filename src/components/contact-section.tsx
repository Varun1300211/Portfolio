import { ContactCard } from "@/components/contact-card";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/data/contact-links";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-anchor border-t border-white/5 bg-[#14161b]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-24">
        <SectionHeading
          id="contact-heading"
          title="Contact"
          description="Open to internships, full-time roles, and conversations around software engineering, data, and product development."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactLinks.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
