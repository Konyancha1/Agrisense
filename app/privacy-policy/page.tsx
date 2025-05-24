import Link from "next/link";
import banner from '../../assets/images/agricultureBG.jpg';
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | AgriSense",
  description: "Learn how AgriSense collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
                    <span>Privacy Policy</span>
                </nav>
                <h1 className="text-3xl font-bold">PRIVACY POLICY</h1>
            </div>
        </section>
        <main className="max-w-4xl mx-auto px-4 py-10">
            <p className="mb-4">
                Last updated: May 23, 2025 <br />
                This Privacy Policy describes Agrisense Technologies Limited (&ldquo;Agrisense&rdquo;)&#8217;s policies and procedures on the collection, use and disclosure of Your information when You use the website https://www.agrisensetech.com/ (&lsquo;the Platform&rdquo;) and tells You about Your privacy rights and how the law protects You.
                Agrisense built the Agrisense software as a Free software. This Service is provided by Agrisense Technologies Ltd. at no cost and is intended for use as is. 
                This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.
                If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Agrisense unless otherwise defined in this Privacy Policy.
                We use Your personal data to provide and improve the Platform. By using the Platform, You hereby agree to the collection and use of information in accordance with this Privacy Policy. 
            
                All use of your personal data is in strict compliance with the Rwanda Law No. 058/2021 of 13/10/2021 and related applicable regulations. 
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">Interpretation and Definitions </h2>
            <h3 className="text-xl font-semibold">Interpretation </h3>
            <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mb-2">Interpretation </h3>
            <p className="mb-4">
                For the purposes of this Privacy Policy:
            </p>
            <ul className="mb-4 list-disc list-inside">
                <li>
                    <strong>You</strong> means the individual accessing or using the Platform, or the company,
                    or other legal entity on behalf of which such individual is accessing or using the Platform,
                    as applicable.
                </li>
                <li>
                    <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                    Agreement) refers to Agrisense Technologies Ltd., located at 42 KN 40 St, Kigali, Rwanda.
                </li>
                <li>
                    <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means
                    ownership of fifty percent (50%) or more of the shares, equity interest, or other securities entitled to vote for election of directors or
                    other managing authority.
                </li>
                <li>
                    <strong>Account</strong> means a unique account created for You to access our Platform or parts of our Platform.
                </li>
                <li>
                    <strong>Website</strong> refers to the site created, run, and operated by Us, accessible from
                    <a
                    href="https://www.agrisensetech.com/"
                    className="text-blue-600 hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    https://www.agrisensetech.com/
                    </a>
                </li>
                <li>
                    <strong>Platform</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                    Agreement) refers to Agrisense Technologies Ltd., located at 42 KN 40 St, Kigali, Rwanda.
                </li>
                <li>
                    <strong>Country</strong> refers to: The Republic of Rwanda.
                </li>
                <li>
                    <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Platform, to provide the Platform on behalf of the Company, to perform services related to the Platform, or to assist the Company in analyzing how the Platform is used.
                </li>
                <li>
                    <strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Platform.
                </li>
                <li>
                    <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                </li>
                <li>
                    <strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                </li>
            </ul>

            <p className="mb-4">
                Usage Data refers to data collected automatically, either generated by the use of the Platform or from the Platform infrastructure itself (for example, the duration of a page visit).
            </p>
            <h2 className="text-xl font-semibold mb-2">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-semibold">Types of Data Collected</h3>
            <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
            <p className="mb-2">
                While using Our Platform, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="mb-4 list-disc list-inside">
                <li>
                    First name and last name&#59;
                </li>
                <li>
                    National Identity Card Number&#59;
                </li>
                <li>
                    Bank Account Information&#59;
                </li>
                <li>
                    Email address&#59;
                </li>
                <li>
                    Phone number&#59;
                </li>
                <li>
                    Address, State, Province, ZIP/Postal code, City&#59;
                </li>
                <li>
                    Usage Data&#59;
                </li>
                <li>
                    Geolocation data
                </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
            <p className="mb-2">
                You directly provide our Company with most of the data we collect. We collect data automatically when You use our Platform and process data when You&#58;
            </p>
            <ul className="mb-2 list-disc list-inside">
                <li>
                    Register online or place an order for any of our products or services on the Platform.
                </li>
                <li>
                    Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.
                </li>
                <li>
                    Use or view our website via Your browser&rsquo;s cookies.
                </li>
            </ul>
            <p className="mb-2">
                Usage Data is collected automatically when using the Platform. Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Platform that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p className="mb-2">
                When You access the Platform by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            </p>
            <p className="mb-2">
                We may also collect information that Your browser sends whenever You visit our Platform or when You access the Platform by or through a mobile device.
            </p>

            <h2 className="text-xl font-semibold mb-2">How Will We Use Your Personal Data&#63;</h2>
            <p className="mb-2">
                The Company may use Personal Data for the following purposes&#58;
            </p>
            <ul className="mb-2 list-disc list-inside">
                <li>
                    To provide and maintain our Platform, including to monitor the usage of our Platform.
                </li>
                <li>
                    To verify Your identity through an authentication mechanism.
                </li>
                <li>
                    To manage Your Account&#58; to manage Your registration as a user of the Platform. The Personal Data You provide can give You access to different functionalities of the Platform that are available to You as a registered user.
                </li>
                <li>
                    For the performance of a contract&#58; the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Platform.
                </li>
                <li>
                    To contact You&#58; To contact You by email, telephone calls, SMS, whatsapp or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                </li>
                <li>
                    To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that You have already purchased or enquired about unless You have opted not to receive such information.
                </li>
                <li>
                    To manage Your requests&#58; To attend and manage Your requests to Us.
                </li>
            </ul>
            <p className="mb-2">
                We may share your personal information under the following circumstances&#58;
            </p>
            <ul className="mb-2 list-disc list-inside">
                <li>
                    With Service Providers&#58; We may share Your personal information with Service Providers to monitor and analyze the use of our Platform, to show advertisements to You to help support and maintain Our Platform, to contact You, to advertise on third party websites to You after You visited our Platform or for payment processing.
                </li>
                <li>
                    For Business transfers&#58; We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
                <li>
                    With Authentication Authorities&#58; We may share Your information with relevant and appropriate authentication authorities in order to properly identify Your identity.
                </li>
                <li>
                    With Affiliates&#58; We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                </li>
                <li>
                    With Business partners&#58; We may share Your information with Our business partners to offer You certain products, services or promotions.
                </li>
            </ul>

            <p className="mb-2">
                With other users&#58; when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
            </p>

            <h2 className="text-xl font-semibold mb-2">Retention of Your Personal Data</h2>
            <p className="mb-2">
            We retain your Personal Data only as long as necessary for the purposes outlined in this policy. This includes compliance with legal obligations, dispute resolution, and enforcement of agreements.
            </p>
            <p className="mb-2">
            Usage Data is typically retained for a shorter duration unless required for improving security or platform functionality, or due to legal obligations.
            </p>

            <h2 className="text-xl font-semibold mb-2">Transfer of Your Personal Data</h2>
            <p className="mb-2">
                Your Personal Data may be processed and stored outside your state, province, or country, where data protection laws may differ.
            </p>
            <p className="mb-2">
                By using the Platform and submitting your information, you consent to this transfer. We take reasonable steps to ensure your data is treated securely and in line with this Privacy Policy, including ensuring adequate safeguards for cross-border data transfers.
            </p>
            <p className="mb-2">
                <strong>Google Analytics</strong>: We use Google Analytics to understand website usage. This involves cookies that may transmit usage data to servers in the U.S. Google uses this data to provide reports and related services to us.
            </p>

            <h2 className="text-xl font-semibold mb-2">Disclosure of Your Personal Data</h2>
            <h3 className="text-xl font-semibold mb-2">Business Transactions</h3>
            <p className="mb-2">
                If the Company undergoes a merger, acquisition, or asset sale, your Personal Data may be transferred. You will be notified before it becomes subject to a new privacy policy.
            </p>

            <h3 className="text-xl font-semibold mb-2">Law Enforcement</h3>
            <p className="mb-2">
                We may disclose your Personal Data if legally required or in response to valid requests by public authorities (e.g., courts or government agencies).
            </p>

            <h3 className="text-xl font-semibold mb-2">Other Legal Requirements</h3>
            <p className="mb-2">
                We may disclose your Personal Data in good faith when necessary to:
            </p>
            <ul className="mb-4 list-disc list-inside">
                <li>Comply with legal obligations;</li>
                <li>Protect our rights or property;</li>
                <li>Prevent or investigate potential misuse of the Platform;</li>
                <li>Ensure the safety of users or the public;</li>
                <li>Defend against legal claims.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Your Data Protection Rights&#8203;</h3>
            <p className="mb-2">
            Our Company undertakes to keep You fully informed and aware of all Your data protection rights. Every User is entitled to the following:
            </p>
            <ul className="mb-2 list-disc list-inside">
            <li>
                The Right to Access – You have the right to request our Company for copies of your personal data. A small fee may be chargeable for this service.
            </li>
            <li>
                The Right to Rectification – You have the right to request that our Company correct any information You believe is inaccurate. You also have the right to request our Company to complete information You believe to be incomplete.  Please note that the right to rectification cannot be used for information that is not factual (e.g. opinions).
            </li>
            <li>
                The Right to Erasure (&ldquo;the right to be forgotten&rdquo;) – Where there is no substantial reason to continue holding Your personal data You have the right to request that our Company erase such data. If our Company still requires the personal data for a valid legal or other justifiable basis these requests may be rejected.
            </li>
            <li>
                The Right to Restrict Processing – You have the right to request that our Company restrict the processing of Your personal data where You believe the same is not accurate. Processing can restart when the accuracy of the personal data has been verified.
            </li>
            <li>
                The Right to Object to Processing – You have the right to object to our Company&rsquo;s processing of Your personal data. Please note that where the right to object is applicable the Company may be able to continue processing of Your personal data if it can demonstrate a compelling reason/s for doing so. Please note however that at all times You have an absolute right to stop Your personal data being used for direct marketing.
            </li>
            <li>
                The Right to Data Portability – You have the right to request that our Company transfer the data that we have collected to another organization, or directly to You, under certain conditions. Please note This right only applies where Your personal data is processed electronically. This does not apply to paper records or electronic data created by the Company.
            </li>
            </ul>

            <p className="mb-2">
            If You make such a request, we shall respond to You within thirty (30) days. If You wish to exercise any of these rights, please contact Us using Our given details at the end of this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold mb-2">Security of Your Personal Data &#8203;</h3>
            <p className="mb-2">
            `The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use all commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-semibold mb-2">Children&#39;s Privacy</h2>
            <p className="mb-2">
                Our Platform does not address anyone under the age of eighteen (18) We do not knowingly collect personally identifiable information from anyone under the age of eighteen (18) without the express written consent of their parent or guardian. If You are a parent or guardian and You are aware that Your child or ward has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of eighteen (18) without verification of parental or guardian consent, We shall take steps to remove that information from Our servers. 
                We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old. In some cases, this means We will be unable to provide certain functionality of the Platform to these users. 
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent or guardian, We may require Your parent or guardian&#39;s consent before We collect and use that information.
            </p>

            <h2 className="text-xl font-semibold mb-2">Links to Other Websites</h2>
            <p className="mb-2">
                Our Platform may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party&#39;s site. We strongly advise You to review the Privacy Policy of every site You visit. 
                We have no control over and assume no responsibility or liability for the content, privacy policies or practices of any third-party sites or services.
            </p>

            <h2 className="text-xl font-semibold mb-2">Changes to this Privacy Policy</h2>
            <p className="mb-2">
                We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.&#8203;
                Further, we will let You know via email and/or a prominent notice on Our Platform, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
        </main>

        <Footer />
    </>
  );
}
