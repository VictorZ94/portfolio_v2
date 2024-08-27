import { Facebook, Twitter, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto relative p-4 mt-16">
      <div className="w-full absolute top-[-90px]">
        <div className="flex items-center mb-8">
          <div className="flex-grow h-0.5 bg-yellow-500"></div>
          <h2 className="text-5xl dark:text-white text-center mx-3 font-bold font-serif">
            Contact me
          </h2>
          <div className="flex-grow h-0.5 bg-yellow-500"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white p-4">
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-yellow-500">example@email.com</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center">
              <Phone className="w-6 h-6 mr-2 text-yellow-500" />
              <span className="text-yellow-500">(123) 456-7890</span>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center mb-8">
            <svg
              className="w-6 h-6 mr-2 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-yellow-500">City, Country</span>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-yellow-500"></div>
            <div className="flex space-x-4 px-4">
              <Facebook className="w-6 h-6 text-yellow-500" />
              <Twitter className="w-6 h-6 text-yellow-500" />
              <Linkedin className="w-6 h-6 text-yellow-500" />
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex-grow h-px bg-yellow-500"></div>
          </div>

          <div className="text-center text-yellow-500 text-xl font-semibold">
            {'"Thanks for Scrolling"'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
