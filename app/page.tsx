export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden relative bg-fixed">

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full animate-pulse -translate-y-10"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full animate-pulse translate-y-10"></div>
      <nav className="w-full flex justify-between items-center px-10 py-5 fixed top-0 left-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl shadow-lg shadow-black/20">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          MANTHAN
        </h1>

        <div className="hidden md:flex gap-10 text-gray-300 text-sm uppercase tracking-[3px] font-medium">
          <a href="#" className="hover:text-blue-400 transition-all">Home</a>
          <a href="#" className="hover:text-blue-400 transition-all">Projects</a>
          <a href="#" className="hover:text-blue-400 transition-all">Contact</a>
        </div>

        <button className="bg-white text-black px-7 py-2.5 rounded-full text-sm font-semibold uppercase tracking-[2px] hover:scale-105 transition-all duration-300 shadow-2xl">
          Hire Me
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen grid md:grid-cols-2 items-center gap-12 px-8 md:px-20 pt-32 animate-fadeIn motion-safe:animate-fadeIn">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-6">
            DATA ANALYST PORTFOLIO
          </p>

          <h1 className="text-6xl md:text-[95px] font-semibold leading-[0.95] tracking-[-2px] max-w-[620px]">
           Build Modern <br />
           Growth Through <br />
           Data
          </h1>

          <p className="text-gray-400 mt-8 text-xl leading-8 max-w-2xl">
            Premium dashboards, analytics systems and smart business insights for modern companies.
          </p>

          <button className="mt-10 bg-white text-black px-9 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
            Explore Work
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center mt-16 md:mt-0 scale-110">
          <div className="w-80 h-80 bg-blue-500/20 blur-3xl rounded-full absolute"></div>
<div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/30 border-dashed animate-spin"></div>
          <div className="w-80 h-80 rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl shadow-cyan-400/20 flex items-center justify-center text-6xl font-bold backdrop-blur-xl">
            MP
          </div>
        </div>

      </section>
      <section className="px-8 md:px-20 py-24 border-t border-white/10">
  <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-6">
    FEATURED PROJECTS
  </p>

  <h2 className="text-4xl md:text-6xl font-semibold mb-12">
    Selected Work
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
      <h3 className="text-2xl font-semibold mb-4">Financial Dashboard</h3>
      <p className="text-gray-400">Interactive Excel dashboards for revenue, geography and sales insights.</p>
    </div>

    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
      <h3 className="text-2xl font-semibold mb-4">Traffic Analytics</h3>
      <p className="text-gray-400">Statistical study of Ahmedabad traffic patterns and congestion trends.</p>
    </div>

    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
      <h3 className="text-2xl font-semibold mb-4">World Economy</h3>
      <p className="text-gray-400">Macroeconomic indicators and global growth analysis dashboard.</p>
    </div>

  </div>
</section>
<section className="px-8 md:px-20 py-24 border-t border-white/10">
  <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-6">
    CONTACT
  </p>

  <h2 className="text-4xl md:text-6xl font-semibold mb-6">
    Let’s Work Together
  </h2>

  <p className="text-gray-400 text-lg max-w-2xl mb-10">
    Open for freelance work, collaborations and job opportunities.
  </p>

  <div className="flex flex-wrap gap-4">
    <a href="mailto:hiimanthan1@gmail.com" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
      Email Me
    </a>

    <a href="https://www.linkedin.com/in/manthan-patel-2311a4329/" className="border border-white/10 px-6 py-3 rounded-full">
      LinkedIn
    </a>

    <a href="https://github.com/hiimanthan" className="border border-white/10 px-6 py-3 rounded-full">
      GitHub
    </a>
  </div>
</section>
   </main>
);
}