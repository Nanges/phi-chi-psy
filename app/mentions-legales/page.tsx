import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Mentions légales | φχψ"
};

export default function MentionsLegales(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-6 font-2xl font-bold">Mentions légales</h1>
            <h2 className="mb-3 mt-6 font-lg font-bold">Éditeur du site</h2>
            <p>Ce site web est détenu et exploité par Philippe Anciaux licencié en psychologie à l'université catholique de Louvain (promotion 2004).</p>
            <p>Numéro BCE: BE 0844 162 690</p>
            <h2 className="mb-3 mt-6 font-lg font-bold">Coordonnées de contact</h2>
            <p>Par courrier électronique à l'addresse: <a href="mailto:philippe.anciaux@phichipsy.be">philippe.anciaux@phichipsy.be</a></p>
            <p>Par téléphone au <a href="tel:+32 471 06 31 42">0471 06 31 42</a></p>
            <h2 className="mb-3 mt-6 font-lg font-bold">Consultations</h2>
            <p>Les consultations se font au sein du cabinet <a href="https://crnmosan.be/psychologues/" target="_blank">CRN-Mosan</a> situé au 7 Avenue de Champalle, 5530 Yvoir.</p>
            <h2 className="mb-3 mt-6 font-lg font-bold">Hébergement du site internet</h2>
            <p>Ce site web est hébergé par <a href="https://www.ovhcloud.com" target="_blank">OVH</a></p>
            <h2 className="mb-3 mt-6 font-lg font-bold">Propriétés intellectuelles</h2>
            <p className="my-3">
                L'ensemble des éléments présents sur ce site (textes, images, illustrations, logos, vidéos, fichiers téléchargeables, charte graphique, structure, code, etc.) est protégé par le droit d’auteur et/ou d’autres droits de propriété intellectuelle.
                Sauf mention contraire, ces contenus sont la propriété exclusive de Philippe Anciaux.
            </p>
            <p className="my-3">Toute reproduction, représentation, modification, publication, transmission, ou adaptation, partielle ou intégrale, de ce contenu, par quelque moyen que ce soit, est interdite sans l'autorisation écrite préalable de l’éditeur du site.</p>
            <p className="my-3">Toute utilisation non autorisée constitue une contrefaçon et peut engager la responsabilité civile et/ou pénale de son auteur, conformément aux articles XI.165 et suivants du Code de droit économique belge.</p>
            <p className="my-3">L'impression des pages est autorisé pour un usage privé uniquement.</p>
        </main>
    </CitationLayout>
}