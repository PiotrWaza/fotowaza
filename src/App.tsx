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
<img
  src="waza-logo.png"
  alt="FotoWaza logo"
  className="h-10 w-auto"
  loading="lazy"
  decoding="async"
/>
</div>
          <a href="#/" className="text-sm text-[#0E4C9A] hover:underline">← Wróć na stronę główną</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-6 leading-relaxed text-neutral-800">
        <h1 className="text-3xl font-bold text-center mb-6">Polityka prywatności</h1>

        <h2 className="text-2xl font-semibold mt-8">Informacje ogólne</h2>
        <p>
          Niniejszy dokument zawiera oświadczenie dotyczące ochrony danych osobowych w sklepie <strong>fotowaza.pl</strong>.
        </p>
        <p>
          Stanowi on świadectwo dbałości o prywatność Klientów sklepu prowadzonego przez <strong>Foto Waza Sp. C.</strong> (dalej: <em>Sklep</em>).
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Ustawa</strong> – Ustawa z dnia 29 sierpnia 1997 roku o ochronie danych osobowych (Dz.U. 2002 Nr 101, poz. 926 z późn. zm.).</li>
          <li><strong>Rozporządzenie</strong> – Rozporządzenie (UE) 2016/679 Parlamentu Europejskiego i Rady (RODO).</li>
          <li><strong>Firma współpracująca</strong> – podmiot zapewniający szczególne usługi niezbędne do realizacji transakcji (np. płatności online, obsługa kurierska).</li>
          <li><strong>Sklep</strong> – platforma internetowa Foto Waza Sp. C. umożliwiająca zamawianie towarów i usług.</li>
          <li><strong>Klient Nowy</strong> – osoba rejestrująca się po raz pierwszy i przekazująca dane poprzez formularz.</li>
          <li><strong>Klient Zarejestrowany</strong> – osoba korzystająca ponownie z konta w Sklepie.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Zasady zbierania i przetwarzania danych</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Podstawą przetwarzania danych osobowych jest <strong>zgoda Klienta</strong> oraz przepisy Ustawy i Rozporządzenia.</li>
          <li>Podanie danych osobowych jest <strong>dobrowolne</strong>, lecz konieczne do realizacji usług.</li>
          <li>Klienci mogą przeglądać Sklep bez rejestracji.</li>
          <li>Dane są przetwarzane i zabezpieczane zgodnie z obowiązującymi przepisami prawa.</li>
          <li>Dane osobowe wykorzystywane są do celów księgowych, kontaktu i realizacji zamówień.</li>
          <li>W razie potrzeby dane mogą być przekazywane do <strong>firm współpracujących</strong> w celu realizacji zamówienia.</li>
          <li>Podczas rejestracji Klient podaje m.in. imię, nazwisko, e-mail, adres i numer telefonu.</li>
          <li>Przedsiębiorcy dodatkowo podają nazwę firmy i NIP.</li>
          <li>Dane Klienta Zarejestrowanego są przechowywane przez okres aktywności konta.</li>
          <li>Dane Klienta Nowego – do zakończenia transakcji i okresu gwarancji.</li>
          <li>Dane nie są udostępniane stronom trzecim, chyba że wynika to z przepisów prawa.</li>
          <li>Sklep stosuje pliki <strong>„cookies”</strong> w celach statystycznych i personalizacyjnych (patrz: Informacja o Cookies na fotowaza.pl).</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8">Ochrona prywatności osób niepełnoletnich</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Klientami Sklepu mogą być wyłącznie <strong>osoby pełnoletnie</strong>.</li>
          <li>Sklep nie weryfikuje wieku klientów ani nie ponosi odpowiedzialności za działania osób niepełnoletnich.</li>
          <li>Odpowiedzialność prawną za działania osób niepełnoletnich ponoszą ich <strong>opiekunowie prawni</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Zabezpieczenia</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Sklep stosuje środki bezpieczeństwa chroniące dane przed utratą, niewłaściwym wykorzystaniem i modyfikacją.</li>
          <li>Foto Waza Sp. C. posiada dokumentację i procedury ochrony danych osobowych.</li>
          <li>Partnerzy firmy zobowiązani są do zachowania wysokich standardów bezpieczeństwa.</li>
          <li>Klient powinien zadbać o bezpieczeństwo swojego komputera, zwłaszcza ze względu na publiczny charakter sieci Internet.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Rezygnacja i poprawa danych</h2>
        <p>
          Foto Waza Sp. C. zapewnia realizację praw Klientów wynikających z RODO, w tym:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>dostępu</strong> do własnych danych,</li>
          <li><strong>poprawiania</strong> i <strong>sprostowania</strong> danych,</li>
          <li><strong>usunięcia</strong> lub <strong>ograniczenia przetwarzania</strong>,</li>
          <li><strong>sprzeciwu</strong> wobec przetwarzania danych,</li>
          <li>zgłoszenia skargi do organu nadzorczego.</li>
        </ul>
        <p>
          Klient może żądać usunięcia swoich danych drogą listowną, wysyłając żądanie na adres:
          <br/>
          <strong>Foto Waza Sp. C., ul. Słowiańska 63, 64-100 Leszno</strong>.
        </p>
        <p>
          Usunięcie konta Klienta jest równoznaczne z usunięciem jego danych osobowych.  
          Jeśli w momencie żądania realizowana jest usługa – usunięcie nastąpi po jej zakończeniu.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Zmiany Polityki Prywatności</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Foto Waza Sp. C. zastrzega sobie prawo do zmiany Polityki Prywatności.</li>
          <li>O wszelkich zmianach Klienci Zarejestrowani zostaną poinformowani drogą mailową przed wejściem zmian w życie.</li>
          <li>Pozostanie konta po wprowadzeniu zmian oznacza <strong>akceptację nowej Polityki</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Kontakt</h2>
        <p>
          W razie pytań dotyczących niniejszej Polityki Prywatności prosimy o kontakt:
          <br/>
          <strong>info@fotowaza.pl</strong>
        </p>
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
         <a href="#/" className="flex items-center gap-3">
  <img
    src="waza-logo.png"
    alt="FotoWaza"
    className="h-10 w-auto"
    loading="lazy"
    decoding="async"
  />
</a>
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
    <p className="mt-2 text-neutral-600 max-w-2xl">
      Wybrane realizacje – pełne reportaże dostępne na życzenie.
    </p>

    {/* Galeria zdjęć */}
    <GalleryGrid
      images={[
        "portfolio/01.jpg",
        "portfolio/02.jpg",
        "portfolio/03.jpg",
        "portfolio/04.jpg",
        "portfolio/05.jpg",
        "portfolio/06.jpg",
        "portfolio/07.jpg",
        "portfolio/08.jpg",
        "portfolio/09.jpg",
      ]}
    />
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

{/* MAPA GOOGLE – dwa pewne pin-y */}
<section id="mapa" className="bg-neutral-100 py-10 border-t">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-6">Znajdź nas na mapie</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Siedziba główna */}
      <div className="rounded-2xl overflow-hidden shadow">
        <iframe
          title="Siedziba główna FotoWaza"
          // UWAGA: świadomie używamy q= z nazwą + adresem, żeby wymusić czerwony pin
          src={"https://www.google.com/maps?q=" +
            encodeURIComponent("Foto Waza, ul. Słowiańska 63, 64-100 Leszno") +
            "&output=embed"}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-white p-4 text-sm text-center">
          <strong>Siedziba główna:</strong> ul. Słowiańska 63, 64-100 Leszno
        </div>
      </div>

      {/* Oddział – CH Manhattan */}
      <div className="rounded-2xl overflow-hidden shadow">
        <iframe
          title="Oddział CH Manhattan FotoWaza"
          src={"https://www.google.com/maps?q=" +
            encodeURIComponent("CH Manhattan, Aleja Jana Pawła II 16, 64-100 Leszno") +
            "&output=embed"}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-white p-4 text-sm text-center">
          <strong>Oddział CH Manhattan:</strong> Aleja Jana Pawła II 16, 64-100 Leszno
        </div>
      </div>
    </div>
  </div>
</section>

      {/* STOPKA */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
          <img
  src="waza-logo.png"
  alt="FotoWaza"
  className="h-8 w-auto"
  loading="lazy"
  decoding="async"
/>
          </div>
          <p className="text-neutral-600">© {new Date().getFullYear()} FotoWaza. Wszelkie prawa zastrzeżone.</p>
          <a href="#/polityka-prywatnosci" className="text-[#0E4C9A] hover:underline">Polityka prywatności</a>
        </div>
      </footer>
    </div>
  );
}

function GalleryGrid({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // obsługa klawiatury
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, images.length]);

  return (
    <>
      {/* Miniatury */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setIsOpen(true); }}
            className="group aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0E4C9A]"
          >
            <img
              src={src}
              alt={`Portfolio ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {/* Podgląd (lightbox) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Zamknij podgląd"
          />
          <div className="relative z-[101] max-w-6xl w-[92vw]">
            <img
              src={images[index]}
              alt={`Podgląd ${index + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl pointer-events-none select-none"
            />
            {/* Nawigacja */}
            <div className="absolute inset-x-0 -bottom-14 flex items-center justify-between text-white">
              <button
                onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur"
              >
                ← Poprzednie
              </button>
              <span className="text-sm opacity-80">
                {index + 1} / {images.length}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur"
              >
                Następne →
              </button>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-base"
              aria-label="Zamknij"
            >
              ✕ Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
}



