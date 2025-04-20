import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Mentions légales | φχψ"
};

export default function MentionsLegales(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-6 font-2xl font-bold">Mentions légales</h1>
            <h2 className="mb-3 mt-6 font-lg font-bold">Éditeur</h2>
            <p className="my-3">
                Ce site web, hébergé par <a href="https://www.ovhcloud.com" target="_blank">OVH</a>, est détenu et exploité par Philippe Anciaux.<br/>
                Licencié en psychologie de l’Université Catholique de Louvain (promotion 2004).<br/>
                Agréé par la <a href="https://www.compsy.be" target="blank">Commission des Psychologues</a> (numéro d&apos;inscription : 791206463).<br/>
                Numéro BCE : BE 0844 162 690<br/>
                Courrier électronique : <a href="mailto:philippe.anciaux@phichipsy.be">philippe.anciaux@phichipsy.be</a><br/>
                Téléphone : <a href="tel:+32 471 06 31 42">(+32) 0471 06 31 42</a><br/>
                Adresse du cabinet : 7 Avenue de Champalle, 5530 Yvoir.
            </p>
            <h2 className="mb-3 mt-6 font-lg font-bold">Propriété intellectuelle</h2>
            <p className="my-3">L&apos;ensemble du contenu du site (textes, images, graphismes, logo, etc.) est la propriété exclusive de l&apos;éditeur sauf mention contraire. Toute reproduction, représentation, modification ou diffusion sans autorisation préalable est interdite.</p>
            <p>Ce site ne collecte aucune donnée personnelle et n&apos;utilise aucun cookie.</p>
        </main>
    </CitationLayout>
}