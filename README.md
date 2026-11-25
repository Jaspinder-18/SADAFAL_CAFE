# Sadafal Cafe & Dining — Premium Restaurant Website

A modern, luxurious, fully responsive static restaurant website for **Sadafal Cafe & Dining**, situated in Nawalgarh, Rajasthan, India. Built with **React.js, Vite, Lucide Icons, and Vanilla CSS3**, featuring high-definition culinary and venue imagery hosted on **Cloudinary CDN**.

Ready for immediate production deployment as a **Render Static Site**.

---

## 🍽️ Restaurant Information (Verified)

- **Name:** Sadafal Cafe & Dining
- **Address:** Near OBC Bank, Nansa Gate, Nawalgarh, Rajasthan 333042, India
- **Phone:** [+91 87642 15021](tel:+918764215021)
- **Email:** [sadafalcafe@gmail.com](mailto:sadafalcafe@gmail.com)
- **Timings:** 9:00 AM – 11:00 PM (*Provisional, subject to owner confirmation*)
- **Cuisines:** North Indian, South Indian, Chinese, Italian, Fast Food, Street Food, Pizza, Sandwiches, Beverages
- **Dietary:** 100% Pure Vegetarian Kitchen

---

## ✨ Features & Architecture

1. **Brand Identity & Luxury Design System**:
   - Deep forest green (`#091c12`, `#0f2e1e`), warm cream (`#fdfbf7`), off-white, and subtle golden accents (`#d4af37`).
   - Typography: *Cinzel* & *Playfair Display* for refined headings, *Plus Jakarta Sans* for crisp body text.
   - Micro-interactions: Gold rim elevation, smooth backdrop blur, hover cards, custom scrollbar.

2. **Digital Menu (Core Feature)**:
   - **15 Authentic Categories**: Combos, Breakfast, Soups, Starters, Main Course, Rice & Biryani, Noodles, South Indian, Pizza & Pasta, Burgers & Sandwiches, Maggi, Snacks, Breads, Accompaniments, Beverages.
   - **100+ listed dishes** faithfully structured from actual listings.
   - Real-time client-side search across all dish titles and categories.
   - Interactive category pill tabs with dish counters.
   - Pure Vegetarian indicator dot on all items.
   - Prominent transparency notice: *"Menu and availability may change. Please contact the restaurant for current details."*

3. **Cloudinary CDN Integration**:
   - Automated asset management pipeline using Cloudinary cloud `mychatend`.
   - High-resolution, royalty-free food and restaurant photography delivered via optimized CDN URLs (`f_auto, q_auto`).

4. **Visual Gallery & Lightbox**:
   - Responsive multi-column photo grid.
   - Fullscreen interactive modal lightbox with Previous, Next, and Close controls.
   - Keyboard accessible (`Escape` to close, `ArrowLeft`/`ArrowRight` to navigate).

5. **Table & Dining Enquiry**:
   - Full enquiry form: Name, Phone, Date, Time, Number of Guests, and Special Requests.
   - Client-side validation.
   - Direct "Call to Reserve" action to `+91 87642 15021` and email draft preparation without deceptive fake booking claims.

6. **Location & Contact**:
   - Embedded Google Maps location for Nansa Gate, Nawalgarh.
   - "Get Directions" linking directly to Google Maps navigation.
   - One-click `tel:` and `mailto:` action buttons.

7. **Responsive & Mobile-First**:
   - Fully tested across mobile (360px, 390px, 430px), tablet (768px), and desktop viewports.
   - Touch-friendly mobile drawer menu.
   - Floating back-to-top button.

8. **Future MERN Integration Ready**:
   - Decoupled data layer (`src/data/restaurantData.js`, `src/data/menuData.js`, `src/data/galleryData.js`).
   - Clean, modular component architecture ready to plug into Express/MongoDB APIs whenever backend expansion is desired.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18, v20, or v22 recommended)
- [npm](https://www.npmjs.com/) (v9+)

### Installation & Development
```bash
# 1. Clone or navigate to the project directory
cd C:\restorents\SADAFAL_CAFE

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite prints in your console).

### Production Build
```bash
# Build optimized static assets into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment to Render (Static Site)

This repository includes a preconfigured `render.yaml` for zero-configuration static site deployment.

### Option A: Via Render Dashboard (Recommended)
1. Initialize Git in the project and push to your GitHub / GitLab repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sadafal Cafe & Dining website"
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Render.com](https://render.com/).
3. Click **New +** → **Static Site**.
4. Connect your Git repository.
5. Set the following build settings:
   - **Name:** `sadafal-cafe-and-dining`
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
6. Click **Create Static Site**. Render will build and deploy your site with a free HTTPS URL (e.g. `https://sadafal-cafe-and-dining.onrender.com`).

### Option B: Via Render Blueprint (render.yaml)
1. Push your repository to GitHub.
2. In Render, select **New +** → **Blueprint**.
3. Select your repository. Render will automatically read `render.yaml` and configure the build command and publish directory.

---

## 📁 Project Structure

```
SADAFAL_CAFE/
├── .env                              # Cloudinary credentials
├── .gitignore                        # Git ignore specifications
├── package.json                      # Project dependencies & build scripts
├── vite.config.js                    # Vite bundler configuration
├── render.yaml                       # Render static site deployment config
├── index.html                        # HTML5 with SEO meta, OpenGraph, JSON-LD schema
├── README.md                         # Project documentation
├── public/
│   ├── favicon.svg                   # Custom gold & forest green monogram favicon
│   └── robots.txt                    # Search crawler rules
├── scripts/
│   ├── upload_cloudinary.py          # Automated Cloudinary asset uploader
│   └── uploaded_images.json          # Manifest of uploaded Cloudinary CDN URLs
└── src/
    ├── main.jsx                      # App root mount
    ├── App.jsx                       # Master page layout
    ├── index.css                     # Premium design system & responsive styling
    ├── data/
    │   ├── restaurantData.js         # Centralized contact, hours, address, and features
    │   ├── menuData.js               # 15 categories and ~100 authentic dishes
    │   └── galleryData.js            # Cloudinary gallery photography & showcase items
    └── components/
        ├── Navbar.jsx                # Sticky navbar with mobile drawer
        ├── Hero.jsx                  # Cinematic hero with badges & CTAs
        ├── About.jsx                 # Authentic welcome story & highlights
        ├── FoodShowcase.jsx          # Visual culinary category grid
        ├── Menu.jsx                  # Interactive menu with category tabs & search
        ├── WhyChooseUs.jsx           # 4 core feature cards
        ├── Gallery.jsx               # Visual gallery grid with lightbox trigger
        ├── Lightbox.jsx              # Fullscreen modal image viewer
        ├── Reservation.jsx           # Table enquiry form & direct call action
        ├── Contact.jsx               # Address cards, direct call/email & Google Maps
        ├── Footer.jsx                # Brand overview, timings & links
        └── BackToTop.jsx             # Floating back-to-top button
```

---

## 📄 License & Content Attribution
- Content and brand identity prepared for **Sadafal Cafe & Dining**, Nawalgarh, Rajasthan.
- Photography licensed via Unsplash royalty-free licensing and hosted on Cloudinary.
