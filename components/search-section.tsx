"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Mic, Camera } from "lucide-react"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus the search input on page load (like real Google)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simulate Google search - in real implementation, this would redirect to Google search results
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank")
    }
  }

  const handleLuckySearch = () => {
    if (searchQuery.trim()) {
      // Simulate "I'm Feeling Lucky" - in real implementation, this would redirect to the first result
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&btnI=1`, "_blank")
    }
  }

  const handleVoiceSearch = () => {
    // Voice search functionality would be implemented here
    console.log("Voice search activated")
  }

  const handleImageSearch = () => {
    // Image search functionality would be implemented here
    console.log("Image search activated")
  }

  return (
    <div className="w-full">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative mx-auto max-w-xl">
          <div
            className={`flex items-center bg-white border rounded-full px-4 py-3 transition-all duration-200 ${
              isFocused
                ? "shadow-[0_2px_5px_1px_rgba(64,60,67,.16)] border-transparent"
                : "shadow-[0_2px_5px_1px_rgba(64,60,67,.16)] border-transparent hover:shadow-[0_2px_8px_1px_rgba(64,60,67,.24)]"
            }`}
          >
            <Search className="w-5 h-5 text-[#9aa0a6] mr-3 flex-shrink-0" />

            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 text-base text-[#202124] bg-transparent outline-none font-arial"
              placeholder=""
              autoComplete="off"
              role="combobox"
              aria-expanded="false"
              aria-label="Search"
              spellCheck="false"
              data-ved="0ahUKEwjQ4..."
            />

            <div className="flex items-center space-x-3 ml-3">
              <button
                type="button"
                onClick={handleVoiceSearch}
                className="p-2 rounded-full hover:bg-[#f8f9fa] transition-colors duration-200 flex-shrink-0"
                aria-label="Search by voice"
                title="Search by voice"
              >
                <Mic className="w-6 h-6 text-[#4285f4]" />
              </button>

              <button
                type="button"
                onClick={handleImageSearch}
                className="p-2 rounded-full hover:bg-[#f8f9fa] transition-colors duration-200 flex-shrink-0"
                aria-label="Search by image"
                title="Search by image"
              >
                <Camera className="w-6 h-6 text-[#4285f4]" />
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Search Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-[#f8f9fa] text-[#3c4043] px-5 py-2 rounded text-sm border border-[#f8f9fa] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)] hover:bg-[#f8f9fa] hover:border-[#dadce0] hover:text-[#202124] transition-all duration-200 font-arial min-w-[54px] text-center"
        >
          Google Search
        </button>

        <button
          onClick={handleLuckySearch}
          className="bg-[#f8f9fa] text-[#3c4043] px-5 py-2 rounded text-sm border border-[#f8f9fa] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)] hover:bg-[#f8f9fa] hover:border-[#dadce0] hover:text-[#202124] transition-all duration-200 font-arial min-w-[54px] text-center"
        >
          I'm Feeling Lucky
        </button>
      </div>

      {/* Language Options */}
      <div className="text-center mt-7 text-sm">
        <span className="text-[#3c4043]">Google offered in: </span>
        <a href="#" className="text-[#1a0dab] hover:underline ml-1">
          हिन्दी
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          বাংলা
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          తెలుగు
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          मराठी
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          தமிழ்
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          ગુજરાતી
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          ಕನ್ನಡ
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          മലയാളം
        </a>
        <span className="mx-1 text-[#3c4043]"> </span>
        <a href="#" className="text-[#1a0dab] hover:underline">
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  )
}
