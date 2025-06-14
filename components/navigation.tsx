"use client"

import Link from "next/link"
import { Grid3X3 } from "lucide-react"

export function Navigation() {
  return (
    <nav className="flex justify-end items-center p-4 text-[13px]">
      <div className="flex items-center space-x-4">
        {/* Navigation Links */}
        <Link
          href="https://mail.google.com"
          className="text-[#202124] hover:underline transition-all duration-200 font-arial"
        >
          Gmail
        </Link>
        <Link
          href="https://images.google.com"
          className="text-[#202124] hover:underline transition-all duration-200 font-arial"
        >
          Images
        </Link>

        {/* Google Apps Menu */}
        <button
          className="p-2 rounded-full hover:bg-[rgba(60,64,67,0.08)] transition-colors duration-200"
          aria-label="Google apps"
          title="Google apps"
        >
          <Grid3X3 className="w-6 h-6 text-[#5f6368]" />
        </button>

        {/* Sign In Button */}
        <button className="bg-[#1a73e8] text-white px-6 py-2 rounded-[4px] hover:bg-[#1557b0] hover:shadow-[0_1px_2px_0_rgba(66,133,244,0.3),0_1px_3px_1px_rgba(66,133,244,0.15)] transition-all duration-200 font-medium text-[14px] font-arial">
          Sign in
        </button>
      </div>
    </nav>
  )
}
