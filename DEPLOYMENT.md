# Modifier et redéployer le portfolio

Ce guide explique comment installer Visual Studio Code, récupérer le projet, afficher le site localement, publier des modifications sur GitHub et vérifier leur déploiement.

## 1. Télécharger et installer Visual Studio Code

1. Ouvrir la page officielle : [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Cliquer sur **Download for Windows** (ou choisir la version correspondant à votre système).
3. Lancer le programme d'installation téléchargé.
4. Pendant l'installation, il est conseillé de cocher :
   - **Ajouter "Ouvrir avec Code" au menu contextuel** ;
   - **Ajouter au PATH**.
5. Terminer l'installation, puis ouvrir Visual Studio Code.

Le projet utilise Git. Si Git n'est pas encore installé :

1. Le télécharger depuis [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. L'installer avec les options proposées par défaut.
3. Redémarrer Visual Studio Code.

[Vidéos complémentaires](https://www.youtube.com/results?search_query=installer+visual+studio+code+fran%C3%A7ais).

## 2. Cloner le dépôt depuis Visual Studio Code

1. Dans Visual Studio Code, ouvrir la **palette de commandes** avec `Ctrl+Shift+P`.
2. Saisir et sélectionner **Git: Clone**.
3. Coller l'adresse du dépôt :

   ```text
   https://github.com/remyvoituron/portfolio
   ```

4. Choisir le dossier de l'ordinateur dans lequel enregistrer le projet.
5. Lorsque Visual Studio Code le propose, cliquer sur **Ouvrir** pour ouvrir le dépôt cloné.
6. Si une confirmation de sécurité apparaît, choisir **Oui, je fais confiance aux auteurs**.

Lors de la première opération avec GitHub, Visual Studio Code peut demander de se connecter au compte GitHub dans le navigateur. Le compte utilisé doit avoir le droit de modifier ce dépôt.

[Vidéos complémentaires](https://www.youtube.com/results?search_query=cloner+d%C3%A9p%C3%B4t+GitHub+Visual+Studio+Code+fran%C3%A7ais).

## 3. Afficher `index.html` dans le navigateur intégré

Le fichier principal du site est `src/index.html`.

1. Ouvrir la vue **Extensions** avec `Ctrl+Shift+X`.
2. Rechercher **Live Preview**.
3. Installer l'extension **Live Preview** publiée par Microsoft.
4. Dans l'explorateur de fichiers de Visual Studio Code, ouvrir `src/index.html`.
5. Cliquer avec le bouton droit dans l'éditeur, puis choisir **Show Preview**.

La page s'affiche dans un onglet intégré à Visual Studio Code. Les modifications enregistrées dans `index.html`, `styles.css` ou `script.js` sont alors visibles dans l'aperçu. Utiliser `Ctrl+S` pour enregistrer un fichier.

Si la commande n'apparaît pas, ouvrir la palette avec `Ctrl+Shift+P`, saisir **Live Preview: Show Preview**, puis valider.

[Vidéos complémentaires](https://www.youtube.com/results?search_query=VS+Code+Live+Preview+Microsoft+fran%C3%A7ais).

## 4. Enregistrer les changements avec Git et les pousser sur GitHub

Avant de publier, vérifier le site dans l'aperçu intégré.

1. Ouvrir la vue **Contrôle de code source** avec `Ctrl+Shift+G`.
2. Examiner la liste des fichiers modifiés.
3. Cliquer sur le bouton `+` de chaque fichier à publier, ou sur le `+` situé à côté de **Modifications** pour tous les ajouter.
4. Saisir un message court décrivant le changement, par exemple :

   ```text
   Met à jour les projets du portfolio
   ```

5. Cliquer sur **Commit**.
6. Cliquer sur **Synchroniser les modifications** ou sur **Push** pour envoyer le commit vers GitHub.
7. Si nécessaire, confirmer la connexion à GitHub dans le navigateur.

Le déploiement automatique est déclenché lorsque les changements sont poussés sur la branche `main`. Vérifier le nom de la branche dans la barre d'état, en bas à gauche de Visual Studio Code, avant de pousser.

[Vidéos complémentaires](https://www.youtube.com/results?search_query=commit+push+GitHub+Visual+Studio+Code+fran%C3%A7ais).

## 5. Vérifier le déploiement dans GitHub Actions

1. Ouvrir [https://github.com/remyvoituron/portfolio/actions](https://github.com/remyvoituron/portfolio/actions).
2. Sélectionner l'exécution la plus récente du workflow **Deploy to Azure Static Web Apps**.
3. Attendre la fin de l'exécution :
   - une coche verte signifie que le déploiement a réussi ;
   - un cercle jaune signifie que le déploiement est encore en cours ;
   - une croix rouge signifie que le déploiement a échoué.
4. En cas d'échec, ouvrir l'étape **Deploy static site** pour consulter le message d'erreur.

Le déploiement peut prendre quelques minutes après le push.

## 6. Afficher le site modifié

Lorsque le workflow affiche une coche verte :

1. Ouvrir [https://remyvoituron.net/](https://remyvoituron.net/).
2. Si l'ancienne version apparaît encore, actualiser la page avec `Ctrl+F5` afin de vider le cache du navigateur pour cette page.
3. Vérifier que les modifications attendues sont bien visibles.

Si la nouvelle version n'apparaît toujours pas, patienter une ou deux minutes, puis actualiser de nouveau la page.
