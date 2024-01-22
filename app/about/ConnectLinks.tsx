import { FaInstagram, FaTwitter } from "react-icons/fa";

const ConnectLinks = () => {
  const connectLinks = [
    {
      label: "Twitter/X",
      href: "https://twitter.com/daisukjp",
      icon: <FaTwitter />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/daisukjp/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <>
      {connectLinks.map((link) => (
        <li className="transition-opacity col-span-1" key={link.label}>
          <a
            href={link.href}
            className="underline underline-offset-4 transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
            target="__blank"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{link.icon}</span>
              {link.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};
export default ConnectLinks;
