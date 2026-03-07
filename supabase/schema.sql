-- =============================================
-- SCHEMA SQL POUR SUPABASE
-- Portfolio Rémi Lombard
-- =============================================

-- Table Profile (informations personnelles)
CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  title VARCHAR(200) NOT NULL,
  subtitle VARCHAR(200),
  bio TEXT,
  email VARCHAR(100),
  phone VARCHAR(20),
  location VARCHAR(100),
  linkedin_url VARCHAR(255),
  github_url VARCHAR(255),
  cv_url VARCHAR(255),
  profile_image_url VARCHAR(255),
  tags TEXT[] DEFAULT '{}'
);

-- Table Projects (projets du portfolio)
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('web', 'design', 'video', 'communication')),
  introduction TEXT NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  gallery TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  link VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  "order" INTEGER DEFAULT 0
);

-- Table Experiences (expériences et formations)
CREATE TABLE IF NOT EXISTS experiences (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(200) NOT NULL,
  company VARCHAR(200) NOT NULL,
  location VARCHAR(100),
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN DEFAULT FALSE,
  description TEXT[] DEFAULT '{}',
  type VARCHAR(20) NOT NULL CHECK (type IN ('work', 'education')),
  "order" INTEGER DEFAULT 0
);

-- Table Skills (compétences)
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(50),
  level INTEGER DEFAULT 50 CHECK (level >= 0 AND level <= 100),
  category VARCHAR(50) NOT NULL CHECK (category IN ('design', 'video', 'dev', 'productivity')),
  "order" INTEGER DEFAULT 0
);

-- =============================================
-- DONNÉES INITIALES
-- =============================================

-- Profil
INSERT INTO profile (name, title, subtitle, bio, email, phone, location, tags)
VALUES (
  'Rémi Lombard',
  'Étudiant en BUT Métiers du Multimédia et de l''Internet',
  'Spécialité DWDI • Alternant Communication & Marketing',
  'Passionné par le multimédia et la communication digitale, je suis actuellement étudiant en 3ème année de BUT MMI à l''IUT Nord Franche-Comté, spécialité DWDI. En alternance chez MOGRA en tant que Chargé de communication & marketing.',
  'remi.lombard70@gmail.com',
  '06 52 64 10 23',
  'Montbéliard / Vesoul',
  '{"Curieux", "Créatif", "Ambitieux"}'
);

-- Expériences professionnelles
INSERT INTO experiences (title, company, location, start_date, current, description, type, "order")
VALUES (
  'Chargé de communication & marketing',
  'MOGRA',
  'Vesoul',
  '2024-09-01',
  TRUE,
  '{"Réalisation de contenus digitaux et audiovisuels pour la communication interne et externe", "Gestion des réseaux sociaux et stratégie digitale", "Suivi de projet complet avec les équipes commerciales", "Création de supports événementiels et promotionnels"}',
  'work',
  1
);

-- Formations
INSERT INTO experiences (title, company, location, start_date, current, description, type, "order")
VALUES 
(
  'BUT Métiers du Multimédia et de l''Internet',
  'IUT Nord Franche-Comté',
  'Montbéliard',
  '2023-09-01',
  TRUE,
  '{"Spécialité DWDI (Développement Web et Dispositifs Interactifs)", "Réalisation de projets en design, développement web et audiovisuel", "Création d''identités visuelles, affiches, WebTV, reportages..."}',
  'education',
  1
),
(
  'Baccalauréat Général',
  'Lycée Les Haberges',
  'Vesoul',
  '2020-09-01',
  FALSE,
  '{"Spécialités Physique-Chimie et Mathématiques"}',
  'education',
  2
);

-- Compétences Design
INSERT INTO skills (name, icon, level, category, "order")
VALUES 
('Illustrator', 'ai', 85, 'design', 1),
('Photoshop', 'ps', 80, 'design', 2),
('InDesign', 'id', 70, 'design', 3),
('Figma', 'figma', 75, 'design', 4),
('Canva', 'canva', 90, 'design', 5);

-- Compétences Vidéo
INSERT INTO skills (name, icon, level, category, "order")
VALUES 
('DaVinci Resolve', 'davinci', 75, 'video', 1),
('Premiere Pro', 'pr', 65, 'video', 2),
('After Effects', 'ae', 50, 'video', 3);

-- Compétences Dev
INSERT INTO skills (name, icon, level, category, "order")
VALUES 
('VS Code', 'vscode', 85, 'dev', 1),
('HTML/CSS', 'html', 90, 'dev', 2),
('JavaScript', 'js', 75, 'dev', 3),
('Vue.js', 'vue', 70, 'dev', 4),
('Nuxt', 'nuxt', 65, 'dev', 5),
('Git', 'git', 70, 'dev', 6);

-- Compétences Productivité
INSERT INTO skills (name, icon, level, category, "order")
VALUES 
('Notion', 'notion', 90, 'productivity', 1),
('Trello', 'trello', 80, 'productivity', 2),
('Google Suite', 'google', 85, 'productivity', 3),
('Microsoft 365', 'microsoft', 80, 'productivity', 4);

-- Projets exemples
INSERT INTO projects (title, slug, description, category, tags, featured, "order")
VALUES 
('Site Vitrine MOGRA', 'site-mogra', 'Refonte du site vitrine de l''entreprise avec une approche moderne et responsive.', 'web', '{"Nuxt.js", "TailwindCSS", "UI/UX"}', TRUE, 1),
('Identité Visuelle Festival', 'identite-festival', 'Création de l''identité visuelle complète pour un festival local.', 'design', '{"Illustrator", "Photoshop", "Branding"}', TRUE, 2),
('Campagne Social Media', 'campagne-social', 'Stratégie et création de contenus pour les réseaux sociaux.', 'communication', '{"Social Media", "Canva", "Stratégie"}', TRUE, 3),
('WebTV - Interview', 'webtv-interview', 'Réalisation d''interviews vidéo pour la WebTV de l''IUT.', 'video', '{"DaVinci Resolve", "Interview", "Montage"}', FALSE, 4),
('Application Mobile', 'app-mobile', 'Prototype d''application mobile pour un projet universitaire.', 'web', '{"Figma", "UI/UX", "Prototype"}', FALSE, 5),
('Motion Design', 'motion-design', 'Animations et motion design pour des supports de communication.', 'video', '{"After Effects", "Motion", "Animation"}', FALSE, 6);

-- =============================================
-- POLITIQUES RLS (Row Level Security)
-- =============================================

-- Activer RLS
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Politiques de lecture publique
CREATE POLICY "Public read access" ON profile FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public read access" ON skills FOR SELECT USING (true);
