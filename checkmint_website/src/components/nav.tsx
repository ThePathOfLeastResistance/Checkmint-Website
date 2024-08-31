import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <main className="mx-12 overflow-x-hidden bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <LogoSvg className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </h1>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white bg-blue-700 rounded md:p-0 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const LogoSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="64"
      height="53"
      viewBox="0 0 64 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.8784 33.5195C39.8727 36.4939 41.8608 40.6879 41.1815 41.9044C40.5023 43.1211 38.5963 43.2611 34.7846 43.5412L33.7986 43.6137C32.7153 43.6932 32.1739 43.7331 31.7003 43.9671C31.2267 44.2014 30.8752 44.6034 30.1716 45.4079L29.5311 46.1401C27.0553 48.9702 25.8174 50.3853 24.4054 50.2031C22.9934 50.0213 22.3424 48.3627 21.0403 45.0458L20.7035 44.1875C20.3334 43.245 20.1484 42.7738 19.785 42.4316C19.4216 42.0896 18.9208 41.9155 17.9193 41.5671L17.0075 41.2503C13.4833 40.0246 11.7211 39.412 11.5278 38.0829C11.3344 36.754 12.8379 35.5892 15.8449 33.2589L16.6229 32.6561C17.4774 31.9939 17.9047 31.6628 18.1535 31.2173C18.4024 30.7716 18.4446 30.2619 18.5292 29.2424L18.6062 28.3144C18.9038 24.7269 19.0526 22.9331 20.3451 22.2937C21.6376 21.6544 23.2179 22.5928 26.3784 24.4697L27.196 24.9551C28.0943 25.4887 28.5433 25.7554 29.0605 25.8221C29.5776 25.8887 30.1046 25.7476 31.1582 25.4658L32.1176 25.2092C35.8258 24.2176 37.6799 23.7216 38.6722 24.6555C39.6644 25.5894 38.932 30.0297 37.8784 33.5195Z"
        stroke="#212A3E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M61.4668 47.955C60.0025 51.0527 55.5837 51.6886 49.5719 50.2188M61.4668 47.955C63.0604 44.5841 61.0192 38.7476 56.1827 32.5169M61.4668 47.955C59.5832 51.9399 52.8112 51.8509 44.0478 48.4474M61.4668 47.955C64.0645 42.4602 52.9889 24.5569 40.5152 14.1837C26.1669 5.27881 5.43689 0.78936 2.72234 6.53176M2.72234 6.53176C1.12877 9.90281 3.35176 15.5163 8.18836 21.7471M2.72234 6.53176C4.18674 3.43394 8.60543 2.79852 14.6173 4.26809M2.72234 6.53176C0.609768 11.0008 3.01157 17.0443 11.5113 25.6095"
        stroke="#212A3E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M47.8293 1C47.8293 1 49.1268 3.85223 50.7264 4.83332C52.326 5.81421 55.4565 5.67742 55.4565 5.67742C55.4565 5.67742 52.6043 6.97495 51.6232 8.57456C50.6423 10.1742 50.7791 13.3047 50.7791 13.3047C50.7791 13.3047 49.4816 10.4525 47.882 9.47136C46.2824 8.49048 43.1519 8.62726 43.1519 8.62726C43.1519 8.62726 46.0041 7.32973 46.9851 5.73012C47.9661 4.13052 47.8293 1 47.8293 1Z"
        stroke="#212A3E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
