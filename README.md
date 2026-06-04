# CK Sports

Landingsside for CK Sports — bedrifts-bootcamp i arbeidstiden og Move&Yoga
treningsreiser. Med Kathrine Maaseide, Stavanger.

Bygget med Next.js 16 + Tailwind CSS 4. Frittstående prosjekt (CK-siden ligger på
rot-ruten `/`).

## Kjøre lokalt

```bash
bun install
bun run dev      # http://localhost:3000
```

Produksjonsbygg:

```bash
bun run build
bun run start
```

## Innhold og bilder

- Sider/seksjoner: `components/ck/`
- Bilder/logo: `public/ck/`
- Favicon: `app/icon.png` · delebilde (Open Graph): `app/opengraph-image.jpg`

## Lansere på cksports.no (Vercel)

1. **Legg koden på GitHub**
   - Opprett et tomt repo på github.com (f.eks. `cksports`).
   - Fra denne mappen:
     ```bash
     git remote add origin git@github.com:<brukernavn>/cksports.git
     git push -u origin main
     ```
2. **Koble til Vercel**
   - Logg inn på vercel.com (gratis), «Add New… → Project», importer GitHub-repoet.
   - Vercel oppdager Next.js automatisk — bare trykk **Deploy**.
   - Du får en test-URL (`...vercel.app`) for å se siden live.
3. **Koble på domenet cksports.no**
   - I Vercel: Project → Settings → **Domains** → legg til `cksports.no` og `www.cksports.no`.
   - Vercel viser hvilke **DNS-records** (A / CNAME) du skal sette.
   - Gå til domeneregistraren (der cksports.no er kjøpt — hvis Wix styrer DNS, må det
     endres/flyttes der) og legg inn recordene. DNS kan ta minutter–timer å slå igjennom.
4. **Ta ned Wix — til slutt**
   - Vent til cksports.no viser den nye siden og er stabil.
   - Koble domenet fra Wix, og nedgrader/si opp Wix-abonnementet.

## TODO før «ekte» lansering

- [ ] Bytt ut det AI-genererte bildet i «Bedrifts-bootcamp»-pilaret
      (`public/ck/studio-group.jpg`) med et ekte foto.
- [ ] Koble «Meld interesse»-knappene til et skjema (i dag `mailto:`).
- [ ] Legg inn priser/datoer for Move&Yoga-reisen.
- [ ] Vurder enkel personvern-/cookie-side hvis dere samler inn data via skjema.
