export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        <p className="text-sm md:text-base text-black font-medium mb-20">About</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-black mb-8">
              From New Orleans to Stockholm, via design
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                I grew up in New Orleans, went to college in Philadelphia, and spent most of my career in New York City. These days I'm based in Stockholm with my wife Liz and our two kids.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 sm:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black">Speaking</h2>
            </div>
            
            <div className="space-y-1">
              {/* New speaking events */}
              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">01</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">Stockholm School of Economics</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Guest speaker</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2026</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">02</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">Nordic Tech Week</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Design in the Age of AI</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2026</p>
                </div>
              </div>

              {/* Existing speaking events */}
              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">03</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">Figma</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Design hiring panelist</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">04</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">Google Photos</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Guest speaker</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2021</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">05</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">Eventbrite</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Guest speaker</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2021</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-sm text-gray-400 font-mono">06</div>
                <div className="col-span-4 md:col-span-3">
                  <p className="text-base font-medium text-black">NOVA Summit</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-base text-black">Keynote speaker</p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <p className="text-sm text-gray-500">2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white mt-24">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Let's connect</h3>
                <p className="text-gray-400 text-lg max-w-md">
                  Always happy to chat about design, coaching, or collaboration opportunities.
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-gray-400">© 2026 Eli Horne. All rights reserved.</p>
              <p className="text-gray-400">Made in Stockholm, Sweden</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
