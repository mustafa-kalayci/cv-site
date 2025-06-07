import { Home } from "lucide-react";
import { Link } from "react-router-dom";
export default function Nav() {
  const items = [
    { label: "Research interest", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "Conferences and Talks", path: "/conandtalks" },
    { label: "CV", path: "/cv" },
    { label: "Contact Information", path: "/contact" },
  ];

  return (
    <nav className="bg-midnight    px-6 py-4 shadow-md">
      <ol className="flex flex-wrap justify-center items-center space-x-20 text-sm text-white font-semibold">
        <li className="flex items-center">
          <a href="#"><Link to="/">
            <Home
              size={18}
              className="mr-2 hover:text-purple-300 transition duration-200"
            />
          </Link></a>
        </li>
        {items.map((item, index) => (
           <li key={index} className="flex items-center">
            
            <Link
              to={item.path}
              className="relative px-2 py-1 hover:text-purple-800 hover:bg-white transition duration-200 rounded"
            >
              {item.label}
             
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}