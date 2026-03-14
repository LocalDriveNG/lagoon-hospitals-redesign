import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Privacy Policy</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg font-body text-foreground space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Iwosan Lagoon Hospitals ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Medical and health information when you book appointments or use our services</li>
                <li>Payment and billing information</li>
                <li>Communication records when you contact us</li>
                <li>Website usage data through cookies and analytics tools</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Provide, maintain, and improve our healthcare services</li>
                <li>Process appointments and communicate with you about your care</li>
                <li>Send you relevant health information and updates</li>
                <li>Comply with legal obligations and medical regulations</li>
                <li>Improve our website and user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-card rounded-xl p-6 mt-4">
                <p className="font-body text-primary font-medium">Iwosan Lagoon Hospitals</p>
                <p className="text-muted-foreground mt-1">Email: <a href="mailto:livemorelife@lagoonhospitals.com" className="text-gold hover:underline">livemorelife@lagoonhospitals.com</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+2347086393027" className="text-gold hover:underline">+234 708 639 3027</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
