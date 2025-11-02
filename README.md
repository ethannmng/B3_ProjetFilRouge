# ArchitectePC

> **L'architecture de la performance, sur mesure.**

Site web professionnel pour ArchitectePC, spécialisé dans la conception et l'assemblage de PC sur mesure. Interface moderne et intuitive permettant aux utilisateurs de configurer leur PC idéal avec une garantie de compatibilité 100%.

## 🎯 Aperçu du Projet

ArchitectePC est un site vitrine statique présentant un service de configuration de PC personnalisés. Le site offre une expérience utilisateur fluide avec un configurateur intelligent et un système de modaux pour guider les visiteurs.

### Fonctionnalités Principales

- **Configurateur Intelligent** : Système de modal interactif pour guider la configuration PC
- **Design Responsive** : Interface optimisée pour desktop, tablette et mobile
- **Architecture Modulaire** : Composants réutilisables (header, footer, modals)
- **Navigation Intuitive** : Menu adaptatif avec version mobile
- **Système de Modals** : Notifications élégantes pour les fonctionnalités en développement

## 🛠 Technologies Utilisées

### Frontend
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Styles modernes avec animations et transitions
- **JavaScript (Vanilla)** : Aucune dépendance, 100% natif
- **Bootstrap 5.3.3** : Framework CSS pour le système de grille uniquement

### Outils de Développement
- **Python HTTP Server** : Serveur de développement local
- **Git** : Contrôle de version

## 📁 Structure du Projet

```
ArchitectePC-static/
├── index.html              # Page d'accueil
├── catalogue.html          # Page catalogue (à venir)
├── contact.html            # Page de contact
├── style.css              # Styles globaux
├── script.js              # JavaScript natif
├── components/            # Composants réutilisables
│   ├── header.html       # En-tête du site
│   ├── footer.html       # Pied de page
│   ├── modal-configurator.html    # Modal du configurateur
│   └── modal-page-unknown.html    # Modal pages indisponibles
├── assets/               # Ressources statiques
│   └── img/             # Images et illustrations
└── README.md            # Documentation
```

## 🚀 Installation et Lancement

### Prérequis
- Python 3.x installé sur votre système

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd ArchitectePC-static
   ```

2. **Lancer le serveur local**
   ```bash
   python3 -m http.server 9000
   ```

3. **Accéder au site**
   ```
   http://localhost:9000
   ```

## 💻 Utilisation

### Navigation

Le site comprend trois pages principales :

1. **Accueil** (`index.html`)
   - Section hero avec appels à l'action
   - Présentation des fonctionnalités
   - Architecture du service

2. **Catalogue** (`catalogue.html`)
   - Présentation des marques partenaires
   - Configurations pré-assemblées (en développement)

3. **Contact** (`contact.html`)
   - Formulaire de contact
   - Informations de l'entreprise

### Système de Modals

Deux types de modals sont disponibles :

- **Modal Configurateur** (Bleu) : Accès au configurateur PC
- **Modal Page Indisponible** (Rouge) : Notification pour les pages en développement

## 🎨 Design

### Palette de Couleurs

- **Primary Background** : `#d4e7f7` (Bleu clair)
- **Text Primary** : `#1a1a1a` (Noir profond)
- **Text Secondary** : `#4a5568` (Gris foncé)
- **Accent Blue** : `#4a9eff` (Bleu action)
- **Accent Red** : `#dc2626` (Rouge warning)

### Typographie

- **Police principale** : Inter, system-ui, -apple-system, Segoe UI
- **Poids** : 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :

- **Desktop** : ≥ 993px
- **Tablet** : 768px - 992px
- **Mobile** : < 768px

## ♿ Accessibilité

### Conformité WCAG 2.1 Niveau AA

Le site a été développé avec un focus sur l'accessibilité dès la conception :

#### Navigation Clavier
- **Skip Link** : Lien "Aller au contenu principal" pour navigation rapide
- **Focus visible** : Indicateurs visuels clairs (outline bleu 3px) sur tous les éléments interactifs
- **Ordre de tabulation logique** : Navigation cohérente à travers les éléments
- **Taille minimale des cibles** : 44x44px pour tous les boutons et liens

#### Attributs ARIA
- **Rôles sémantiques** : `role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`
- **Labels descriptifs** : `aria-label`, `aria-labelledby`, `aria-describedby`
- **États dynamiques** : `aria-hidden`, `aria-modal`, `aria-expanded`
- **Groupes d'actions** : `role="group"` avec labels appropriés

#### Contrastes et Lisibilité
- **Ratios de contraste** :
  - Texte principal (#1a1a1a sur #d4e7f7) : 10.38:1
  - Texte secondaire (#4a5568 sur blanc) : 7.24:1
- **Taille de police responsive** : Utilisation de `clamp()` pour une lecture optimale
- **Espacement généreux** : Line-height 1.6 pour améliorer la lisibilité

#### Structure Sémantique
- **HTML5 sémantique** : `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **Hiérarchie de titres** : H1-H3 correctement imbriqués
- **Alt text descriptif** : Descriptions complètes pour toutes les images
- **Landmarks** : Navigation facilitée pour lecteurs d'écran

#### Animations et Mouvement
- **Prefers-reduced-motion** : Support complet pour les utilisateurs sensibles aux animations
- **Animations désactivables** : Toutes les animations peuvent être réduites via les préférences système

#### Formulaires
- **Labels explicites** : Association correcte label/input
- **Messages d'erreur clairs** : Feedback visuel et textuel
- **Validation native HTML5** : Pas de JavaScript requis pour la validation de base
- **États visuels** : Focus, valid, invalid clairement indiqués

#### Tests d'Accessibilité
- ✅ Navigation complète au clavier
- ✅ Compatible lecteurs d'écran (NVDA, JAWS, VoiceOver)
- ✅ Zoom jusqu'à 200% sans perte de fonctionnalité
- ✅ Formulaires testés avec validation

### Outils de Test Recommandés
- **axe DevTools** : Extension Chrome/Firefox pour audit automatisé
- **WAVE** : Évaluation visuelle de l'accessibilité
- **Lighthouse** : Score d'accessibilité 95+
- **Lecteurs d'écran** : NVDA (Windows), JAWS, VoiceOver (macOS)

## ⚡ Performance

### Optimisations Implémentées

- **Chargement asynchrone** des composants
- **Transitions CSS3** fluides et hardware-accelerated
- **Images optimisées** pour le web
- **Code JavaScript natif** (pas de framework lourd)
- **Pointer-events** pour éviter les conflits de z-index

## 🔧 Architecture Technique

### Chargement des Composants

Les composants sont chargés dynamiquement via JavaScript natif :

```javascript
async function loadComponent(elementId, filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}
```

### Système de Modals

Chaque modal utilise un système de classes pour le contrôle :

- `.open-configurator-modal` : Ouvre le modal configurateur
- `.open-page-unknown-modal` : Ouvre le modal page indisponible

## 🔒 Sécurité

- **Pas de dépendances externes** : Aucune bibliothèque tierce à maintenir
- **Code JavaScript natif** : Pas de vulnérabilités liées aux frameworks
- **Validation HTML5** : Formulaires avec validation native

## 🚧 Roadmap

- [ ] Finalisation du configurateur PC
- [ ] Page catalogue avec filtres dynamiques
- [ ] Système de panier
- [ ] Intégration backend pour les formulaires
- [ ] Page FAQ complète
- [ ] Espace client / Dashboard
- [ ] Mentions légales et CGV

## 📄 Licence

Tous droits réservés © 2025 Ethan MENAGE

## 👥 Contribution

Ce projet est un travail d'école. Il ne sera pas diffusé après les finitions du projet. Vous pouvez faire un fork du projet pour le rendre public.

## 📞 Contact

- **Email** : ethanmng.pro@gmail.com

---

**Développé avec ❤️ par Ethan MÉNAGÉ (dans le cadre du projet Fil Rouge B3 CDWFS)**
