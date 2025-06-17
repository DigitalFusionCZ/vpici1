'use client';

import { useState, useEffect } from 'react';

const navigation = [
  { name: 'O nás', href: '#o-nas' },
  { name: 'Služby', href: '#sluzby' },
  { name: 'Tým', href: '#tym' },
  { name: 'Ceník', href: '#cenik' },
  { name: 'Kontakt', href: '#kontakt' },
];

const servicesData = [
  {
    name: 'Debuggovací Doppio',
    description: 'Speciální silné doppio pro ranní ladění kódu.',
    icon: (
      <svg
        className="h-6 w-6 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Káva pro Scrum Mastery',
    description: 'Hladká káva pro efektivní stand-upy.',
    icon: (
      <svg
        className="h-6 w-6 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Tichá Zóna pro Kódery',
    description: 'Nerušivé prostředí s rychlým Wi-Fi pro maximální soustředění.',
    icon: (
      <svg
        className="h-6 w-6 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Programátorské Svačiny',
    description: 'Energetické tyčinky a zdravé občerstvení pro dlouhé noci.',
    icon: (
      <svg
        className="h-6 w-6 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 11.125v-2.25a1.125 1.125 0 00-1.125-1.125L2.25 4.5l-.25-.25m19.5 7.125l-.25-.25L2.25 18.75l-.25-.25A1.125 1.125 0 002 14.25v-2.25m19.5 7.125v-2.25a1.125 1.125 0 00-1.125-1.125L2.25 18.75l-.25-.25M21 11.125c.35 0 .687-.097.974-.27l-.974-.974m-.974-.974l-.974.974m1.948 0c-.287.173-.624.27-.974.27z"
        ></path>
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: 'Jan Novák',
    role: 'Hlavní kávovník',
    image: 'https://via.placeholder.com/150/1A1A1A/C0C0C0?text=Jan',
  },
  {
    name: 'Petra Svobodová',
    role: 'Baristka & QA Specialist',
    image: 'https://via.placeholder.com/150/1A1A1A/C0C0C0?text=Petra',
  },
  {
    name: 'Lukáš Dvořák',
    role: 'Mistr overlocku',
    image: 'https://via.placeholder.com/150/1A1A1A/C0C0C0?text=Lukas',
  },
];

const pricing = [
  { 
    name: 'Espresso',
    price: '65 Kč',
    description: 'Klasické espresso pro rychlý start.' 
  },
  {
    name: 'Latte',
    price: '90 Kč',
    description: 'Mléčná káva s jemnou pěnou.'
  },
  {
    name: 'Debuggovací Doppio',
    price: '110 Kč',
    description: 'Naše specialita pro ladění kódu.'
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans">
      <header className="fixed inset-x-0 top-0 z-50 bg-neutral-950/80 backdrop-blur-sm shadow-lg">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#hero" className="-m-1.5 p-1.5 focus:outline-none">
              <span className="sr-only">Testovací Kavárna "U Kódu"</span>
              <p className="text-2xl font-serif text-yellow-500 font-bold tracking-widest">
                &lt;U Kódu /&gt;
              </p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold leading-6 text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-40 bg-neutral-950/95 overflow-y-auto`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between p-6">
            <a href="#hero" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
              <span className="sr-only">Testovací Kavárna "U Kódu"</span>
              <p className="text-2xl font-serif text-yellow-500 font-bold tracking-widest">
                &lt;U Kódu /&gt;
              </p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Zavřít menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700/50">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-300 hover:bg-gray-800 transition-colors duration-300"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 pt-14 lg:pt-0"
        >
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gradient-to-t from-black via-gray-900 to-gray-800 shadow-xl shadow-gray-900/10 ring-1 ring-gray-700/10 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative z-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-24 text-6xl font-serif tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight">
                Testovací Kavárna <span className="text-yellow-500">"U Kódu"</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300 font-light">
                Nejlepší káva pro vaše bugy.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#sluzby"
                  className="rounded-full bg-yellow-600 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 uppercase tracking-wide"
                >
                  Objevte naše služby
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-neutral-950 sm:h-32" />
        </section>

        {/* About Section */}
        <section id="o-nas" className="bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-5xl font-serif tracking-tight text-white mb-8">
                O Nás
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je &quot;debuggovací doppio&quot;.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="bg-neutral-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                Naše Služby
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Připravili jsme pro vás nabídku, která podpoří vaši produktivitu i relaxaci.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {servicesData.map((service) => (
                  <div key={service.name} className="relative pl-16">
                    <dt className="text-xl font-semibold leading-7 text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-600 ring-2 ring-yellow-500 shadow-lg">
                        {service.icon}
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-2 text-lg leading-7 text-gray-300">
                      {service.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="tym" className="bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                Náš Tým
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Jsme skupina nadšenců do kávy a počítačů, připravených vám zpříjemnit den.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {teamMembers.map((member) => (
                <li key={member.name} className="p-6 rounded-lg bg-neutral-900 shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-700">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg border-2 border-yellow-500"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="mt-6 text-2xl font-serif leading-7 tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="text-lg leading-6 text-yellow-500">
                    {member.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="cenik" className="bg-neutral-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                Ceník
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Vyberte si to nejlepší pro váš kód i duši.
              </p>
            </div>
            <div className="mx-auto mt-16 grid lg:max-w-none grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3 xl:gap-10">
              {pricing.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col justify-between rounded-xl bg-neutral-950 p-8 shadow-xl ring-1 ring-neutral-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div>
                    <h3 id={`${item.name.toLowerCase().replace(/\s/g, '-')}-heading`} className="text-3xl font-serif font-bold tracking-tight text-white">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-lg leading-7 text-gray-300">
                      {item.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-yellow-500">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                Kontaktujte Nás
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Rádi vám odpovíme na jakékoli dotazy.
              </p>
            </div>
            <div className="mt-16 flex flex-col items-center text-center">
              <div className="text-xl font-semibold text-white mb-4">
                <p className="flex items-center justify-center gap-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="text-gray-300">Email:</span> <a href="mailto:test@kavarna.cz" className="text-yellow-500 hover:underline">test@kavarna.cz</a>
                </p>
              </div>
              <div className="text-xl font-semibold text-white mb-4">
                <p className="flex items-center justify-center gap-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span className="text-gray-300">Telefon:</span> <a href="tel:+420777123456" className="text-yellow-500 hover:underline">+420 777 123 456</a>
                </p>
              </div>
              <div className="text-xl font-semibold text-white">
                <p className="flex items-center justify-center gap-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">Adresa:</span> Bugfixová 1, 110 00 Praha 1
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 border-t border-neutral-700 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Testovací Kavárna &quot;U Kódu&quot;. Všechna práva vyhrazena.
          </p>
          <p className="mt-4 md:mt-0 text-gray-400 text-lg">
            <p className="text-lg font-serif text-yellow-500 font-bold tracking-widest">
              &lt;U Kódu /&gt;
            </p>
          </p>
        </div>
      </footer>
    </div>
  );
}
