"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f2f2f2] mt-auto">
      {/* Country */}
      <div className="px-7 py-4 text-[#70757a] text-[15px] border-b border-[#dadce0] font-arial">India</div>

      {/* Footer Links */}
      <div className="px-7 py-4 flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
        {/* Left Links */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-7 text-[14px] text-[#70757a] font-arial">
          <Link href="https://about.google" className="hover:underline transition-all duration-200">
            About
          </Link>
          <Link href="https://ads.google.com" className="hover:underline transition-all duration-200">
            Advertising
          </Link>
          <Link
            href="https://www.google.com/intl/en_in/business/"
            className="hover:underline transition-all duration-200"
          >
            Business
          </Link>
          <Link
            href="https://www.google.com/search/howsearchworks/"
            className="hover:underline transition-all duration-200"
          >
            How Search works
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-7 text-[14px] text-[#70757a] font-arial">
          <Link href="https://policies.google.com/privacy" className="hover:underline transition-all duration-200">
            Privacy
          </Link>
          <Link href="https://policies.google.com/terms" className="hover:underline transition-all duration-200">
            Terms
          </Link>
          <Link href="https://www.google.com/preferences" className="hover:underline transition-all duration-200">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  )
}
