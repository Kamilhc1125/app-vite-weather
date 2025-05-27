import { socialData } from "@/constants";

const Footer = () => {
  return (

    <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-center mx-auto px-4 text-center text-md text-gray-400">
        <p className="mr-2">Made {new Date().getFullYear()} by Kamil Małaszewicz </p>

        {socialData.map((item, index) => {

          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              className="hover:opacity-70 mr-1 text-lg"
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer;
