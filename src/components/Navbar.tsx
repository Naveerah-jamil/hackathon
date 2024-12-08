import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 py-4 sm:px-8 md:px-16 lg:px-24">
        {/* Left side: Navigation Links */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <ul className="flex space-x-8">
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/Carts">Shop</Link>
            </li>
            <li>
              <Link href="/SingleProduct">Product</Link>
            </li>
            <li>
              <Link href="/Products">Pages</Link>
            </li>
            <li>
              <Link href="/AboutUs">About</Link>
            </li>
          </ul>
        </div>

        {/* Right side: Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="text-[#636270] font-Inter font-[500] text-[14px] leading-[15.4px] hidden sm:block">
            Contact:
          </div>
          <div className="text-black font-Inter font-[500] text-[14px] leading-[15.4px]">
            (808) 555-0111
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu (hidden on larger screens) */}
      <div className="sm:hidden flex justify-between items-center px-4 py-4">
        <div className="text-black font-Inter font-[500] text-[16px]">
          Contact: (808) 555-0111
        </div>
        {/* Placeholder for hamburger menu (could be implemented later for mobile nav) */}
        <div className="space-y-2">
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>
    </div>
  );
}
