Voici une version mise à jour de ton fichier `gemini.md` pour refléter ta nouvelle architecture **Next.js + WooCommerce en headless** tout en gardant l’esprit et les besoins de ton ancien projet WordPress :

---

# Projet eCommerce Headless - GEMINI Context File

## 🔍 Objectif du projet

Recréer un site e-commerce moderne, rapide et responsive en utilisant **Next.js en frontend headless**, connecté à **WooCommerce** comme backend e-commerce. L’interface utilisateur est entièrement customisée avec **Tailwind CSS**, et le site est optimisé pour la performance, l'accessibilité et le SEO.

L’objectif est de garantir une **expérience fluide**, une **architecture claire et découplée**, et une **grande flexibilité** de développement côté front.

## 🧩 Technologies & Stack

- **Frontend** : Next.js (React)
- **Backend eCommerce** : WordPress + WooCommerce (API REST)
- **Headless CMS** : WooCommerce REST API, REST WordPress API (ACF au besoin)
- **Design** : Tailwind CSS v4
- **Routing & SEO** : Next.js App Router (ou Pages Router selon projet), `next-seo`
- **API Handling** : SWR / React Query ou custom fetchers
- **State Management** : Context API ou Zustand
- **Panier & Checkout** : Gestion frontend, interactions via REST WooCommerce
- **Build Tools** : Vite ou Webpack intégré Next.js
- **Déploiement** : Vercel ou autre (FTP pour WP si nécessaire)

## 🧱 Composants Frontend

Le site inclura des **composants React réutilisables**, inspirés de l’ancienne structure Gutenberg. Exemples :

- `AccordionSection` : équivalent de `block-accordion`
- `ImageBanner` : bandeau d’images stylisé
- `CustomFooter` : footer avec navigation, logos, réseaux
- `Guarantees` : avantages ou garanties clients
- `PromoHeader` : bandeau promo haut de page
- `MainHeader` : header principal avec navigation, logo
- `HeroSection` : section principale avec texte + image
- `ShowcaseLeft` / `ShowcaseRight` : mise en avant produit

Chaque composant :

- Est développé en React fonctionnel
- Est stylé exclusivement avec des classes Tailwind CSS (`bg-primary`, `text-white`, etc.)
- Peut utiliser `props` dynamiques ou être intégré via CMS Headless

## 🎨 Design System

- **Framework CSS** : Tailwind CSS v4
- **Breakpoints** : par défaut de Tailwind
- **Design tokens** : via `tailwind.config.js`
- **Thèmes** : couleurs, typographies, radius définis globalement
- **Accessibilité** : ARIA roles, navigation clavier, focus visibles, etc.

## 🔐 Sécurité & Performance

- Validation des données côté frontend & backend
- Appels API sécurisés via tokens ou JWT si nécessaire
- Lazy loading d’images & composantes lourdes
- Optimisation Lighthouse (accessibilité, performance, SEO)
- Optimisation mobile-first
- Compatibilité PWA (au besoin)

## 🔧 Environnement de développement

- **Frontend** : Next.js avec ESLint + Prettier
- **Backend WP** : développement séparé, ACF pour données custom si besoin
- **Versioning** : Git + GitHub
- **Déploiement** : GitHub Actions pour Next.js, FTP ou SSH pour WP si besoin
- **Tests** : Jest, Playwright ou Vitest (unitaires, e2e)

## 🧠 Attentes vis-à-vis de Gemini CLI

Gemini doit pouvoir :

- Générer ou corriger des composants React stylés Tailwind
- Transformer du HTML statique en composants React
- Intégrer dynamiquement des données WooCommerce via l’API
- Générer des hooks (`useCart`, `useProducts`, etc.) pour l’interaction API
- Optimiser le code pour les performances (lazy loading, SSR, ISR, etc.)
- Refactoriser du code JS/TS pour clarté et efficacité
- Générer des snippets SEO ou descriptions produits optimisés
- Aider à concevoir des architectures API / composantes
- Générer des tests (unitaires ou e2e)

## ✅ images

`the images are in the "/assets/images/imagename.webp`
