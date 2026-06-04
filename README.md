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

## Miljøvariabler (settes i Vercel → Settings → Environment Variables)

Alle er valgfrie — siden fungerer uten, men funksjoner aktiveres når de er satt:

| Variabel | Hva det aktiverer |
|---|---|
| `RESEND_API_KEY` | Sender lead-skjema som e-post (via Resend). Uten: skjema viser e-post/telefon-fallback. |
| `LEAD_TO_EMAIL` | Hvem leads sendes til (default `kathrine@maaseide.no`). |
| `LEAD_FROM_EMAIL` | Avsender (krever verifisert domene i Resend for å sende til andre enn deg selv). |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (`G-…`). |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta-piksel for retargeting. |
| `ANTHROPIC_API_KEY` | Aktiverer SoMe-generatoren på `/studio` (Claude). |
| `STUDIO_PASSWORD` | Passord for `/studio` (internt verktøy). |
| `ANTHROPIC_MODEL` | (Valgfritt) modell-id, default `claude-3-5-sonnet-latest`. |

## TODO før «ekte» lansering

- [ ] Bytt placeholder-omtaler i `Testimonials.tsx` med ekte sitater.
- [ ] Legg inn ekte datoer/pris i `lib/trips.ts` (i dag «be om info»).
- [ ] (Valgfritt) ekte logo-filer for kundene i `TrustLogos.tsx`.
- [ ] Profesjonelle bilder/film når klart.
- [ ] Enkel personvern-/cookie-side (siden samler inn data via skjema).
- [ ] Innhente OK fra kundene på å vises som referanse.
