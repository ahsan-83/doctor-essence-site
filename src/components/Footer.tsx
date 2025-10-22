const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Sarah Mitchell</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Board Certified Internal Medicine Specialist providing comprehensive, 
                compassionate care for over 15 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Dr. Sarah Mitchell, MD, FACP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
