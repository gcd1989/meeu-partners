export default function Home() {
  const sectors = [
    {
      name: 'Greenwood',
      description:
        'Hospitality, leisure and experiential real estate platform focused on destination repositioning, wellness, F&B and year-round activation strategies.',
    },
    {
      name: 'SOCIETY',
      description:
        'Vertically integrated entertainment and lifestyle platform operating across Spain and Qatar through venue activations, premium live experiences and cultural programming.',
    },
    {
      name: 'METAFEST',
      description:
        'Event-commerce and venue technology infrastructure platform powering ticketing, access control, real-time communications and transactional ecosystems.',
    },
    {
      name: 'Fibosa Global',
      description:
        'International food technology and industrial processing solutions group specialized in dairy, meat processing and modular food infrastructure.',
    },
  ]

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EA] min-h-screen overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-sm tracking-[0.35em] uppercase text-white/90">
            MEEU Partners
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/55 uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />

        <div className="max-w-7xl mx-auto px-8 pt-40 pb-28 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-10">
              <div className="inline-flex items-center gap-3 text-white/45 uppercase tracking-[0.3em] text-xs border border-white/10 rounded-full px-4 py-2">
                <span>Middle East</span>
                <span>—</span>
                <span>Europe</span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-[92px] leading-[0.92] font-light tracking-tight max-w-6xl">
                Independent advisory and investment platform operating across hospitality, real assets, entertainment, technology and industrial sectors.
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
                MEEU Partners originates, structures, advises on, and selectively co-invests in opportunities where operational expertise, strategic relationships and cross-border positioning create differentiated value.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="border border-white/10 rounded-[32px] p-8 w-full max-w-sm bg-white/[0.03] backdrop-blur-sm">
                <div className="space-y-5 text-sm uppercase tracking-[0.2em] text-white/55">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Focus</span>
                    <span>Cross-Border</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Sectors</span>
                    <span>Selected</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Approach</span>
                    <span>Long-Term</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Structure</span>
                    <span>Independent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-3">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40">
              About
            </p>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-5xl">
              MEEU Partners operates at the intersection of experiences, infrastructure, hospitality and strategic growth.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-white/65 text-lg leading-relaxed">
              <p>
                Founded with a cross-border perspective between the Middle East and Europe, the platform focuses on operationally intensive sectors where strategic relationships, cultural understanding and execution capabilities create long-term value.
              </p>

              <p>
                Activities include strategic advisory, deal sourcing, capital raising, destination activation, institutional partnerships and selective co-investments across selected sectors and special situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="mb-20 flex flex-col gap-6">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40">
              Platforms & Strategic Interests
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-light max-w-5xl">
              Curated exposure to hospitality, entertainment, technology and industrial ecosystems.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group relative rounded-[36px] border border-white/10 p-10 bg-black/30 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-light tracking-tight">
                      {sector.name}
                    </h3>

                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                      +
                    </div>
                  </div>

                  <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
                Approach
              </p>

              <h2 className="text-4xl font-light leading-tight">
                Relationship-driven. Operationally grounded. Selectively aligned.
              </h2>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cross-Border Perspective',
                  text: 'Bridging opportunities between European operating platforms and Middle Eastern capital, tourism and infrastructure growth.',
                },
                {
                  title: 'Operational Expertise',
                  text: 'Hands-on experience across hospitality, entertainment, venue operations, industrial execution and strategic growth initiatives.',
                },
                {
                  title: 'Strategic Relationships',
                  text: 'Long-term partnerships across institutional, hospitality, entertainment and entrepreneurial ecosystems.',
                },
                {
                  title: 'Selective Capital Alignment',
                  text: 'Focused participation in projects where MEEU can contribute strategic positioning, execution capabilities or differentiated access.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-white/10 p-8 bg-white/[0.02]"
                >
                  <h3 className="text-2xl font-light mb-6">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
              Selected Exposure
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl">
              Destination activation, hospitality ecosystems and cultural infrastructure.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Hospitality & experiential real estate',
              'Entertainment & venue operations',
              'Tourism and destination positioning',
              'Technology-enabled event ecosystems',
              'Cross-border capital raising initiatives',
              'Industrial expansion & food infrastructure',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-white/10 p-10 min-h-[220px] flex items-end bg-black/20"
              >
                <p className="text-2xl leading-snug font-light max-w-xs">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="max-w-7xl mx-auto px-8 py-36">
          <div className="max-w-5xl space-y-12">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl leading-[1] font-light tracking-tight">
              For partnerships, advisory mandates and selected investment opportunities.
            </h2>

            <div className="pt-6 space-y-3 text-white/60 text-xl">
              <p>info@meeupartners.com</p>
              <p>Doha — Barcelona — Madrid</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
