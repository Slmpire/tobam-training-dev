# Tobams Group — Training & Development Page

A Tobams Group Training and Development web page, built as a frontend assessment submission. The project reproduces the provided Figma design across desktop and mobile breakpoints using Next.js 14 and Tailwind CSS.

---

## 🔗 Links

| | |
|---|---|
| **Live URL** | [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app) |
| **GitHub Repo** | [https://github.com/Slmpire/tobam-training-dev.git](https://github.com/Slmpire/tobam-training-dev.git) |
| **Figma Design** | [https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0) |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Icons | Iconify (`@iconify/react`) |
| Fonts | Nunito, Nunito Sans, Inter (Google Fonts) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
training-dev/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileDrawer.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LMSBlock.tsx
│   │   ├── Courses.tsx
│   │   ├── Management.tsx
│   │   ├── Schedule.tsx
│   │   ├── Stats.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MacStudio.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── SectionTitle.tsx
├── public/
│   └── images/
├── tailwind.config.ts
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Slmpire/tobam-training-dev.git
   cd training-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add images**

   Place the following image files in `/public/images/`:

   | File | Description |
   |---|---|
   | `logo.svg` | Navbar logo |
   | `logo-white.svg` | Footer logo (white version) |
   | `hero.jpg` | Hero section background photo |
   | `lms-team.jpg` | LMS section circular photo |
   | `corporate-training.jpg` | Corporate Trainings block photo |
   | `individual-training.jpg` | Individual Training block photo |
   | `capacity-development.jpg` | Capacity Development block photo |
   | `management-development.jpg` | Management Development photo |
   | `transformation-hub.jpg` | Transformation Hub photo |
   | `testimonial-1.jpg` | Sarah Johnson avatar |
   | `testimonial-2.jpg` | Aisha Yusuf avatar |
   | `testimonial-3.jpg` | John Davies avatar |
   | `testimonial-4.jpg` | Chinonso Nwankwo avatar |

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Design Decisions

### Component Architecture
Each section of the page is its own isolated component under `components/sections/`, making the codebase easy to maintain and extend. Shared primitives (Button, Badge, SectionTitle) live in `components/ui/`.

### Responsive Strategy
All sections are built mobile-first. Rather than relying on CSS transforms or JavaScript-driven layout swaps, each complex section (LMSBlock, Management, Schedule, Testimonials) uses Tailwind's `lg:hidden` / `hidden lg:flex` pattern to render two separate DOM subtrees — one optimised for mobile, one for desktop. This avoids layout thrashing and keeps breakpoint logic explicit and readable.

### Testimonials Carousel
A single `index` state drives both the mobile (1-card) and desktop (3-card) views simultaneously. On desktop, `desktopStart` is clamped to `testimonials.length - 3` so the grid never renders fewer than three cards.

### Tailwind Config Extension
The design system tokens from Figma (colours, font sizes, spacing, letter spacing) are mapped directly into `tailwind.config.ts` as custom values. This means utility classes like `text-h2`, `text-primary`, `bg-lavender`, and `max-w-content` reflect the exact design spec rather than approximating with arbitrary values.

### SVG Logos
Logos and  all photographs use Next.js `<Image />` for automatic optimisation.

---

## ⚠️ Known Issues

- **Fonts** — Google Fonts (Nunito, Nunito Sans, Inter) are loaded via `next/font/google` in `layout.tsx`. In environments without internet access during build, fonts will fall back to system sans-serif.

---

## 📦 Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "@iconify/react": "latest"
}
```

---

## 🚀 Deployment

The project is deployed on **Vercel**. Every push to the `main` branch triggers an automatic redeployment.

To deploy your own instance:

```bash
npm install -g vercel
vercel
```

Follow the CLI prompts and your live URL will be generated automatically.

---

*Built by Pelumi — Frontend Assessment, Tobams Group, 2026.*