import Link from "next/link"
import Image from "next/image"
import { Github, ChevronDown, Monitor, Package, Layers, Cpu, AlertTriangle, AppWindow } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      {/* Header/Navigation */}
      <header className="border-b border-red-900/50 bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-900/30 rounded-sm rotate-45"></div>
              <span className="relative text-xl font-bold text-red-500 uppercase">UAC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-red-600 uppercase tracking-wider">Launch Control</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">Mod, Rip and Tear</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-zinc-400 hover:text-red-500 transition-colors uppercase text-sm tracking-wider"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-zinc-400 hover:text-red-500 transition-colors uppercase text-sm tracking-wider"
            >
              Protocol
            </Link>
            <Link
              href="#download"
              className="text-zinc-400 hover:text-red-500 transition-colors uppercase text-sm tracking-wider"
            >
              Download
            </Link>
          </nav>
          <Link
            href="https://github.com/mikkelrask/mrdoom/releases/latest"
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-red-900/30 hover:bg-red-900/50 px-4 py-2 border border-red-900/50 uppercase text-xs tracking-wider transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Access Repository</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-red-900/30 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span>SECURITY CLEARANCE REQUIRED</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter uppercase">
                MANAGE YOUR <span className="text-red-600">DOOM</span> MODS WITH EASE
              </h1>
              <div className="flex items-center space-x-2 text-zinc-400">
                <div className="h-px bg-red-900/50 w-16"></div>
                <span className="text-xs uppercase tracking-wider">developed by the UAC</span>
              </div>
              <p className="text-lg text-zinc-400 max-w-lg border-l-2 border-red-900/50 pl-4">
                A powerful, UAC-developed launcher that makes it simple to create, manage, play and even share your own
                custom Doom mod "remixes".
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/mikkelrask/mrdoom/releases" target="_blank">
                  <Button className="bg-red-900 hover:bg-red-800 text-white border border-red-700 uppercase tracking-wider">
                    <AppWindow className="mr-2 h-4 w-4" />
                    DOWNLOAD E1M0.1.2
                  </Button>
                </Link>
                <Link href="#RTFM">
                  <Button
                    variant="outline"
                    className="border-red-900/50 text-zinc-300 hover:bg-red-900/20 uppercase tracking-wider"
                  >
                    MORE OPTIONS <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-red-900/20 blur-sm"></div>
              <div className="relative rounded-none overflow-hidden border-2 border-red-900/50">
                <div className="absolute top-0 left-0 right-0 h-6 bg-red-900/30 flex items-center px-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                  <span className="text-xs text-red-200 uppercase tracking-wider">LAUNCH CONTROL</span>
                </div>
                <div className="pt-6">
                  <Image
                    src="/scrshot1.png?height=600&width=800"
                    alt="Doom Mod Launcher Screenshot"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-red-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-red-900/30 px-2 py-1 border border-red-900/50 text-xs uppercase tracking-wider text-red-200">
                ALL SYSTEMS LIVE
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,#3f0d0d,#3f0d0d,#3f0d0d_10px,#000_10px,#000_20px)]"></div>
      </section>

      {/* Platform Compatibility */}
      <section id="RTFM" className="py-12 border-b border-red-900/30 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider mb-2">
              <span>ACCESS CARD REQUIRED</span>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider">COMPATIBLE SYSTEMS</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Blue Key Card - Windows */}
            <div className="group">
              <div className="relative w-32 h-56 perspective-1000">
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-blue-900/80 border-2 border-blue-700 shadow-lg shadow-blue-900/30">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-blue-800 flex items-center px-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                      <span className="text-xs text-blue-200 uppercase tracking-wider">UAC ACCESS</span>
                    </div>
                    <div className="absolute top-12 left-0 right-0 flex justify-center">
                      <div className="h-16 w-16 border-2 border-blue-700 flex items-center justify-center bg-blue-800/50">
                        <Monitor className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10">
                      <div className="h-8 w-24 bg-blue-800/80 flex items-center justify-center relative z-10">
                        <span className="text-xs text-blue-200 uppercase tracking-wider relative z-10">Windows</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-950 to-blue-900/0"></div>
                    <div className="absolute top-32 left-0 right-0 flex justify-center">
                      <div className="h-4 w-20 bg-blue-700"></div>
                    </div>
                    <div className="absolute top-40 left-0 right-0 flex justify-center">
                      <div className="h-2 w-24 bg-blue-700/50"></div>
                    </div>
                    <div className="absolute top-44 left-0 right-0 flex justify-center">
                      <div className="h-2 w-16 bg-blue-700/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-blue-400 uppercase text-sm tracking-wider">Blue Access</span>
              </div>
            </div>

            {/* Yellow Key Card - macOS */}
            <div className="group">
              <div className="relative w-32 h-56 perspective-1000">
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-yellow-900/80 border-2 border-yellow-700 shadow-lg shadow-yellow-900/30">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-yellow-800 flex items-center px-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 animate-pulse"></div>
                      <span className="text-xs text-yellow-200 uppercase tracking-wider">UAC ACCESS</span>
                    </div>
                    <div className="absolute top-12 left-0 right-0 flex justify-center">
                      <div className="h-16 w-16 border-2 border-yellow-700 flex items-center justify-center bg-yellow-800/50">
                        <Cpu className="h-8 w-8 text-yellow-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10">
                      <div className="h-8 w-24 bg-yellow-800/80 flex items-center justify-center relative z-10">
                        <span className="text-xs text-yellow-200 uppercase tracking-wider relative z-10">macOS</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-yellow-950 to-yellow-900/0"></div>
                    <div className="absolute top-32 left-0 right-0 flex justify-center">
                      <div className="h-4 w-20 bg-yellow-700"></div>
                    </div>
                    <div className="absolute top-40 left-0 right-0 flex justify-center">
                      <div className="h-2 w-24 bg-yellow-700/50"></div>
                    </div>
                    <div className="absolute top-44 left-0 right-0 flex justify-center">
                      <div className="h-2 w-16 bg-yellow-700/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-yellow-400 uppercase text-sm tracking-wider">Yellow Access</span>
              </div>
            </div>

            {/* Red Key Card - Linux */}
            <div className="group">
              <div className="relative w-32 h-56 perspective-1000">
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-red-900/80 border-2 border-red-700 shadow-lg shadow-red-900/30">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-red-800 flex items-center px-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                      <span className="text-xs text-red-200 uppercase tracking-wider">UAC ACCESS</span>
                    </div>
                    <div className="absolute top-12 left-0 right-0 flex justify-center">
                      <div className="h-16 w-16 border-2 border-red-700 flex items-center justify-center bg-red-800/50">
                        <Package className="h-8 w-8 text-red-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10">
                      <div className="h-8 w-24 bg-red-800/80 flex items-center justify-center relative z-10">
                        <span className="text-xs text-red-200 uppercase tracking-wider relative z-10">Linux</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-red-950 to-red-900/0"></div>
                    <div className="absolute top-32 left-0 right-0 flex justify-center">
                      <div className="h-4 w-20 bg-red-700"></div>
                    </div>
                    <div className="absolute top-40 left-0 right-0 flex justify-center">
                      <div className="h-2 w-24 bg-red-700/50"></div>
                    </div>
                    <div className="absolute top-44 left-0 right-0 flex justify-center">
                      <div className="h-2 w-16 bg-red-700/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-red-400 uppercase text-sm tracking-wider">Red Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 border-b border-red-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 -rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider mb-4">
              <span>UAC APPROVED FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              UNLEASH YOUR <span className="text-red-600">MODDING</span> POTENTIAL
            </h2>
            <div className="flex items-center justify-center space-x-2 text-zinc-400 mb-4">
              <div className="h-px bg-red-900/50 w-16"></div>
              <span className="text-xs uppercase tracking-wider">SECURITY LEVEL ALPHA</span>
              <div className="h-px bg-red-900/50 w-16"></div>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our launcher simplifies the complex process of managing and combining Doom mods, giving you more time to
              actually play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Layers className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Mod Management</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Easily organize and categorize your collection of Doom mods with a powerful tagging system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Package className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Custom "Remixes"</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Create and save your own custom mod combinations with our intuitive drag-and-drop interface, and all
                your mods easily accessable from one place.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Cpu className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Conflict Resolution</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Automatically detect and resolve conflicts between mods to ensure smooth gameplay.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Monitor className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Cross-Platform</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Enjoy the same powerful experience whether you're on Windows, macOS, or Linux.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Package className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">One-Click Launch</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Start playing your favorite mod combinations with a single click, no manual configuration needed.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-black/50 border-2 border-red-900/30 p-6 hover:border-red-900/70 transition-colors group">
              <div className="bg-red-900/20 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-900/30 transition-colors">
                <Layers className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Mod Discovery</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Discover new mods and popular combinations from the community directly within the launcher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 border-b border-red-900/30 bg-black/30 relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,#3f0d0d,#3f0d0d_10px,#000_10px,#000_20px)]"></div>
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider mb-4">
              <span>OPERATION PROTOCOL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              SYSTEM <span className="text-red-600">PROTOCOLS</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-zinc-400 mb-4">
              <div className="h-px bg-red-900/50 w-16"></div>
              <span className="text-xs uppercase tracking-wider">UAC DIRECTIVE</span>
              <div className="h-px bg-red-900/50 w-16"></div>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Creating your perfect Doom experience has never been easier. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center relative">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-red-900/30 hidden md:block"></div>
              <div className="bg-red-900/20 w-16 h-16 flex items-center justify-center mb-4 relative border-2 border-red-900/50">
                <span className="text-2xl font-bold text-red-500">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Import Your Mods</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Add your existing mod files to the launcher or download new ones directly from the app.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-red-900/30 hidden md:block"></div>
              <div className="bg-red-900/20 w-16 h-16 flex items-center justify-center mb-4 relative border-2 border-red-900/50">
                <span className="text-2xl font-bold text-red-500">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Create Combinations</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Drag and drop mods to create your perfect combination. The launcher will handle load order and
                conflicts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-red-900/20 w-16 h-16 flex items-center justify-center mb-4 relative border-2 border-red-900/50">
                <span className="text-2xl font-bold text-red-500">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Rip and Tear</h3>
              <div className="h-px w-16 bg-red-900/50 mb-4"></div>
              <p className="text-zinc-400">
                Launch your custom mod setup with a single click and start ripping and tearing immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,#3f0d0d,#3f0d0d_10px,#000_10px,#000_20px)]"></div>
      </section>

      {/* Screenshot Section */}
      <section className="py-16 md:py-24 border-b border-red-900/30 bg-black/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider mb-4">
              <span>VISUAL CONFIRMATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              SYSTEM <span className="text-red-600">INTERFACE</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-zinc-400 mb-4">
              <div className="h-px bg-red-900/50 w-16"></div>
              <span className="text-xs uppercase tracking-wider">UAC TERMINAL</span>
              <div className="h-px bg-red-900/50 w-16"></div>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A powerful interface designed for both beginners and advanced Doom modders.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-red-900/20 blur-sm"></div>
            <div className="relative border-2 border-red-900/50 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-red-900/30 flex items-center px-3 z-10">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                <span className="text-xs text-red-200 uppercase tracking-wider">UAC TERMINAL // MOD MANAGER v1.0</span>
              </div>
              <div className="pt-8">
                <Image
                  src="/scrnshot2.png?height=800&width=1200"
                  alt="Doom Mod Launcher Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-red-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-red-900/30 px-2 py-1 border border-red-900/50 text-xs uppercase tracking-wider text-red-200">
              SYSTEM ACTIVE
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-red-900/50 bg-red-900/20 text-red-500 text-sm font-medium uppercase tracking-wider mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>SECURITY CLEARANCE GRANTED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              READY TO <span className="text-red-600">RIP & TEAR</span>?
            </h2>
            <div className="flex items-center justify-center space-x-2 text-zinc-400 mb-4">
              <div className="h-px bg-red-900/50 w-16"></div>
              <span className="text-xs uppercase tracking-wider">UAC APPROVED</span>
              <div className="h-px bg-red-900/50 w-16"></div>
            </div>
            <p className="text-zinc-400 mb-8">
              Download the Doom Mod Launcher now and take your Doom experience to the next level. Free and open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/mikkelrask/mrdoom/releases/latest" target="_blank">
                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 text-white border border-red-700 uppercase tracking-wider w-full sm:w-auto"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GET APPLICATION
                </Button>
              </Link>
              <Link href="https://github.com/mikkelrask/mrdoom" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-900/50 text-zinc-300 hover:bg-red-900/20 uppercase tracking-wider w-full sm:w-auto"
                >
                  VIEW SOURCE CODE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-red-900/30 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,#3f0d0d,#3f0d0d_10px,#000_10px,#000_20px)]"></div>
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="relative h-10 w-10 flex items-center justify-center mr-3">
                <div className="absolute inset-0 bg-red-900/30 rounded-sm rotate-45"></div>
                <span className="relative text-xl font-bold text-red-500 uppercase">UAC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-red-600 uppercase tracking-wider">Launch Control</span>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1 font-bold">
                <span>NOT AFFILIATED WITH </span>
                <Link href="https://idsoftware.com" target="_blank" className="underline">ID SOFTWARE</Link>
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/mikkelrask/mrdoom"
                target="_blank"
                className="text-zinc-400 hover:text-red-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-900/20 text-center">
            <p className="text-zinc-500 text-xs uppercase tracking-wider">
              © {new Date().getFullYear()} Launch Control is a UAC product - ALL RIGHTS RESERVED.
            </p>
            <p className="text-zinc-600 text-xs mt-2">
              WARNING: UNAUTHORIZED ACCESS TO THIS SYSTEM IS PROHIBITED AND WILL RESULT IN IMMEDIATE TERMINATION
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
