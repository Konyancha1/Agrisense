import Link from "next/link";
import banner from '../../assets/images/agricultureBG.jpg';
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions | AgriSense",
  description: "Please read our terms and conditions before using AgriSense.",
};

export default function TermsPage() {
  return (
    <>
        <section
            className="relative h-64 flex items-center justify-center text-white"
            style={{
                background: `url(${banner.src}) no-repeat center center`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
                <nav className="text-sm mb-2">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span className="mx-2"> &gt; </span>
                    <span>Terms of Service</span>
                </nav>
                <h1 className="text-3xl font-bold">TERMS OF SERVICE</h1>
            </div>
        </section>
        <main className="max-w-4xl mx-auto px-4 py-10">
            <p className="mb-4">
                This website is operated by Agrisense Technologies LTD.. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Agrisense Technologies LTD..
                Agrisense Technologies LTD. offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon
                your acceptance of all terms, conditions, policies and notices stated here. By visiting our site and/ or purchasing something from us, you engage in our
                &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions (&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including those additional terms and conditions and
                policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are
                browsers, vendors, customers, merchants, and/ or contributors of content.
            </p>

            <p className="mb-4">
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page.
            </p>

            <p className="mb-4">
                We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 1 - ONLINE STORE TERMS </h2>
            <p className="mb-4">
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 2 - GENERAL CONDITIONS</h2>
            <p className="mb-4">
                We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
            <p className="mb-4">
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
            <p className="mb-4">
                Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 5 - OPTIONAL TOOLS</h2>
            <p className="mb-4">
                We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). We may also, in the future, offer new Services and/or features through the website (including, the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 6 - THIRD-PARTY LINKS</h2>
            <p className="mb-4">
                Certain content, products and Services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties. We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party&apos;s policies and practices and make sure you understand them before connection with any third-party websites. Please review carefully the third-party&apos;s policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 7 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
            <p className="mb-4">
                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, &#39;comments&#39;), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party&rsquo;s intellectual property or these Terms of Service. You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 8 - PERSONAL INFORMATION</h2>
            <p className="mb-4">
                Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy, please see <a href="https://www.agrisensetech.com/privacy-policy" className="text-blue-600 underline">https://www.agrisensetech.com/privacy-policy</a>.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 9 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
            <p className="mb-4">
                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to you through the service are (except as expressly stated by us) provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. In no case shall Agrisense Technologies LTD., our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 10 - INDEMNIFICATION</h2>
            <p className="mb-4">
                You agree to indemnify, defend and hold harmless Agrisense Technologies LTD. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys&rsquo; fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 11 - SEVERABILITY </h2>
            <p className="mb-4">
                In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 12 - TERMINATION </h2>
            <p className="mb-4">
                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 13 - ENTIRE AGREEMENT </h2>
            <p className="mb-4">
                The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 14 - GOVERNING LAW </h2>
            <p className="mb-4">
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Rwanda.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 15 - CHANGES TO TERMS OF SERVICE </h2>
            <p className="mb-4">
                You can review the most current version of the Terms of Service at any time on this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">SECTION 16 - CONTACT INFORMATION </h2>
            <p className="mb-4">
                Questions about the Terms of Service should be sent to us at info@agrisensetech.com.
            </p>
        </main>

        <Footer />
    </>
  );
}
