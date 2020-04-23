import Blockly from "blockly";

import blocklyMessages from "./fr-FR.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Document sans titre",
    file: {
        title: "Fichier",
        javascript: "Exporter vers Javascript",
        open: "Ouvrir un fichier...",
        save: "Sauvegarder"
    },
    edit: {
        title: "Modifier",
        undo: "Annuler",
        redo: "Rétablir",
        clear: "Nettoyer {blockCount} blocks",
        cleanup: "Réorganiser les blocks"
    },
    lang: {
        title: "Langue"
    },
    examples: {
        title: "Exemples",
        confirm: {
            title: "Supprimer les blocks",
            text: "Souhaitez-vous supprimer les blocks du projet actuel avant d'importer l'exemple ?",
            cancel: "Annuler",
            yes: "Oui",
            no: "Non"
        },
        loaded: "Exemple {example} importé avec succès !",
        ping_pong: "Commande ping-pong",
        command_parsing: "Traitement des commandes"
    },
    download: {
        title: "Télécharger votre bot",
        content: {
            title: "Comment lancer votre bot une fois le bot téléchargé ?",
            unzipFile: "Dézippez le fichier obtenu.",
            start: "Cliquez sur start.bat (ou start.sh si vous utilisez MacOS ou Linux)",
            done: "Votre bot est lancé!"
        },
        cancel: "Annuler",
        confirm: "Télécharger"
    },
    tour: {
        skip: "Sauter la visite",
        previous: "Précédent",
        next: "Suivant",
        finish: "Finir",
        steps: {
            load_examples: "Importer des exemples pour découvrir Scratch4Discord!",
            run_test: "Testez le fonctionnement de votre bot ici!",
            export_code: "Exportez votre code ici!"
        }
    },
    warnings: {
        login_block: "Le block \"Connexion à Discord\" de la catégorie \"Base\" est obligatoire !"
    },
    run_modal: {
        title: "Appuyez sur démarrer pour tester votre bot!",
        start: "Démarrer le bot",
        stop: "Arrêter le bot",
        invalid_token: "Impossible de se connecter à Discord... Peut-être que le token du bot n'est pas valide !",
        error: "Impossible de se connecter à Discord... Réessayez plus tard!"
    },
    code_modal: {
        title: "Code JavaScript de votre bot"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
