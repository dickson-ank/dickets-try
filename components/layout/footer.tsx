import Link from "next/link";
import { MdLanguage, MdEmail, MdChat } from "react-icons/md";

const footerLinks = {
  Explore: ["All Events", "Popular Cities", "Featured Artists", "Concerts"],
  Account: ["Profile", "My Tickets", "Saved Events", "Settings"],
  Support: ["Help Center", "Terms of Service", "Privacy Policy", "Contact Us"],
};

const bottomLinks = ["Explore", "Tickets", "Saved", "Profile"];

export default function Footer() {
  return (
    <footer className="bg-layer-01 border-t border-border">
      <div className="container-lg py-sp-10">
        <div className="grid grid-cols-1 gap-sp-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="stack-md">
            <div className="stack-xs">
              <span className="text-h4 font-bold text-primary">Dickets</span>
              <p className="text-caption max-w-[220px]">
                The premier destination for discovering and experiencing the
                vibrant pulse of events across Africa.
              </p>
            </div>
            <div className="inline-cluster">
              {[MdLanguage, MdEmail, MdChat].map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-layer-02 text-primary transition-all-fast hover:border-primary hover:shadow-sm"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="stack-sm">
              <span className="text-overline">{heading}</span>
              <ul className="stack-sm">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground no-underline hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-lg flex items-center justify-between py-sp-5">
          <span className="text-caption">
            © 2024 Dickets Inc. All rights reserved.
          </span>
          <div className="inline-cluster gap-sp-5">
            {bottomLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-overline no-underline hover:text-foreground transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
