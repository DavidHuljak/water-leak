import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container animate-fade-in">
      <h1 className="home-title">Neteče u vás voda? </h1>
      <div className="intro-container">
        <p className="intro-text">
          Pomocí služby WaterLeak se o výpadku vody ve vaší lokalitě dozvíte
          mezi prvními a můžete se tak připravit na možné komplikace.
          Zaregistrujte se a získejte okamžitá upozornění do vašeho e-mailu.
        </p>
      </div>
      <div className="button-container">
        <Link href="/register" className="button button-primary">
          Registrace{" "}
        </Link>
        <Link href="/unregister" className="button button-secondary">
          Odhlášení{" "}
        </Link>
      </div>
    </div>
  );
}
