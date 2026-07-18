import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions – BuildSimple",
  description:
    "Terms & Conditions and Privacy Policy for BuildSimple.ai — the AI-powered bid management platform for general contractors.",
};

const LAST_UPDATED = "July 18, 2026";
const CONTACT_EMAIL = "harv@cerebrumsystems.ca";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-3">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-primary/70 leading-relaxed mb-4">{children}</p>
  );
}

function Contact() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-semibold text-accent-dark hover:underline"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF7] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          {/* ---------------- Terms & Conditions ---------------- */}
          <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-primary/50 font-medium">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="mt-8">
            <P>
              Welcome to BuildSimple.ai. These Terms &amp; Conditions
              (&ldquo;Terms&rdquo;) govern your use of the website located at
              buildsimple.ai (the &ldquo;Site&rdquo;) and our software products
              and services, including our bid-management platform (the
              &ldquo;Products,&rdquo; and together with the Site, the
              &ldquo;Services&rdquo;), operated by BuildSimple.ai
              (&ldquo;BuildSimple,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), an independent company. By accessing the Site,
              joining our waitlist, or using the Products, you agree to these
              Terms. If you are using the Services on behalf of a company, you
              represent that you have authority to bind that company, and
              &ldquo;you&rdquo; refers to that company. If you do not agree to
              these Terms, do not use the Services.
            </P>

            <SectionHeading>1. What BuildSimple Is</SectionHeading>
            <P>
              BuildSimple builds AI-powered software for general contractors,
              including tools for bid management, subcontractor coordination,
              quote tracking, and automated follow-up. Some Products may be in
              development, beta, or early-access stages and not yet generally
              available.
            </P>

            <SectionHeading>2. Eligibility &amp; Accounts</SectionHeading>
            <P>
              The Services are intended for business use by persons 18 or
              older. When account registration becomes available, you agree to
              provide accurate information, keep your credentials secure, and
              notify us promptly of any unauthorized use of your account. You
              are responsible for all activity under your account.
            </P>

            <SectionHeading>3. The Waitlist</SectionHeading>
            <P>
              Joining the waitlist is free and does not obligate you to
              purchase anything, nor does it obligate us to provide access to
              any Product. Waitlist position, early access, launch timing,
              features, and pricing are at our discretion and may change at any
              time. By joining, you consent to receive emails from us about
              BuildSimple — product updates, early-access invitations, and
              feedback requests. Every email includes a way to unsubscribe, and
              you can opt out any time by emailing <Contact />.
            </P>

            <SectionHeading>4. Early Access &amp; Beta Features</SectionHeading>
            <P>
              Products or features labeled beta, preview, or early access are
              provided for evaluation, may contain errors, may change or be
              discontinued without notice, and are provided without any
              service-level commitments. Feedback you provide about the
              Services may be used by us without restriction or obligation to
              you.
            </P>

            <SectionHeading>5. Fees &amp; Subscriptions</SectionHeading>
            <P>
              Certain Products may require payment. Applicable fees, billing
              cycles, and cancellation terms will be presented at the time of
              purchase. Unless stated otherwise at purchase: subscriptions
              renew automatically until cancelled; fees are non-refundable
              except where required by law; and we may change pricing with
              advance notice, effective at your next renewal.
            </P>

            <SectionHeading>6. Your Content &amp; Data</SectionHeading>
            <P>
              <strong className="text-primary">You own your data.</strong>{" "}
              Project details, bid information, subcontractor contacts, quotes,
              documents, and other content you submit to the Products
              (&ldquo;Customer Content&rdquo;) remain yours. You grant us a
              license to host, process, transmit, and display Customer Content
              as needed to provide the Services.
            </P>
            <P>
              <strong className="text-primary">Use for improvement.</strong>{" "}
              BuildSimple is an artificial intelligence company. You grant us
              the right to use data from your use of the Services — including
              Customer Content and usage data — to develop, train, evaluate,
              and improve our AI models, products, and offerings. Where
              practicable, we de-identify or aggregate personal information
              used for these purposes. Our data practices are described further
              in the Privacy Policy below.
            </P>
            <P>
              <strong className="text-primary">Your responsibilities.</strong>{" "}
              You represent that you have the necessary rights and consents to
              submit Customer Content to the Services — including the right to
              share subcontractor and third-party contact information with us
              for processing on your behalf.
            </P>

            <SectionHeading>7. Automated Communications</SectionHeading>
            <P>
              The Products can send communications — such as bid invitations,
              follow-ups, and reminders — to your subcontractors and other
              contacts on your behalf. You are responsible for: (a) having a
              lawful basis to contact those recipients; (b) the content and
              accuracy of information in those communications; and (c)
              complying with applicable communication and anti-spam laws (such
              as CASL in Canada and the TCPA and CAN-SPAM in the United
              States). We may suspend sending features if we receive complaints
              or detect misuse.
            </P>

            <SectionHeading>8. AI Outputs</SectionHeading>
            <P>
              The Products use artificial intelligence to generate content and
              insights — such as drafted messages, quote summaries, coverage
              tracking, and recommendations (&ldquo;Outputs&rdquo;). Outputs
              may contain errors or omissions. You are responsible for
              reviewing Outputs before relying on them, including verifying
              quote amounts, coverage status, deadlines, and any content sent
              to third parties. Outputs are not professional, legal, or
              financial advice, and BuildSimple does not guarantee any business
              outcome, including winning bids.
            </P>

            <SectionHeading>9. Acceptable Use</SectionHeading>
            <P>
              You agree not to: (a) use the Services for any unlawful purpose;
              (b) attempt unauthorized access to any systems or data; (c)
              interfere with the Services&rsquo; operation, including
              introducing malware; (d) scrape or bulk-extract data from the
              Services by automated means; (e) send spam or unlawful
              communications through the Products; (f) reverse-engineer, copy,
              or resell the Services; (g) use the Services to build a competing
              product; or (h) impersonate any person or entity.
            </P>

            <SectionHeading>10. Intellectual Property</SectionHeading>
            <P>
              The Services — including software, models, text, graphics, logos,
              videos, and designs — are owned by BuildSimple or its licensors
              and protected by intellectual-property laws. Except for the
              rights expressly granted in these Terms, no rights in the
              Services are granted to you. You may not use our name, logo, or
              trademarks without prior written permission.
            </P>

            <SectionHeading>11. Third-Party Services</SectionHeading>
            <P>
              The Services integrate with or embed third-party services (for
              example, video hosted by YouTube, form and workflow processors,
              and communication providers). Your use of third-party services is
              governed by their own terms and privacy policies, and we are not
              responsible for their practices.
            </P>

            <SectionHeading>
              12. Availability &amp; Changes to the Services
            </SectionHeading>
            <P>
              We may modify, suspend, or discontinue any part of the Services
              at any time. We will make reasonable efforts to notify active
              customers of material changes that adversely affect paid
              Products. We do not guarantee the Services will be uninterrupted
              or error-free.
            </P>

            <SectionHeading>13. Suspension &amp; Termination</SectionHeading>
            <P>
              You may stop using the Services at any time. We may suspend or
              terminate your access if you breach these Terms, misuse the
              Services, or where required by law. Upon termination of a paid
              Product, we will provide a reasonable opportunity to export your
              Customer Content, after which we may delete it in accordance with
              our retention practices.
            </P>

            <SectionHeading>14. Disclaimers</SectionHeading>
            <P>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, express or
              implied, including merchantability, fitness for a particular
              purpose, and non-infringement. Statements on the Site about
              Products, features, savings estimates, and timelines are
              forward-looking and informational only — not commitments or
              guarantees.
            </P>

            <SectionHeading>15. Limitation of Liability</SectionHeading>
            <P>
              To the maximum extent permitted by law, BuildSimple will not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or for loss of profits, revenue, data, or
              business opportunity, arising from the Services. Our total
              aggregate liability for all claims relating to the Services will
              not exceed the greater of (a) the fees you paid us in the twelve
              (12) months before the claim arose, or (b) one hundred Canadian
              dollars (CAD $100).
            </P>

            <SectionHeading>16. Indemnification</SectionHeading>
            <P>
              You will defend and indemnify BuildSimple against claims arising
              from your Customer Content, your communications sent through the
              Products, your violation of these Terms, or your violation of
              applicable law or third-party rights.
            </P>

            <SectionHeading>17. Changes to These Terms</SectionHeading>
            <P>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date reflects the most recent version, and
              material changes will be posted on this page (and, for active
              customers, notified by email where appropriate). Continued use of
              the Services after changes are posted constitutes acceptance.
            </P>

            <SectionHeading>18. Governing Law</SectionHeading>
            <P>
              These Terms are governed by the laws of the Province of Ontario
              and the federal laws of Canada applicable therein, without regard
              to conflict-of-law principles. Disputes will be resolved in the
              courts of Ontario, Canada.
            </P>

            <SectionHeading>19. Contact &amp; Support</SectionHeading>
            <P>
              Questions about these Terms, or support requests: <Contact />
            </P>
          </div>

          {/* ---------------- Privacy Policy ---------------- */}
          <div id="privacy" className="mt-20 pt-12 border-t-2 border-accent/30">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-primary/50 font-medium">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="mt-8">
              <P>
                This Privacy Policy explains what information BuildSimple.ai
                collects through the Site and Products, how we use it, and the
                choices you have.
              </P>

              <SectionHeading>1. What We Collect</SectionHeading>
              <P>
                <strong className="text-primary">
                  Information you give us.
                </strong>{" "}
                When you join the waitlist: name, email address, and
                (optionally) company name. When you use the Products: account
                details, and Customer Content you submit — project details, bid
                information, quotes, documents, and contact information for
                subcontractors and other third parties.
              </P>
              <P>
                <strong className="text-primary">
                  Information collected automatically.
                </strong>{" "}
                Standard technical and usage data such as IP address, browser
                type, device information, pages visited, and actions taken
                within the Products. The embedded YouTube player on the Site
                may set cookies under Google&rsquo;s privacy policy.
              </P>
              <P>
                We do not collect government identifiers or sensitive personal
                information through the Services.
              </P>

              <SectionHeading>2. How We Use Information</SectionHeading>
              <P>We use collected information to:</P>
              <ul className="list-disc pl-6 mb-4 text-primary/70 leading-relaxed space-y-1.5">
                <li>Provide, operate, and secure the Services</li>
                <li>
                  Contact you — early access, product updates, support, and
                  feedback requests
                </li>
                <li>
                  Send communications you initiate through the Products to your
                  contacts
                </li>
                <li>Understand our market and shape what we build</li>
                <li>
                  <strong className="text-primary">
                    Develop, train, evaluate, and improve our AI models,
                    products, and offerings
                  </strong>
                </li>
                <li>Comply with legal obligations</li>
              </ul>
              <P>
                We want to be direct about AI, because many AI companies
                aren&rsquo;t: improving our models and products with data is
                part of how we build. Where practicable, we de-identify or
                aggregate personal information used for model development.
              </P>

              <SectionHeading>
                3. Subcontractor &amp; Third-Party Contact Data
              </SectionHeading>
              <P>
                When customers submit subcontractor or third-party contact
                information to the Products, we process it on the
                customer&rsquo;s behalf to provide the Services — for example,
                sending bid invitations and follow-ups the customer initiates.
                If you are a subcontractor whose information was submitted by a
                customer and you want it corrected or removed, contact us at{" "}
                <Contact />.
              </P>

              <SectionHeading>4. How We Share Information</SectionHeading>
              <P>
                We do not sell personal information. We share it only with: (a){" "}
                <strong className="text-primary">service providers</strong>{" "}
                that process data on our behalf (hosting, form and workflow
                processing, email/communication delivery, analytics), bound by
                confidentiality and security obligations; (b){" "}
                <strong className="text-primary">
                  recipients of communications you initiate
                </strong>{" "}
                through the Products; (c){" "}
                <strong className="text-primary">legal authorities</strong>{" "}
                where required by law; and (d){" "}
                <strong className="text-primary">a successor entity</strong> in
                a merger, acquisition, or asset sale, in which case this policy
                continues to apply to previously collected data.
              </P>

              <SectionHeading>5. Data Retention</SectionHeading>
              <P>
                We retain personal information for as long as needed for the
                purposes above — for waitlist data, until you ask us to delete
                it; for Product data, for the life of your account plus a
                reasonable wind-down period, after which it is deleted or
                de-identified. If you unsubscribe from emails, we retain the
                minimum needed to honor the opt-out.
              </P>

              <SectionHeading>6. Your Rights</SectionHeading>
              <P>
                You may request access to, correction of, or deletion of your
                personal information at any time by emailing <Contact />. We
                respond in accordance with applicable law. You may withdraw
                marketing consent at any time via the unsubscribe link in any
                email or by contacting us.
              </P>

              <SectionHeading>7. Security</SectionHeading>
              <P>
                We use commercially reasonable administrative, technical, and
                physical safeguards. No method of transmission or storage is
                100% secure, and we cannot guarantee absolute security.
              </P>

              <SectionHeading>8. Children</SectionHeading>
              <P>
                The Services are for business audiences and not directed at
                anyone under 18. We do not knowingly collect personal
                information from minors; contact us if you believe a minor has
                provided information and we will delete it.
              </P>

              <SectionHeading>9. International Users</SectionHeading>
              <P>
                BuildSimple operates from Canada. Your information may be
                processed in Canada and other jurisdictions where our service
                providers operate, which may have different data-protection
                laws than your own.
              </P>

              <SectionHeading>10. Changes to This Policy</SectionHeading>
              <P>
                We may update this Privacy Policy from time to time. Material
                changes will be posted on this page with an updated date.
              </P>

              <SectionHeading>11. Contact</SectionHeading>
              <P>
                Privacy questions or requests: <Contact />
              </P>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
