import React from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

// Add an interface for the props
interface TermsAndConditionsProps {
  onNavigateToPrivacy?: () => void;
}

// Pass the props into the component
export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onNavigateToPrivacy,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
        Terms & Conditions Overview
      </h3>
      {/* Add as many paragraphs and styling as needed here */}
      <p className="">
        The Terms & Conditions(“Terms & Conditions”) describes how(San Diego,
        CA)(www.radiantselfworth.com)(847 - 208 -0978)(“Company,” “we,”, “us”
        and “our”, “controller”) provide clarity, transparency and mutual
        respect when engaging with Melissa Krahenbuhl, this website and
        associated services when using this website(
        <a
          href="www.radiantselfworth.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a88d52] underline hover:text-opacity-80"
        >
          {" "}
          https://www.radiantselfworth.com
        </a>
        ), (the “Site”). Please read the following information carefully to
        understand changes to our practices regarding your personal data *,
        including GDPR(
        <a
          href="https://www.i-scoop.eu/gdpr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a88d52] underline hover:text-opacity-80"
        >
          {" "}
          https://www.i-scoop.eu/gdpr/
        </a>
        ) compliance, how we will process data and the changes we made to it .
      </p>
      <p className="pt-2 italic">
        * Internet - based data transmissions may in principle have security
        gaps, so absolute protection may not be guaranteed. For this reason,
        every data subject is free to transfer personal data to us via
        alternative means, e.g.by telephone(listed above).
      </p>
      <p className="pt-2">
        Melissa Krahenbuhl - Radiant Self Worth, LLC provides various business
        coaching services, products, and goods through this Website(the
        "Service"). This Service is offered subject to Your acceptance of these
        Terms as well as any relevant sections of this Policy.
      </p>
      {/* Free Information / Interview section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Free Information / Interview
      </h3>
      <p>
        The first step in our process is a phone interview to determine your
        suitability for our services. The interview process is conducted over
        the phone with a professional consultant from Melissa Krahenbuhl -
        Radiant Self Worth, LLC and if you qualify at the point of interview the
        initial Information Pack, or Business Presentation is provided to you
        free of charge.
      </p>
      <p className="pt-2">
        The Business Presentation is provided to you electronically and
        presented in a series of educational video's.
      </p>
      <p className="font-bold pt-2">
        Please read these notice, terms, and conditions (“Terms”) carefully
        before using Our Service
      </p>
      <p className="pt-3">
        BY VISITING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU:
      </p>
      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 pt-3">
        <li>a) HAVE READ THESE TERMS,</li>
        <li>b) UNDERSTAND THESE TERMS, AND</li>
        <li>c) ACCEPT AND AGREE TO BE BOUND BY THEM.</li>
      </ul>
      <p className="">
        You must be at least 18 years old to access this Website or to purchase
        products and/or Services from Us.
      </p>
      <p className="pt-2">
        You agree that you are accessing the Services on Our Website for
        business purposes. If you are using the Service on behalf of an
        organization, You are agreeing to these Terms for that organization and
        confirming now to Melissa Krahenbuhl - Radiant Self Worth, LLC that you
        have the authority to bind said organization to Our Terms of Service (in
        which event, “You” and “Your” will refer to that organization).
      </p>
      <p className="pt-2">
        If you do not agree with these Terms, or are under 18 years old, please
        do not use the Services or Our Website. If at any time you are{" "}
        <span className="font-bold">not willing to be bound </span>by these
        Terms, You should:
      </p>
      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 pt-4">
        <li>a) click the “I do not accept” or similar button,</li>
        <li>b) terminate any download and/or installation process,</li>
        <li>
          c) immediately cease and refrain from accessing or using the program,
          and
        </li>
        <li>d) delete any copies you may have.</li>
      </ul>
      {/* Accounts section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Accounts
      </h3>
      <p>
        Upon approval of your application and invitation and as part of the
        registration or account creation process, You will create personally
        identifying login credentials. Certain personally identifying
        information, such as email address, phone number, billing address and
        even payment information (as may be applicable to particular Services
        which may be offered for sale via this Website), may also be required.
        Such registration information must be accurate and current.
      </p>
      <p className="pt-2">
        The benefits, rights, and obligations afforded under these Terms are
        personal to You. You agree not to assign, sublicense, transfer, pledge,
        sell, lease, rent, lend, or otherwise dispose of the Services and
        materials (including, but not limited to, audio and/or visual
        presentations, documentation, software, printed or digital materials,
        and other elements characterizing Our Services, also known as the
        “Content”) on this Website, or any part of such Content on our
        partnering sites, or share your rights under these Terms to and with
        others.
      </p>
      <p className="pt-2">
        You agree that You will not provide false information to Us in
        generating Your account. Specifically, You agree that you will not
      </p>
      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 pt-4">
        <li>
          (i) select or use the login credentials of another person or company
          with the intent to impersonate that person or company; or
        </li>
        <li>
          (ii) use login credentials in which another person or company has
          rights without such person’s or company’s authorization.
        </li>
      </ul>
      <p className="pt-2">
        Failure to comply with the foregoing shall constitute a breach of these
        Terms, which may result in immediate suspense or termination of your
        account..
      </p>
      <p className="pt-2">
        Only authorized users, who have duly attained access to the Content by
        personally agreeing to these Terms are permitted participation in and
        use of the Services, Content, and related materials. Except as expressly
        authorized by these Terms. You shall not provide or make available any
        Content, or any license key to any third party, or use the Content, or
        any license key, to teach any third party any portion of the Services or
        for any purpose other than exercising rights expressly granted to you by
        these Terms.
      </p>
      <p className="pt-2">
        You are responsible for maintaining the confidentiality of Your login
        credentials. We reserve the right to terminate or suspend Your access to
        the Services if You share Your credentials or transfer such credentials
        to another party.
      </p>
      <p className="pt-2">
        You are responsible for all usage or activity on your account on this
        Website and related Social Media, including use of the account by any
        third party authorized by you to use your login credentials.
      </p>

      {/* Refunds section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Refunds
      </h3>
      <p>
        We have an unconditional 10 day money back guarantee on every service we
        offer. No questions, no hassles. Just your money back within the refund
        period.
      </p>
      {/* No Warranties section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        No Warranties
      </h3>
      <p>
        By accepting these Terms, You agree and understand that We provide
        seminars and business coaching services only and
        <span className="font-bold"> guarantee no specific results. </span>
        You acknowledge that We make no promise or representation that You will
        make a certain amount of money, or any money, or that you will not lose
        money, as a result of using these Services.
      </p>
      <p className="pt-2">
        Any earnings, revenue, or income statements viewable on this Website or
        our related Social Media are based on actual individual results of our
        clients and/or estimates as may be stated.{" "}
        <span className="font-bold">
          There is no guarantee that you will make these levels for
          yourself.{" "}
        </span>
        As with any business, Your results will vary and will be based on your
        personal abilities, experience, knowledge, capabilities, level of
        desire, and an infinite number of variables beyond Our control,
        including some variables that neither We nor You may have anticipated.{" "}
        <span className="font-bold">
          There are no guarantees concerning the level of success You may
          experience. Each person’s results will vary.
        </span>
      </p>
      <p className="pt-2">
        There are unknown risks in any business, particularly with the Internet
        where advances and changes can happen quickly. The use of our
        information, products and services should be based on your own due
        diligence and{" "}
        <span className="font-bold">
          YOU AGREE THAT WE ARE NOT LIABLE FOR YOUR SUCCESS OR FAILURE.
        </span>
      </p>
      <p className="pt-2">
        In accepting these Terms, You acknowledge that{" "}
        <span className="font-bold">
          You take full responsibility for your own success.
        </span>
      </p>
      <p className="pt-2">
        In no event will We be liable to You or any party related to You for any
        damage,
        <span className="font-bold">
          including damages for loss of business profits,
        </span>
        &nbsp;or other pecuniary loss, whether under a theory of contract,
        warranty, tort (including negligence) products liability or otherwise,
        even if We have been advised of the possibility of such damages. As such{" "}
        <span className="font-bold">
          THE SERVICES, CONTENT AND ALL DOWNLOADABLE SOFTWARE ARE DISTRIBUTED AS
          AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
          IMPLIED, INCLUDING WITHOUT LIMITATION, WARRANTIES OF TITLE OR IMPLIED
          WARRANTIES OF MERCHANTABILTY OR FITNESS FOR A PARTICULAR PURPOSE.
        </span>
      </p>
      <p className="font-bold pt-2">
        YOU HEREBY ACKNOWLEDGE THAT USE OF THE SERVICES IS AT YOUR OWN RISK.
      </p>
      <p className="pt-2">
        Limitations herein described shall be applied to the greatest extent
        enforceable under applicable law.
      </p>
      {/* Consent To Use Information section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Consent To Use Information
      </h3>
      <p>
        By accepting these Terms, you agree that We may collect, use and
        disclose your identifying information obtained as a result of Your
        membership, for the following purposes:
      </p>
      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 pt-4">
        <li>(i) the processing of this membership application; and</li>
        <li>
          (ii) the administration of the membership with our organization.
        </li>
      </ul>
      <p className="">
        Please visit the&nbsp;
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateToPrivacy) onNavigateToPrivacy();
          }}
          className="text-[#a88d52] underline hover:text-opacity-80 cursor-pointer"
        >
          Privacy Policy
        </button>
        &nbsp;for further details on our data protection policy, including how
        You may access and correct your personal information or withdraw consent
        to the collection, use or disclosure of your personal information.
      </p>
      <p className="pt-2">
        Additionally when You communicate with Us, send Us information, or
        provide Content to Us, You grant Us a non-exclusive, worldwide,
        perpetual, royalty-free right to exercise all copyright and publicity
        rights that You have in such Content, in any manner whatsoever, in any
        media now known or which may be created in the future, as relates to
        this Website, the Services, and related Social Media.
      </p>
      {/* Intellectural Property Statement section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Intellectual Property Statement
      </h3>
      <p>
        The contents of the Services, including the Website, Content, and other
        materials made available via related Social Media, are protected by
        United States copyright, trademark and other intellectual property laws
        and international treaties and owned or controlled by To The Good Life,
        or the party credited as the provider of the Content. You agree to abide
        by all additional copyright notices, information, or restrictions
        contained in any Content accessed through the Services.
      </p>
      <p className="pt-2">
        By accepting these Terms, You further acknowledge and agree that We and
        Our third party licensors own and shall continue to own all right,
        title, and interest in and to the Content and other elements of Our
        Services, including associated intellectual property rights under
        copyright, trade secret, patent, or trademark laws.
      </p>
      <p className="pt-2">
        Except for any limited, revocable license expressly granted to you
        herein,{" "}
        <span className="font-bold">
          these Terms do not grant you any ownership or other right or interest
          in or to the Content and/or other elements of the Services, or any
          other intellectual property rights of Ours
        </span>
        , whether by implication, estoppel, or otherwise. Any and all trademarks
        or service marks that We use in connection with the Services are marks
        owned by Us. These Terms do not grant you any right, license, or
        interest in such marks, and you shall not assert any right, license, or
        interest in such marks or any words or designs that are confusingly
        similar to such marks.
      </p>
      <p className="pt-2">
        You may not modify, publish, transmit, participate in the transfer or
        sale of, reproduce (except where expressly permitted for the storage of
        downloadable material), create new works from, distribute, perform,
        display, or in any way exploit, any of the Content or the Services
        (including software) in whole or in part.
      </p>
      {/* Termination section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Termination
      </h3>
      <p>
        We may elect to terminate the Services on this Website at Our discretion
        without notice to You or any liability for any reasons whatsoever,
        including without limitation, if You breach these Terms. You may
        terminate any account You establish via this website at any time upon
        written notice to Us.
      </p>
      {/* Miscellaneous section */}
      <h3 className="hidden text-center font-semibold text-base text-gray-700 pt-8">
        Miscellaneous
      </h3>
      <p>
        These Terms may not be modified or amended orally, impliedly, or in any
        manner not set forth in a duly executed writing or otherwise permitted
        by these Terms.
      </p>
      <p className="hidden pt-2">
        We reserve the right to modify, terminate, or otherwise amend Services
        available via this Website and related Social Media accounts. We may, in
        the future, offer new and/or different services and/or features through
        its Website and associated Social Media accounts. Such new features
        and/or services shall be subject to these Terms.
      </p>
      <p className="hidden pt-2">
        Our failure to enforce any rights granted by these Terms or to take
        action against any other party in the event of any breach shall not be
        deemed a waiver by Us as to subsequent enforcement of rights or
        subsequent actions in the event of future breaches.
      </p>
      <p className="hidden pt-2">
        These Terms in all respects shall be governed by and construed according
        to the laws of the State of California. The venue for any dispute shall
        be in the County of San Diego County.
      </p>
      <p className="hidden pt-2">
        This Agreement is entered into in San Marcos, California. You agree and
        consent to the exclusive jurisdiction and venue of the state of
        California and North County region of San Diego County for any dispute
        arising from or related to this Agreement.
      </p>
      <p className="hidden pt-2">
        Should any part of these Terms be declared void or unenforceable, that
        term shall be severed from these Terms and such declaration shall have
        no effect on the enforceability of the remaining terms.
      </p>

      {/* Upper Section: Contact Information */}
      <div className="bg-earth/5 border-t border-gray-100 mt-18">
        <div className="brightness-60 font-serif text-[36px] font-base tracking-[0.1em] text-radiant mt-16 mb-4 text-center">
          Contact Melissa
        </div>

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center text-radiant gap-x-12 gap-y-6 px-4 pt-0 pb-12">
          <a
            href="mailto:radiantselfworth@gmail.com"
            className="flex items-center gap-2 brightness-[40%] hover:opacity-80 transition-opacity tracking-wide"
          >
            <Mail size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">
              radiantselfworth@gmail.com
            </span>
          </a>

          <a
            href="tel:847-208-0978"
            className="flex items-center gap-2 brightness-[40%] hover:opacity-80 transition-opacity tracking-wide"
          >
            <Phone size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">847-208-0978</span>
          </a>

          <a
            href="https://radiantselfworth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 brightness-[40%] hover:opacity-80 transition-opacity tracking-wide"
          >
            <MapPin size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">
              www.radiantselfworth.com
            </span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 pb-14 w-full">
          {/* Updated with inline-flex, whitespace-nowrap, and gap-2 to prevent wrapping */}
          <a
            href="https://calendly.com/radiantselfworth/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap pl-10 pr-6 py-2 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800"
          >
            Let's Get Started <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
