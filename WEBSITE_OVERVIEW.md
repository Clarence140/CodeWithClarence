# CodeWithClarence - Detailed Website Overview

## 🌐 Website Information

**Name:** CodeWithClarence  
**Owner:** Clarence Dansalan Sumagang  
**Tagline:** "Solving Real World Problems"  
**Type:** Personal Portfolio Website  
**Framework:** React 19.1.0 with Vite 7.0.4  
**Routing:** React Router DOM

---

## 📋 Table of Contents

1. [Project Structure](#project-structure)
2. [Navigation & Routing](#navigation--routing)
3. [Pages Overview](#pages-overview)
4. [Components](#components)
5. [Projects Showcase](#projects-showcase)
6. [Skills Display](#skills-display)
7. [Contact Information](#contact-information)
8. [Design & Styling](#design--styling)
9. [Features & Functionality](#features--functionality)
10. [Dependencies](#dependencies)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── shared/
│       ├── Footer.jsx
│       ├── SuccessModal.jsx
│       └── TypingAnimation.jsx
├── pages/
│   ├── Home/
│   │   ├── components/
│   │   │   └── Hero.jsx
│   │   └── index.js
│   ├── About/
│   │   ├── components/
│   │   │   └── About.jsx
│   │   └── index.js
│   ├── Projects/
│   │   ├── components/
│   │   │   └── Projects.jsx
│   │   └── index.js
│   ├── Skills/
│   │   ├── components/
│   │   │   └── Skills.jsx
│   │   └── index.js
│   └── Contact/
│       ├── components/
│       │   └── Contact.jsx
│       └── index.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧭 Navigation & Routing

### Navigation Items
1. **Home** (`/`)
2. **About** (`/about`)
3. **Projects** (`/projects`)
4. **Skills** (`/skills`)
5. **Contact** (`/contact`)

### Navigation Features
- Fixed navigation bar at the top
- Auto-hide on scroll down, show on scroll up
- Active route highlighting (red/primary color)
- Mobile-responsive hamburger menu
- Smooth scroll to top functionality
- Logo click returns to home page

---

## 📄 Pages Overview

### 1. HOME PAGE (`/`)

**Component:** `src/pages/Home/components/Hero.jsx`

#### Content:
- **Name:** CLARENCE D. SUMAGANG
- **Title:** ASPIRING FULL STACK WEB DEVELOPER (with typing animation)
- **Description:** 
  > "A highly motivated IT fresh graduate seeking an entry-level position where I can apply my knowledge and continuously develop my skills within a professional environment."

#### Visual Elements:
- Profile picture: `/Logos/ProfilePic.png`
- Two-column layout (image left, text right on desktop)
- Responsive design (stacks on mobile)

#### Features:
- **Typing Animation:** Animated text effect for the title
- **VIEW PROJECTS Button:** Links to `/projects` page
- **REQUEST CV Button:** Opens modal with contact options

#### CV Request Modal:
When clicked, displays a modal with contact options:
- Facebook: https://www.facebook.com/cl4rence14/
- LinkedIn: https://www.linkedin.com/in/clarence-sumagang-33411a368/
- GitHub: https://github.com/Clarence140

#### Animations:
- Fade-in and slide-up animations on scroll
- Intersection Observer for scroll-triggered animations

---

### 2. ABOUT PAGE (`/about`)

**Component:** `src/pages/About/components/About.jsx`

#### Section Title:
**ABOUT ME**

#### Content Structure:
Two-column layout with side-by-side cards:

##### Left Card: PERSONAL PROFILE
**Content:**
> "Hi! I'm Clarence Dansalan Sumagang, a 23-year-old IT graduate from the Philippines. I'm a passionate cyclist, gamer, and content creator who makes videos that entertain and inform gamers and nature lovers alike. I enjoy building meaningful websites that solve real world problems through design and technology. Many of my web project ideas come to me while riding my bike, when I reflect on everyday challenges and possible solutions. Since graduating, I have been focusing on improving my skills step by step, especially in frontend development with React. As a content creator, I share gameplay, strategies, and cycling videos paired with music that fits the mood. I love creating and look forward to growing and taking on new challenges."

##### Right Card: DEVELOPMENT JOURNEY
**Content:**
> "My journey into web development began during our capstone project where I led both frontend and backend tasks. I designed the interface, managed the database, and handled the core logic. It was the biggest project I faced, and though it came with many challenges and errors, I learned a lot and grew more confident. Later, during my OJT at MetroJobs, I helped redesign their website with friends using HTML, CSS, and JavaScript. This real-world experience was rewarding and helped me apply my skills. Now that I have graduated, I am focused on mastering frameworks like React to build cleaner and more dynamic websites. I stay motivated by my passion and eagerness to face new challenges in web development."

#### Visual Design:
- Cards with dark background, borders, and hover glow effects
- Vertical divider between cards (desktop only)
- Slide-in animations from left and right

---

### 3. PROJECTS PAGE (`/projects`)

**Component:** `src/pages/Projects/components/Projects.jsx`

#### Section Title:
**MY PROJECTS**

#### Features:
- Pagination: 3 projects per page (7 total projects = 3 pages)
- Image carousel for each project (auto-rotates every 5 seconds)
- Image modal with zoom and navigation
- Live preview and GitHub repository links

---

### 📦 Projects Details:

#### Project 1: MetroJobs Website Rework (OJT)
- **Type:** On-the-job Training Project
- **Description:** A recruitment and HR solutions website connecting job seekers with top companies across various industries. Features comprehensive job listings, detailed company information, and branch locations in a clean, user-friendly interface. Built with HTML, CSS, and JavaScript for seamless interactivity. Enhanced with Canva-designed animated GIFs and Photoshop-optimized images for professional visual presentation. Developed during on-the-job training to deliver modern recruitment solutions.
- **Tech Stack:** HTML, CSS, JavaScript, Canva, Photoshop
- **Live Link:** https://metro-jobs.vercel.app/
- **GitHub:** https://github.com/Clarence140/MetroJobsss
- **Images:** 5 screenshots
  - MetroJobsHome.png
  - MetroJobsAboutUS.png
  - MetroJobsJobOpening.png
  - MetroJobsFacilities.png
  - MetroJobsContacts.png

#### Project 2: PAMCares – Online Pet Healthcare System (Capstone Project)
- **Type:** Capstone Project
- **Description:** A comprehensive web-based pet healthcare management system for the Philippine Animal Medical Center (PAMC) in Quezon City. Enhances accessibility and connectivity between pet owners and veterinary professionals through online appointment booking, digital medical records access, and teleconsultation services. Developed as a capstone project using HTML, CSS, and Vanilla JavaScript with Firebase handling database management and authentication. UI/UX designed with Figma and Canva for intuitive user experience.
- **Tech Stack:** HTML, CSS, JavaScript, Firebase, Canva, Figma
- **Live Link:** # (Not available)
- **GitHub:** https://github.com/Clarence140/PAMCares-FINAL
- **Images:** 5 screenshots
  - PamCaresLogin.PNG
  - PamCaresAdmin.PNG
  - PamCaresAdminAccMan.PNG
  - PamCaresUserDashBoard.PNG
  - PamCaresUserBooking.PNG

#### Project 3: Clarence Cycling Adventures Website (Under Development)
- **Type:** Personal Project (Under Development)
- **Description:** A personal cycling website documenting the journeys of LUNA, a custom-built road bike. Features dedicated sections including Meet LUNA, Adventures Gallery, Bike Specifications, and Contact. Built with modern React and Vite for optimal performance and clean, responsive UI. JavaScript powers all interactive features while Photoshop enhances visual aesthetics. This project beautifully merges web development expertise with cycling passion, creating an engaging digital showcase for cycling enthusiasts.
- **Tech Stack:** React, Vite, Javascript, Photoshop
- **Live Link:** https://clarence-cyling-web.vercel.app/
- **GitHub:** https://github.com/Clarence140/ClarenceCylingWeb
- **Images:** 5 screenshots
  - ClarenceCyclingHero.PNG
  - ClarenceCyclingLUNA.PNG
  - ClarenceCyclingAdventures.PNG
  - ClarenceCyclingOwner.PNG
  - ClarenceCyclingSpec.PNG

#### Project 4: RescueNet – Emergency Response Platform
- **Type:** Completed Project
- **Description:** A life-saving emergency response platform for Metro Manila residents providing instant access to 100+ location-based emergency hotlines across five critical categories: Fire, Flood/Disaster, Crime, Health/Medical, and Power & Utilities. Features district-specific services for Quezon City and Manila City, role-based action plans, and intuitive mobile-first design. Built with React, Vite, Tailwind CSS, Framer Motion, and Radix UI. This community-focused platform reduces emergency response time by centralizing essential contacts and guidance.
- **Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Radix UI
- **Live Link:** https://rescue-net.vercel.app/
- **GitHub:** https://github.com/Clarence140/RescueNet
- **Images:** 13 screenshots
  - 1.png, 2.png, 3.png
  - FL1.png, FL2.png (Flood/Disaster)
  - F1.png, F2.png (Fire)
  - C1.png, C2.png (Crime)
  - H1.png, H2.png (Health/Medical)
  - P1.png, P2.png (Power & Utilities)

#### Project 5: PocketMart – Digital Sari-Sari Store Platform (Under Development)
- **Type:** E-commerce Platform (Under Development)
- **Description:** A comprehensive e-commerce platform digitizing traditional Filipino sari-sari stores, bridging neighborhood convenience with modern online shopping. Features dual-portal architecture with customer storefront for seamless browsing, reservations, and purchases, plus robust admin dashboard for inventory management, order processing, sales analytics, and user administration. Built with cutting-edge Next.js 15, React 19, and Tailwind CSS v4. Empowers local Filipino store owners to thrive digitally while preserving community shopping traditions.
- **Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Framer Motion, Lucide React
- **Live Link:** https://pocket-mart-v2.vercel.app/
- **GitHub:** https://github.com/Clarence140/PocketMartV2
- **Images:** 13 screenshots
  - P1Landing.png
  - user1.png through user6.png (Customer portal)
  - admin1.png through admin6.png (Admin dashboard)

#### Project 6: Productivity Tools Suite – Boost Your Workflow
- **Type:** Completed Project
- **Description:** A comprehensive web application featuring six privacy-focused productivity tools: professional FlowDoc Generator with 36+ industry-standard symbols, OCR text extraction supporting 100+ languages, real-time word counter with reading estimates, email-to-Markdown formatter, random spin-wheel picker, and Markdown-to-Word converter. Features full-screen visualization, zoom controls, parallel processing diagrams, and grouping capabilities. All processing happens client-side ensuring complete data privacy with zero server uploads.
- **Tech Stack:** Next.js, Tailwind CSS, Mermaid.js, Tesseract.js
- **Live Link:** https://productivity-tools-suite.vercel.app/
- **GitHub:** https://github.com/Clarence140/Productivity-Tools-Suite
- **Images:** 3 screenshots
  - 1.png, 2.png, 3.png

#### Project 7: Project Management System (Under Development)
- **Type:** Collaboration Platform (Under Development)
- **Description:** A role-based platform for managing projects, tasks, and team collaboration. Features include task assignment and tracking, Kanban boards, real-time activity logs, file sharing, comments and mentions, status updates, and member dashboards. Organized dashboards for Admin, PM, and Member roles with role-based access controls, progress tracking, and project reporting. Built with responsive design and dynamic state handling.
- **Tech Stack:** Next.js, React, JavaScript, Tailwind CSS
- **Live Link:** https://project-management-eta-blond.vercel.app/login
- **GitHub:** https://github.com/Clarence140/Project-Management
- **Images:** 3 screenshots
  - prjctman1.png, prjctman2.png, prjctman3.png

#### Image Modal Features:
- Full-screen image viewer
- Zoom in/out (Ctrl + Mouse Wheel or pinch)
- Drag to pan when zoomed
- Navigation arrows (Previous/Next image)
- Close button (X or click outside)
- Touch support for mobile

---

### 4. SKILLS PAGE (`/skills`)

**Component:** `src/pages/Skills/components/Skills.jsx`

#### Section Title:
**MY SKILLS**

#### Skills Displayed (14 Total):
1. **HTML** (FaHtml5 icon)
2. **CSS** (FaCss3Alt icon)
3. **JavaScript** (FaJs icon)
4. **React** (FaReact icon)
5. **Next.js** (SiNextdotjs icon)
6. **Node.js** (SiNodedotjs icon)
7. **Express.js** (SiExpress icon)
8. **Tailwind CSS** (SiTailwindcss icon)
9. **Git** (FaGitAlt icon)
10. **GitHub** (FaGithub icon)
11. **Firebase** (SiFirebase icon)
12. **Figma** (FaFigma icon)
13. **Canva** (SiCanva icon)
14. **Photoshop** (SiAdobephotoshop icon)

#### Visual Design:
- Grid layout: 2 columns (mobile), 3 (tablet), 4 (desktop), 5 (large), 6 (extra large)
- Each skill card shows:
  - Large icon (3xl to 5xl size)
  - Skill name below icon
- Hover glow effect on each card
- Staggered fade-in animation on scroll

---

### 5. CONTACT PAGE (`/contact`)

**Component:** `src/pages/Contact/components/Contact.jsx`

#### Section Title:
**LET'S TALK**

#### Layout:
Two-column reverse layout (form on right, message on left)

#### Contact Form:
**Fields:**
1. **Full Name** (text input, max 50 characters, required)
2. **Email Address** (email input, max 100 characters, required)
3. **Your Message** (textarea, max 500 characters, required)
   - Character counter displayed (e.g., "245/500 characters")

**Form Features:**
- Real-time character counting for message field
- Validation (required fields)
- Loading state during submission
- Error handling and display
- Success modal on successful submission

#### Form Submission:
- **Service:** Web3Forms API
- **Access Key:** 044e9a01-87ea-4c42-abed-3e8e47acb452
- **Endpoint:** https://api.web3forms.com/submit
- **Method:** POST with FormData

#### Success Modal:
After successful submission, displays:
- Green checkmark icon
- "MESSAGE SENT!" title
- Confirmation message: "Thank you for reaching out! I'll get back to you as soon as possible."
- Close button

#### Right Side Content:
Large text display: **"THANKS FOR YOUR VISIT!"**

#### Animations:
- Form slides in from right
- Message text slides in from left
- Form validation feedback

---

## 🧩 Components

### Navigation Component (`src/components/Navigation.jsx`)

**Features:**
- Fixed position at top
- Auto-hide/show on scroll
- Active route highlighting
- Mobile hamburger menu
- Logo with brand name
- Smooth scroll to top

**Navigation Items:**
- Home, About, Projects, Skills, Contact

### Footer Component (`src/components/shared/Footer.jsx`)

**Content:**
- Logo and brand name: "CodeWithClarence"
- Tagline: "SOLVING REAL WORLD PROBLEMS"
- Social media links (5 platforms)
- Copyright notice: "DESIGNED AND BUILT BY CLARENCE SUMAGANG"
- Current year copyright

**Social Links:**
1. Facebook: https://www.facebook.com/cl4rence14/
2. LinkedIn: https://www.linkedin.com/in/clarence-sumagang-33411a368/
3. YouTube: https://www.youtube.com/@rand0mgaming.youtubee
4. TikTok: https://www.tiktok.com/@clarence.cycling
5. GitHub: https://github.com/Clarence140

### TypingAnimation Component (`src/components/shared/TypingAnimation.jsx`)

**Purpose:** Creates typewriter effect for text
**Usage:** Hero page title
**Features:**
- Customizable speed and delay
- Animated cursor (pulsing pipe character)
- Character-by-character reveal

**Props:**
- `text`: String to animate
- `speed`: Typing speed in ms (default: 100)
- `delay`: Delay before starting (default: 500)

### SuccessModal Component (`src/components/shared/SuccessModal.jsx`)

**Purpose:** Displays success message after form submission
**Features:**
- Green checkmark icon
- Close button (X)
- Click outside to close
- ESC key to close
- Prevents body scroll when open

---

## 🎨 Design & Styling

### Color Scheme

**Primary Color (Red):**
- Default: #FF0000
- Variants: 50-900 shades
- Used for: Highlights, buttons, active states, hover effects

**Dark Theme:**
- Background: dark-900 (#0f172a)
- Cards: dark-800 (#1e293b)
- Borders: dark-700 (#334155)
- Text: white and gray-300

### Typography

**Font Family:** Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900
- Used for: All text elements

**Font Classes:**
- `font-futuristic`: Poppins font
- `tracking-wider`: Increased letter spacing

### Visual Effects

**Hover Glow Effect:**
- Transform: translateY(-5px) scale(1.05)
- Brightness: 120%
- Box shadow: Red glow (rgba(255, 0, 0, 0.3))
- Border color: Red tint

**Animations:**
- Fade-in
- Slide-up
- Slide-down
- Slide-left
- Slide-right
- Pulse

**Scroll Animations:**
- Intersection Observer API
- Fade and slide effects on scroll into view
- Staggered delays for multiple elements

### Custom Scrollbar

**Style:**
- Width: 8px
- Track: #1e293b (dark-800)
- Thumb: #ff0000 (primary red)
- Hover: #cc0000 (darker red)
- Border radius: 4px

### Responsive Design

**Breakpoints:**
- Mobile: Default (sm: 640px)
- Tablet: md: 768px
- Desktop: lg: 1024px
- Large: xl: 1280px
- Extra Large: 2xl: 1536px

**Mobile Features:**
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons
- Responsive text sizes
- Mobile-optimized spacing

---

## ⚡ Features & Functionality

### 1. Routing
- React Router DOM for client-side routing
- 5 main routes (Home, About, Projects, Skills, Contact)
- Active route highlighting

### 2. Scroll Animations
- Intersection Observer API
- Fade-in and slide animations
- Staggered delays for visual appeal

### 3. Image Gallery
- Auto-rotating carousel (5-second intervals)
- Click to open full-screen modal
- Zoom (Ctrl + scroll or pinch)
- Drag to pan when zoomed
- Navigation arrows
- Touch support

### 4. Pagination
- Projects page: 3 projects per page
- Previous/Next buttons
- Page number indicators
- Smooth scroll to top on page change

### 5. Contact Form
- Real-time validation
- Character counter
- Loading states
- Success/error feedback
- Web3Forms integration

### 6. Responsive Navigation
- Auto-hide on scroll down
- Auto-show on scroll up
- Mobile hamburger menu
- Active route indicator

### 7. Typing Animation
- Custom typewriter effect
- Configurable speed and delay
- Animated cursor

### 8. Modal System
- CV Request Modal (Hero page)
- Success Modal (Contact page)
- Image Viewer Modal (Projects page)
- Backdrop blur effects
- ESC key to close
- Click outside to close

---

## 📦 Dependencies

### Production Dependencies

1. **react** ^19.1.0
   - Core React library

2. **react-dom** ^19.1.0
   - React DOM renderer

3. **react-router-dom** (installed)
   - Client-side routing

4. **react-icons** ^5.5.0
   - Icon library (Font Awesome, Simple Icons)

5. **react-intersection-observer** ^9.16.0
   - Scroll animations and visibility detection

6. **framer-motion** ^12.23.22
   - Animation library (used in projects)

7. **aos** ^2.3.4
   - Animate on scroll library

8. **react-typed** ^2.0.12
   - Typing animation (custom implementation used instead)

### Dev Dependencies

1. **vite** ^7.0.4
   - Build tool and dev server

2. **@vitejs/plugin-react** ^4.6.0
   - React plugin for Vite

3. **tailwindcss** 3
   - Utility-first CSS framework

4. **autoprefixer** ^10.4.21
   - CSS vendor prefixer

5. **postcss** ^8.5.6
   - CSS processor

6. **eslint** ^9.30.1
   - JavaScript linter

---

## 📱 Assets & Images

### Logos
- `/Logos/CodeWithClarence.png` - Brand logo
- `/Logos/ProfilePic.png` - Profile picture

### Project Images
Stored in `/public/assets/`:
- `metrojobs/` - 5 images
- `PAMCares/` - 5 images
- `ClarenceCycling/` - 5 images
- `RescueNet/` - 13 images
- `PocketMart/` - 13 images
- `ProductivityTools/` - 3 images
- `ProjectManagement/` - 3 images

---

## 🔗 External Links

### Social Media
- **Facebook:** https://www.facebook.com/cl4rence14/
- **LinkedIn:** https://www.linkedin.com/in/clarence-sumagang-33411a368/
- **YouTube:** https://www.youtube.com/@rand0mgaming.youtubee
- **TikTok:** https://www.tiktok.com/@clarence.cycling
- **GitHub:** https://github.com/Clarence140

### Live Projects
1. MetroJobs: https://metro-jobs.vercel.app/
2. Clarence Cycling: https://clarence-cyling-web.vercel.app/
3. RescueNet: https://rescue-net.vercel.app/
4. PocketMart: https://pocket-mart-v2.vercel.app/
5. Productivity Tools: https://productivity-tools-suite.vercel.app/
6. Project Management: https://project-management-eta-blond.vercel.app/login

---

## 🎯 Key Features Summary

✅ Modern React 19 with Vite
✅ Responsive design (mobile-first)
✅ Dark theme with red accents
✅ Smooth scroll animations
✅ Image gallery with zoom
✅ Contact form with validation
✅ Typing animations
✅ Auto-hiding navigation
✅ Project pagination
✅ Social media integration
✅ SEO-friendly structure
✅ Clean component architecture
✅ Organized file structure

---

## 📝 Personal Information

**Name:** Clarence Dansalan Sumagang  
**Age:** 23 years old  
**Location:** Philippines  
**Education:** IT Graduate  
**Profession:** Aspiring Full Stack Web Developer  
**Interests:** Cycling, Gaming, Content Creation  
**Focus:** Frontend development with React

---

## 🚀 Technologies Used

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- React Intersection Observer

**Design Tools:**
- Figma
- Canva
- Adobe Photoshop

**Development:**
- HTML5
- CSS3
- JavaScript (ES6+)
- Git & GitHub

**Backend/Frameworks:**
- Next.js
- Node.js
- Express.js
- Firebase

**Build Tools:**
- Vite
- PostCSS
- Autoprefixer

---

*Last Updated: Based on current codebase structure*
*Website: CodeWithClarence Portfolio*
*Developer: Clarence D. Sumagang*

