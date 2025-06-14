import { GoogleLogo } from "@/components/google-logo"
import { SearchSection } from "@/components/search-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-arial">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-2xl">
          {/* Google Logo */}
          <div className="flex justify-center mb-7">
            <GoogleLogo />
          </div>

          {/* Search Section */}
          <SearchSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
