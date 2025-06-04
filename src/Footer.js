import { Github, Linkedin, Mail, ArrowUpFromLine } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-midnight text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Sol: Telif hakkı veya isim */}
        <div className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Dr. Tekgül Kalaycı
        </div>

        {/* Orta: İletişim ikonları */}
        <div className="flex space-x-4 text-white text-xl">
          <a
            href="https://github.com/kullaniciadi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kullaniciadi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ornek@mail.com"
            className="hover:text-gray-300 transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Sağ: Scroll to Top */}
        {/* 
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center space-x-1 hover:text-gray-300 transition"
        >
          <ArrowUpFromLine size={20} />
          <span className="text-sm">Back to Top</span>
        </button>
        */}
      </div>
    </footer>
  );
}