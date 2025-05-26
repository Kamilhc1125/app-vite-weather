import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-center mx-auto px-4 text-center text-md text-gray-400">
        <p className="mr-2">Made {new Date().getFullYear()} by Kamil Małaszewicz </p>
        <a
          href="https://www.facebook.com/kamil.malaszewicz/"
          target="_blank"
          className="hover:opacity-70 mr-1 text-lg"

        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/kamil-malaszewicz/"
          target="_blank"
          className="hover:opacity-70 mr-1 text-lg"

        >
          <FaLinkedin />
        </a>

      </div>
    </footer>
  )
}

export default Footer;
