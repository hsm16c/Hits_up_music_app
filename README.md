# 🎵 Application de Gestion de Playlist Musicale
## Ionic Framework + Angular

---

## 📋 Présentation du Projet

Ce projet académique présente une **application mobile de gestion de playlist musicale** développée avec le **Framework Ionic et Angular**. L'application permet aux utilisateurs de parcourir une liste de morceaux musicaux, de créer une playlist personnalisée, de consulter les détails des chansons et de partager leur sélection.

---

## 🎯 Objectifs Pédagogiques

- Maîtrise du framework **Ionic** pour le développement mobile hybride
- Intégration d'**Angular** comme framework frontend
- Utilisation de **Capacitor** pour l'accès aux fonctionnalités natives
- Architecture **Composants/Services** respectant les bonnes pratiques Angular
- Manipulation de données et gestion d'état
- Développement d'interfaces utilisateur responsive

---

## ⚙️ Fonctionnalités Implémentées

### 🎼 Liste des Morceaux
L'application affiche une collection de morceaux musicaux avec les informations suivantes :
- Titre du morceau
- Nom de l'artiste
- Durée
- Pochette d'album

![Écran principal de la liste](https://github.com/user-attachments/assets/cd0fe71e-3b84-4b5c-8999-5a329bf14ff2)

### ✅ Sélection de Morceaux
Les utilisateurs peuvent sélectionner des morceaux via des cases à cocher pour construire leur playlist personnalisée.

![Sélection de morceaux](https://github.com/user-attachments/assets/21e35d64-3d51-4869-8749-93a394f34984)

### 🔄 Tri des Morceaux
Système de tri dynamique utilisant le composant `<ion-segment>` d'Ionic permettant d'organiser la liste selon trois critères :
- **Titre** (ordre alphabétique)
- **Artiste** (ordre alphabétique)
- **Durée** (ordre croissant/décroissant)

![Interface de tri](https://github.com/user-attachments/assets/ebff4209-b7ac-4098-b7f4-5b57717db098)
![Résultat du tri](https://github.com/user-attachments/assets/73a95658-8ec2-45df-ac70-6f02809464da)

### ⏱️ Calcul de la Durée Totale
Calcul automatique et affichage en temps réel de la durée totale des morceaux sélectionnés dans la playlist.

![Durée totale de la playlist](https://github.com/user-attachments/assets/e51f56e2-6bae-40ff-8264-d714241731ad)

### 📄 Page de Détails
Navigation vers une page détaillée affichant les informations complètes d'un morceau :
- Titre et artiste
- Album
- Durée formatée
- Image de couverture en haute résolution

![Détails d'un morceau](https://github.com/user-attachments/assets/13cad296-a93b-4468-84ae-95741161181c)

### 📤 Partage de Playlist
Intégration du plugin **Capacitor Share** permettant de partager la playlist via les applications natives du système (email, messagerie, réseaux sociaux).

---

## 🏗️ Architecture du Projet

```
hits_up/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── song-list/
│   │   │       ├── song-list.component.ts      # Logique du composant
│   │   │       ├── song-list.component.html    # Template HTML
│   │   │       └── song-list.component.scss    # Styles SCSS
│   │   ├── pages/
│   │   │   ├── home/                           # Page d'accueil
│   │   │   └── song-details/                   # Page de détails
│   │   ├── models/
│   │   │   └── song.model.ts                   # Modèle de données
│   │   ├── app.component.ts                    # Composant racine
│   │   └── app.routes.ts                       # Configuration du routage
│   └── assets/
│       └── albums/                             # Ressources visuelles
```

### 📐 Principes Architecturaux

- **Modèle MVC** : Séparation claire entre modèle, vue et contrôleur
- **Composants réutilisables** : Architecture modulaire favorisant la maintenabilité
- **Routing Angular** : Navigation déclarative entre les vues
- **Typologie TypeScript** : Modèles de données fortement typés

---

## 🚀 Exécution du Projet

### ✅ **Méthode 1 : Serveur de Développement (Recommandée)**

L'application fonctionne parfaitement en environnement de développement via le serveur Ionic :

```bash
ionic serve --external
```

Cette commande lance :
- Un serveur de développement local
- Le rechargement automatique (hot reload)
- L'accès depuis le réseau local pour tests mobiles

**Accès :** `http://localhost:8100` ou via l'IP réseau affichée

---

### ⚙️ **Méthode 2 : Compilation Android (APK)**

Le projet intègre une configuration **Capacitor** pour Android. Cependant, des problèmes de dépendances subsistent liés à :
- Configuration Gradle
- Chemins des SDK Android
- Versions des dépendances

**Note :** La génération d'APK nécessite une configuration supplémentaire de l'environnement de build Android.

---

## 🔧 Technologies Utilisées

| Technologie | Version | Usage |
|------------|---------|--------|
| **Ionic** | 8.x | Framework UI mobile |
| **Angular** | 18.x | Framework frontend |
| **Capacitor** | 6.x | Accès aux API natives |
| **TypeScript** | 5.x | Langage de développement |
| **SCSS** | - | Préprocesseur CSS |

---

## 📊 Points d'Évaluation Suggérés

### Compétences Techniques
- ✅ Maîtrise des composants Ionic (segment, list, card, checkbox)
- ✅ Implémentation du routing Angular
- ✅ Gestion d'état et binding bidirectionnel
- ✅ Intégration de plugins Capacitor
- ✅ Manipulation de données (tri, filtrage, calculs)

### Qualité du Code
- ✅ Architecture modulaire et réutilisable
- ✅ Respect des conventions Angular/Ionic
- ✅ Utilisation de TypeScript et typage
- ✅ Organisation des fichiers et dossiers

### Interface Utilisateur
- ✅ Design responsive et mobile-first
- ✅ Expérience utilisateur fluide
- ✅ Utilisation cohérente des composants Ionic
- ✅ Gestion des interactions utilisateur

---

## 👨‍💻 Informations Étudiantes

**Auteur :** Hossam Chahidi  
**Formation :** Master 2 – Systèmes Intelligents, Mobiles et Embarqués  
**Établissement :** Université de Rouen  
**Année Universitaire :** 2024-2025

---

## 📝 Notes pour l'Évaluation

### Points Forts Identifiés
- Interface utilisateur claire et intuitive
- Fonctionnalités essentielles implémentées et fonctionnelles
- Architecture respectant les standards du framework
- Documentation visuelle complète (captures d'écran)

### Axes d'Amélioration Possibles
- Finalisation de la configuration de build Android
- Ajout de tests unitaires et d'intégration
- Persistance des données (LocalStorage/SQLite)
- Optimisation des performances et lazy loading

---

**Documentation préparée pour l'évaluation académique**  
*Version 1.0 - Octobre 2025*
