# Karima Belani — site vitrine

Ce projet est une première version statique du site de Karima Belani, conçue pour être hébergée sur GitHub Pages sans dépendances backend.

## Pages et ressources

- `index.html` : accueil
- `a-propos.html` : pratique et parcours
- `services.html` : services cliniques, coaching et supervision
- `approche.html` : approche et métaphore de l’arbre
- `conferences-formations.html` : interventions et formations
- `contact.html` : coordonnées et formulaire préparé, non activé
- `politique-confidentialite.html` et `conditions-utilisation.html` : pages d’information
- `assets/css/style.css` : styles partagés et responsive
- `assets/js/main.js` : navigation mobile et comportement du formulaire
- `assets/images/karima-belani-about.png` : portrait de Karima pour les sections « À propos »
- `assets/images/karima-belani-enfant.png` : photo du hero et du service Enfants & adolescents
- `assets/images/arbre-psychologie-karima.png` : illustration principale de l’approche

## Démarrage local

Dans le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvrez :

```text
http://localhost:8000/
```

## GitHub Pages

### Hébergement temporaire

TEMPORAIRE GITHUB PAGES : retirer noindex/nofollow avant mise en production sur le domaine final.

Cette version temporaire applique `noindex, nofollow` sur toutes les pages. Les canonicals et le sitemap ne sont pas configurés avec une URL temporaire ou fictive.

Lors de la migration vers le domaine final, confirmer le domaine, mettre à jour les canonical, recréer `sitemap.xml` avec les URL définitives et ajouter son URL dans `robots.txt`.

Le dépôt local est préparé sur la branche `main`. Créer d’abord un dépôt public `karima-belani-site` dans le compte GitHub voulu. N’ajouter le remote et ne pousser qu’après confirmation de son URL exacte.

Dans GitHub :
   - Repository
   - Settings
   - Pages
   - Source : Deploy from a branch
   - Branch : `main`
   - Folder : `/root`

L’adresse temporaire aura la forme :

```text
https://USERNAME.github.io/karima-belani-site/
```

## Formulaire de contact

Le formulaire est préparé pour une connexion ultérieure à Formspree ou à un autre service.

Pour l’instant, il est volontairement non fonctionnel côté backend afin de respecter les contraintes de GitHub Pages. Le code HTML est prêt à recevoir une intégration future.

## À propos des images

Avant la mise en ligne, confirmer l’autorisation de publication de la photo où apparaît un enfant.

Le domaine public n’étant pas encore confirmé, les URL canonical et le sitemap restent à configurer avant publication. Ils ne doivent pas être remplacés par des URL d’exemple.
