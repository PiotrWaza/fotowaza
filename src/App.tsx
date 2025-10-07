import { useState, useEffect } from "react";
import { Sparkles, Phone, Mail, ChevronRight, Film, Camera, Image as ImageIcon, ShoppingBag, MapPin, Clock, Send, Menu, X } from "lucide-react";

export default function FotoWazaHome() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [route, setRoute] = useState<string>(() => (typeof window !== 'undefined' ? window.location.hash : ''));

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    const onHash = () => { setRoute(window.location.hash); setMobileOpen(false); };
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

  // ROUTING: podstrona polityki prywatności (statyczny tekst)
  if (route.startsWith('#/polityka-prywatnosci')) {
    return (
      <div className="min-h-screen bg-white text-[#0B0B0B]">
        <header className="sticky top-0 z-40 border-b bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={LOGO_DATA_URI} alt="FotoWaza logo" className="h-8 w-auto"/>
              <span className="font-semibold">FotoWaza</span>
            </div>
            <a href="#/" className="text-sm text-[#0E4C9A] hover:underline">← Wróć na stronę główną</a>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
          <h1 className="text-3xl font-bold">Polityka prywatności</h1>
          <p className="text-neutral-600">Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych przez FotoWaza, zgodnie z obowiązującymi przepisami prawa.</p>
          <h2 className="text-xl font-semibold mt-6">1. Administrator danych</h2>
          <p>Administratorem danych osobowych jest FotoWaza z siedzibą w Lesznie przy ul. Słowiańskiej 63.</p>
          <h2 className="text-xl font-semibold mt-6">2. Zakres zbieranych danych</h2>
          <p>Przetwarzamy dane osobowe podane dobrowolnie przez użytkowników podczas korzystania z formularzy kontaktowych, składania zamówień online oraz podczas kontaktu telefonicznego lub e-mailowego.</p>
          <h2 className="text-xl font-semibold mt-6">3. Cel przetwarzania danych</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>realizacja usług fotograficznych i zamówień online,</li>
            <li>udzielanie odpowiedzi na zapytania klientów,</li>
            <li>informowanie o ofercie i nowościach (wyłącznie za zgodą użytkownika).</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">4. Udostępnianie danych</h2>
          <p>Dane osobowe nie są udostępniane podmiotom trzecim, z wyjątkiem przypadków przewidzianych przepisami prawa.</p>
          <h2 className="text-xl font-semibold mt-6">5. Prawa użytkownika</h2>
          <p>Każdemu użytkownikowi przysługuje prawo do wglądu w swoje dane, ich poprawiania, usunięcia lub ograniczenia przetwarzania, a także prawo do sprzeciwu i prawo do przenoszenia danych.</p>
          <h2 className="text-xl font-semibold mt-6">6. Okres przechowywania danych</h2>
          <p>Dane osobowe są przechowywane przez okres niezbędny do realizacji usług oraz przez czas wymagany przepisami prawa.</p>
          <h2 className="text-xl font-semibold mt-6">7. Kontakt</h2>
          <p>W sprawach związanych z ochroną danych osobowych można kontaktować się z nami pod adresem e-mail: info@fotowaza.pl.</p>
        </main>

        <footer className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} FotoWaza. Wszelkie prawa zastrzeżone.</p>
            <a href="#/polityka-prywatnosci" className="text-[#0E4C9A] hover:underline">Polityka prywatności</a>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#0B0B0B]">
      {/* Pasek menu */}
      <header className={`sticky top-0 z-40 backdrop-blur border-b transition-colors ${scrolled ? "bg-[#0E3A6D]" : "bg-[#0E4C9A]"}`}>
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <img src={LOGO_DATA_URI} alt="FotoWaza logo" className="h-10 w-auto" />
            <span className="font-semibold">FotoWaza</span>
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#oferta" className="hover:text-[#FFD400]">Oferta</a></li>
            <li><a href="#portfolio" className="hover:text-[#FFD400]">Portfolio</a></li>
            <li><a href="#o-nas" className="hover:text-[#FFD400]">O nas</a></li>
            <li><a href="#zamowienia" className="hover:text-[#FFD400]">Wywołaj zdjęcia</a></li>
            <li><a href="#kontakt" className="hover:text-[#FFD400]">Kontakt</a></li>
          </ul>
          {/* CTA desktop */}
          <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 bg-[#FFD400] text-[#0B0B0B] px-4 py-2 rounded-xl font-medium shadow">
            Skontaktuj się <ChevronRight className="h-4 w-4"/>
          </a>
          {/* Hamburger mobile */}
          <button aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/20 hover:bg-white/10">
            {mobileOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </nav>
        {/* Mobile panel */}
        <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pb-4 pt-0 max-w-6xl mx-auto text-white">
            <ul className="flex flex-col gap-2 text-sm">
              <li><a onClick={() => setMobileOpen(false)} href="#oferta" className="block px-3 py-2 rounded-lg hover:bg-white/10">Oferta</a></li>
              <li><a onClick={() => setMobileOpen(false)} href="#portfolio" className="block px-3 py-2 rounded-lg hover:bg-white/10">Portfolio</a></li>
              <li><a onClick={() => setMobileOpen(false)} href="#o-nas" className="block px-3 py-2 rounded-lg hover:bg-white/10">O nas</a></li>
              <li><a onClick={() => setMobileOpen(false)} href="#zamowienia" className="block px-3 py-2 rounded-lg hover:bg-white/10">Wywołaj zdjęcia</a></li>
              <li><a onClick={() => setMobileOpen(false)} href="#kontakt" className="block px-3 py-2 rounded-lg hover:bg-white/10">Kontakt</a></li>
            </ul>
            <a href="#kontakt" onClick={() => setMobileOpen(false)} className="mt-3 inline-flex items-center gap-2 bg-[#FFD400] text-[#0B0B0B] px-4 py-2 rounded-xl font-medium shadow">
              Skontaktuj się <ChevronRight className="h-4 w-4"/>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-4 py-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0E4C9A]/10 text-[#0E4C9A] px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Sparkles className="h-4 w-4"/> 20+ lat doświadczenia
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Tworzymy niezapomniane <span className="text-[#0E4C9A]">historie</span> w kadrze</h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-xl">Rodzinna firma z Leszna – od 1990 roku łączymy tradycję z nowoczesnością. Sesje w studio i plenerze, film 4K, ujęcia z drona, fotobudka i ekspresowe wywoływanie zdjęć.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portfolio" className="px-5 py-3 rounded-xl bg-[#0E4C9A] text-white font-semibold shadow hover:opacity-90">Zobacz portfolio</a>
              <a href="#zamowienia" className="px-5 py-3 rounded-xl bg-[#FFD400] text-[#0B0B0B] font-semibold shadow hover:translate-y-[-1px] transition">Wywołaj zdjęcia online</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl shadow-lg bg-neutral-100 overflow-hidden">
              <img src="https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Sprzęt fotograficzny" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -right-6 -bottom-6 bg-[#0E4C9A] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2">
              <Film className="h-5 w-5"/> Uwiecznij wyjątkowe chwile
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Oferta</h2>
          <p className="mt-2 text-neutral-600">Kompleksowe usługi foto & wideo — od sesji w studio i plenerze po film 4K, wywoływanie zdjęć i foto‑gadżety.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <Camera/>, title: 'Fotografia ślubna', desc: 'Reportaż dnia, sesja plenerowa i elegancka obróbka — emocje w najpiękniejszym wydaniu.' },
              { icon: <ImageIcon/>, title: 'Rodzinna & dziecięca', desc: 'Sesje rodzinne, ciążowe, dziecięce i komunijne — naturalnie, bez pośpiechu, z uśmiechem.' },
              { icon: <Camera/>, title: 'Reportaż & eventy', desc: 'Chrzty, jubileusze, uroczystości i wydarzenia firmowe — dyskretnie i profesjonalnie.' },
              { icon: <Film/>, title: 'Filmowanie 4K & dron', desc: 'Kinowe ujęcia z ziemi i z powietrza, montaż i koloryzacja pod publikację online.' },
              { icon: <ShoppingBag/>, title: 'Wywoływanie & foto‑gadżety', desc: 'Odbitki premium, fotoobrazy, kalendarze i kubki — szybko i w wysokiej jakości.' },
              { icon: <Camera/>, title: 'Fotobudka na imprezy', desc: 'Nielimitowane zdjęcia, akcesoria i personalizowane tła — natychmiastowe wydruki.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border shadow-sm p-6 hover:shadow-md transition h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0E4C9A]/10 text-[#0E4C9A] flex items-center justify-center">{item.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 min-h-[56px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Portfolio</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Wybrane realizacje – pełne reportaże dostępne na życzenie.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              "https://images.pexels.com/photos/265783/pexels-photo-265783.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/167446/pexels-photo-167446.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=800"
            ].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <img src={src} alt={`Portfolio ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">O nas</h2>
            <div className="mt-4 text-neutral-700 leading-relaxed space-y-5">
              <p className="flex items-start gap-3 leading-normal">
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E4C9A]/10 text-[#0E4C9A]"><Camera className="h-4 w-4"/></span>
                <span><strong>FotoWaza</strong> to <strong>wiodąca firma fotograficzna</strong> z <strong>ponad 20‑letnim doświadczeniem</strong>. Tradycja i pasja do fotografii przekładają się na <strong>stałą, wysoką jakość</strong> i uznanie klientów.</span>
              </p>
              <p className="flex items-start gap-3 leading-normal">
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFD400]/20 text-[#0B0B0B]"><Sparkles className="h-4 w-4"/></span>
                <span>Założona w <strong>1990 roku</strong> jako rodzinne przedsięwzięcie, firma rozwinęła się do jednej z <strong>największych w Lesznie</strong>, realizując sesje w studio i plenerze.</span>
              </p>
              <p className="flex items-start gap-3 leading-normal">
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E4C9A]/10 text-[#0E4C9A]"><ImageIcon className="h-4 w-4"/></span>
                <span>Od lat stawiamy na <strong>innowacje</strong> — od zdjęć <strong>Polaroid</strong> i wczesnej fotografii cyfrowej po nowoczesne laboratorium <strong>Konica Minolta</strong> i <strong>suchy lab Epson</strong>.</span>
              </p>
              <p className="flex items-start gap-3 leading-normal">
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFD400]/20 text-[#0B0B0B]"><Camera className="h-4 w-4"/></span>
                <span>W studiu dostępne jest <strong>samoobsługowe stanowisko</strong> do przeglądu i obróbki zdjęć. <strong>Przeszkolony personel</strong> chętnie pomaga, a dla wygody klientów działa <strong>formularz online</strong> zamówień.</span>
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow bg-neutral-100">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" alt="Zdjęcie przyrody – góry o zachodzie słońca" loading="lazy" decoding="async" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* ZAMÓWIENIA */}
      <section id="zamowienia" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Wywołaj zdjęcia online</h2>
            <p className="mt-3 text-neutral-700">Szybkie zamówienia przez internet – odbitki, fotoobrazy, kubki, kalendarze i więcej.</p>
            <a href="https://foto.fotowaza.pl" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E4C9A] text-white font-semibold shadow hover:opacity-90">
              Przejdź do labu <ChevronRight className="h-4 w-4"/>
            </a>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 border">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80" alt="Ciepłe zdjęcie sprzętu fotograficznego: aparat analogowy i akcesoria na drewnianym stole" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-[#0E4C9A] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h2>
            <p className="mb-6 text-neutral-200">Masz pytania? Zadzwoń lub napisz do nas – jesteśmy do Twojej dyspozycji.</p>

            <div className="mt-6 space-y-2 text-sm">
              <h3 className="text-lg font-semibold text-[#FFD400]">Siedziba główna</h3>
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-[#FFD400] mt-0.5"/> ul. Słowiańska 63, 64-100 Leszno</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#FFD400]"/> +48 65 529 74 74</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD400]"/> pn–pt: 9:00 – 17:00</p>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <h3 className="text-lg font-semibold text-[#FFD400]">Oddział – CH Manhattan</h3>
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-[#FFD400] mt-0.5"/> Aleja Jana Pawła II 16, 64-100 Leszno</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#FFD400]"/> 65 52 52 328</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD400]"/> pn–sb: 10:00–20:00, niedziele: 11:00–18:00</p>
              <div className="pt-2">
                <a href="https://www.facebook.com/FotoWaza-" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-label="Facebook"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-3c-.3 0-1 .2-1 1V12h4l-.5 3H13v7A10 10 0 0 0 22 12"/></svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

<form
  action="https://formspree.io/f/movknvdy"
  method="POST"
  className="bg-white text-[#0B0B0B] rounded-2xl p-6 shadow space-y-4"
>
  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium">Imię i nazwisko</label>
      <input
        required
        name="name"
        type="text"
        className="w-full mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0E4C9A]"
      />
    </div>
    <div>
      <label className="text-sm font-medium">E-mail</label>
      <input
        required
        type="email"
        name="email"
        className="w-full mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0E4C9A]"
      />
    </div>
  </div>

  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium">Telefon</label>
      <input
        name="phone"
        type="tel"
        className="w-full mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0E4C9A]"
      />
    </div>
    <div>
      <label className="text-sm font-medium">Usługa</label>
      <select
        name="service"
        className="w-full mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0E4C9A]"
      >
        <option>Fotografia ślubna</option>
        <option>Fotografia rodzinna</option>
        <option>Event / Reportaż</option>
        <option>Filmowanie</option>
        <option>Fotobudka</option>
      </select>
    </div>
  </div>

  <div>
    <label className="text-sm font-medium">Wiadomość</label>
    <textarea
      required
      name="message"
      rows={4}
      className="w-full mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#0E4C9A]"
    ></textarea>
  </div>

  <button
    type="submit"
    className="inline-flex items-center gap-2 bg-[#FFD400] text-[#0B0B0B] px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
  >
    Wyślij
  </button>
</form>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={LOGO_DATA_URI} alt="FotoWaza logo" className="h-6 w-auto"/>
            <span className="font-medium">FotoWaza</span>
          </div>
          <p className="text-neutral-600">© {new Date().getFullYear()} FotoWaza. Wszelkie prawa zastrzeżone.</p>
          <a href="#/polityka-prywatnosci" className="text-[#0E4C9A] hover:underline">Polityka prywatności</a>
        </div>
      </footer>
    </div>
  );
}
