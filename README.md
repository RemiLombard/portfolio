# Portfolio Rémi Lombard

Portfolio personnel développé avec **Nuxt 3** et **Supabase**, inspiré d'un style vintage/old school avec des couleurs orangées.

## 🚀 Technologies

- **Framework** : Nuxt 3
- **Base de données** : Supabase
- **Styles** : TailwindCSS + CSS Variables
- **Fonts** : Google Fonts (Space Grotesk, Playfair Display, Inter)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Configurer vos variables Supabase dans .env
```

## ⚙️ Configuration Supabase

1. Créez un projet sur [Supabase](https://supabase.com)
2. Copiez l'URL et la clé anon dans votre fichier `.env`
3. Exécutez le schéma SQL : `supabase/schema.sql`

## 🎨 Personnalisation des couleurs

Variables CSS dans `app/assets/css/main.css` :

```css
:root {
  --color-primary: #e85d3b;
  --color-bg-cream: #f9e8d9;
}
```

## 🏃 Développement

```bash
npm run dev    # Serveur de dev
npm run build  # Build production
```

---

Développé par Rémi Lombard

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
