import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Thérapies | φχψ"
};

export default function Therapies(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-4 font-2xl font-bold">Accompagnements</h1>
            <ul className="list">
                <li>Troubles anxieux, angoisses, stress</li>
                <li>Dépression, burn out</li>
                <li>Soutien oncologique, deuil</li>
                <li>Hypersensibilité & haut potentiel</li>
                <li>Difficultés relationnelles</li>
            </ul>
            <h2 className="mb-4 mt-6 font-2xl font-bold">Les différents « psy »</h2>
            <dl className="dl">
                <div>
                    <dt>Psychologue:</dt>
                    <dd>En Belgique, ce titre est protégé par la loi du 8 novembre 1993. Il nécessite d&apos;être inscrit auprès de la Commission des Psychologues.</dd>
                </div>
                <div>
                    <dt>Psychanalyste:</dt>
                    <dd>Ce titre n&apos;est pas protégé, il se réfère à la pratique de la psychanalyse comme méthode d&apos;investigation psychique avec pour objet l&apos;inconscient.</dd>
                </div>
                <div>
                    <dt>Psychiatre:</dt>
                    <dd>Médecin spécialisé en santé mentale. Il est habilité à prescrire des médicaments.</dd>
                </div>
                <div>
                    <dt>Psychothérapeute:</dt>
                    <dd>La pratique de de la psychothérapie est réservée aux psychologues, psychiatres et médecins depuis la loi du 30 juin 2016.</dd>
                </div>
            </dl>
        </main>
    </CitationLayout>
}