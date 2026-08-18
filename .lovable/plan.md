# Plan to Model Landing Page from Reference

Model the current project's landing page after `https://entrenamientodeftbolll.lovable.app`, incorporating the coach image provided and ensuring the copy, strategy, and layout match the reference while keeping existing checkout links and pricing.

## Proposed Changes

### Assets
- Register the new coach image (`user-uploads://Captura_de_Tela_2026-08-17_às_22.50.40.png`) as `coachAsset` via `src/assets/coach.png.asset.json`.

### Content & Copy (Source: Reference Site)
- Update Hero headline: "DESCUBRE EL MÉTODO PROFESIONAL PARA DEJAR DE IMPROVISAR TUS ENTRENAMIENTOS Y EVOLUCIONAR MÁS RÁPIDO".
- Update Hero description to emphasize the professional platform, +250 sessions, and +2.000 exercises with video streaming.
- Add "ÁREA DE MIEMBROS EXCLUSIVA" section highlighting features like secure login, organized panel, and video player.
- Update Video section with the headline "TODO CON VIDEO STREAMING INTEGRADO".
- Add "TE IDENTIFICAS CON ALGUNA DE ESTAS SITUACIONES?" section for psychological pain points.
- Implement "BIBLIOTECA POR DENTRO" section with 3 steps: Acceso Instantáneo, Todo Organizado, Mira el video y aplica.
- Add specific content categories (Lateral, Porteros, Defensa, etc.) under "ESTO ES LO QUE VAS A TENER".
- Enhance "SIN vs CON" section with detailed comparisons for both players and coaches.
- Update "QUIÉN SOY" section using the provided coach image and the reference's "Coach Martínez" narrative (+15 years experience, +2.000 players formed).
- Update FAQ with specific questions from the reference site.

### Design & Layout
- Maintain the high-conversion funnel structure: Hero -> Membership -> Video -> Pain Points -> Solution -> Testimonials -> Pricing -> Warranty -> FAQ -> Final CTA.
- Use a white background with "Pitch Green" and "Gold" accents as requested previously.
- Ensure the layout is mobile-first and responsive.

### Functional Invariants
- **Checkout Links**: Keep `CHECKOUT_LINK_FULL` and `CHECKOUT_LINK_BASIC` pointing to Kiwify.
- **Pricing**: Keep the current pricing ($5.50 / $5.00) as instructed.
- **Tracking**: Keep the Meta Pixel and Lead tracking logic.

## Technical Details
- Modify `src/routes/index.tsx` to reflect the new structure and copy.
- Use `framer-motion` (if needed) or the existing `useReveal` hook for animations.
- Replace placeholders with reference text while ensuring variables for assets are correctly used.
