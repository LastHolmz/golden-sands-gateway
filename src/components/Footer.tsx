import Logo from "@/assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 gold-gradient" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
               <div className="w-64">
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          </div>
          
          {/* Company Name */}
          
          
          {/* Divider */}
          <div className="section-divider mb-8" />
          
          {/* Closing Text */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            اختياركم لنا هو بداية رحلة ناجحة في قطاع النفط والغاز في ليبيا...
          </p>
          
          {/* Social Icons */}
          {/* <div className="flex justify-center gap-4 mb-12">
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
          </div> */}


          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} رمال زلالف الذهبية للخدمات النفطية. جميع الحقوق محفوظة.
            </p>
          <p className="text-foreground/40 text-sm mt-2">التصميم والتنفيذ بواسطة <a href="https://mnfd.ly" target="_blank" rel="noopener noreferrer" className=" font-bold hover:underline font-medium">منفذ</a></p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
