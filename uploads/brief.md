# Lan Chi Mart — Website Brief

## Objective

A single-page brand-credibility website for Lan Chi Mart. Primarily addresses investors, press, and partners who need to assess the brand; secondarily job seekers; lastly shoppers finding a store. No e-commerce.

---

## Strategic Concept

**"Mua sắm - Ăn uống - Vui chơi"** — Shop, Eat, Play for rural Vietnam.

Lan Chi Mart is not just a supermarket. Each store is a destination: retail + food court + bakery + indoor playground, serving underserved suburban and rural communities in northern Vietnam and narrowing the gap between urban and rural quality of life.

---

## Audience (priority order)

1. **Investors / Press / Partners** — need brand story, scale, and positioning
2. **Job seekers** — want to know what the company is and where to apply
3. **Shoppers** — want to find a nearby store

---

## Page Structure

Single scrolling page, Vietnamese language throughout.

### 1. Hero
- Full-bleed brand visual (store photo or brand pattern)
- Logo + tagline: **"Mua sắm - Ăn uống - Vui chơi"**
- Short brand statement (1–2 lines)

### 2. Về chúng tôi (About Us)
- Brand story: rural/suburban supermarket chain, northern Vietnam, subsidiary of Central Retail
- Key numbers: store count, provinces covered, years operating
- Positioning: bringing urban-quality retail and services to rural communities

### 3. Sản phẩm (Products)
Four categories, presented as bold color blocks:

| Category | Vietnamese | Brand color |
|----------|-----------|-------------|
| Everyday goods (FMCG) | Hàng tiêu dùng | Red |
| Fresh produce & food | Tươi sống | Green |
| Household & hardware | Gia dụng | Yellow |
| Fashion & apparel | Thời trang | Pink/Magenta |

### 4. Dịch vụ (Services)
Four added services, each with icon + name + one-line description:

| Service | Name | Description |
|---------|------|-------------|
| Food court | Food City | Khu ẩm thực đa dạng ngay trong siêu thị |
| Bakery | Tiệm Bánh | Bánh tươi mỗi ngày |
| Indoor playground | Playland | Khu vui chơi trong nhà cho trẻ em |
| Fashion | Thời Trang | Thời trang gia đình |

### 5. Hệ thống cửa hàng (Store Network)
- Photo card grid, ~34 stores, grouped by province
- Each card: store photo + store name + province
- Store data (addresses, details) to be fetched from BigQuery via `/dook` and matched to filenames in `LCM-PR-Photos/`

### 6. Footer
- Contact information
- Careers link
- Social links (Facebook, etc.)

---

## Design System

### Colors

| Role | Value | Usage |
|------|-------|-------|
| Primary red | `#BC1C2B` | Hero, section headers, logo background |
| Promotion yellow/orange | warm yellow | Accent blocks, CTAs |
| Fresh green | medium green | Tươi sống category |
| Softline pink | magenta-pink | Thời trang category |
| White | `#FFFFFF` | Text blocks, card backgrounds |
| Dark | near-black | Footer, text on light |

### Typography

- **Headlines:** Aptos Bold — always Extra Bold weight, large scale
- **Body / supporting:** Aptos Light
- **Hierarchy (from brand guide):**
  - XL headline: Aptos Bold, 2× scale
  - Section title: Aptos Bold, 1× scale
  - Paragraph: Aptos Light, 1×

### Layout Principles
- **Color block first:** sections are defined by bold background colors, not borders or cards
- **Light on text:** minimal copy, large type, let visuals and color carry the weight
- **Arrow motif:** use the brand's directional arrow icon for navigation cues and CTAs
- **Concentric circle pattern:** available as a decorative element (from brand guide) — use sparingly as section backgrounds or dividers
- **Logo clear space:** minimum clear space = height of the "L" glyph on all sides

### Logo Usage
- Primary: red square background + white L + "LANCHI MART" wordmark
- On photo backgrounds: use white or full-color version per brand guide
- Do not: rotate, recolor, add drop shadows, place on busy patterns, use low-contrast backgrounds

---

## Technical Requirements

- **Type:** Static site — HTML, CSS, JS only. No backend, no CMS, no database.
- **Language of content:** Vietnamese (`lang="vi"`)
- **Framework:** Claude decides — lean toward Vite + vanilla JS or Vite + React. Minimal dependency footprint.
- **Scaffold for maintainability:** Store data in a separate JS/JSON file (`stores.js`) so adding a store = adding one object, not touching markup. Same for product/service copy.
- **Images:** Use `LCM-PR-Photos/` for store cards. Optimize for web (compress, use `loading="lazy"` on store grid).
- **Fonts:** Load Aptos from local or system stack; fallback to `Arial, sans-serif`.
- **No CMS needed** — future updates done via Claude Code directly.
- **Responsive:** Mobile-first. Store card grid collapses gracefully.

---

## Assets

| Asset | Location | Notes |
|-------|----------|-------|
| Brand guideline | `LC_Brand_Guideline.pdf` | Colors, fonts, logo rules, layout system |
| Store photos | `LCM-PR-Photos/` | ~34 stores; filenames = store names |
| Store data | BigQuery via `/dook` | Match on store name to photo filename |
| Copy reference (comprehensive) | `HSNL LANCHI -13102022 (1)_removed.pdf` | Older but detailed — too large to auto-read; use for brand story and category copy |
| Copy reference (current) | `lcm-central-url.md` → centralretail.com | Short but up-to-date positioning |

---

## Out of Scope

- E-commerce / online ordering
- User accounts or login
- Interactive map embed
- CMS or admin interface
- English-language version
- Phase 2+ features
