export default function FaqPage() {
  return (
    <div className="faq-container animate-fade-in">
      <h1>Často kladené otázky</h1>

      <section>
        <h2>Je registrace zdarma?</h2>
        <p>
          Ano, registrace je zcela zdarma a nezavazuje vás k žádným poplatkům.
        </p>
      </section>

      <section>
        <h2>Mohu se kdykoliv odhlásit?</h2>
        <p>
          Ano, odhlásit se můžete kdykoliv prostřednictvím záložky Odhlášení v
          nastavení.
        </p>
      </section>

      <section>
        <h2>Mohu si registrovat více ulic?</h2>
        <p>
          Ano, můžete si zaregistrovat více ulic. Stačí znovu vyplnit
          registrační formulář pro novou ulici.
        </p>
      </section>

      <section>
        <h2>Na jaké město aplikace funguje?</h2>
        <p>
          Aplikace je určena výhradně pro Prahu, protože využívá data, která
          jsou dostupná pouze pro toto město.
        </p>
      </section>

      <section>
        <h2>Odkud aplikace získává informace o výpadcích?</h2>
        <p>
          Aplikace čerpá informace z veřejných zdrojů, konkrétně z{" "}
          <a
            href="https://www.pvk.cz/aktuality/havarie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pražských vodovodů a kanalizací
          </a>
          .
        </p>
      </section>
    </div>
  );
}
