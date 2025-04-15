import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Boîte à outils | φχψ"
};

export default function BoiteAOutil(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-4 font-2xl font-bold">Formations &amp; communication</h1>
            <p className="my-3">Des outils éprouvés aident à se recentrer, d&apos;autres à se décentrer. Ils donnent du relief à l&apos;expérience, pour mieux en appréhender la complexité.</p>
            <p className="my-3">Voici une liste non exhaustive de pratiques, à explorer en individuel ou en groupe.</p>
            <ul className="list">
                <li>Relaxation et imagerie mentale</li>
                <li>Communication (PNL, AT, CNV...)</li>
                <li>Gestion de conflit, du stress, du temps</li>
                <li>Jeux (de rôles, de société, en coopération)</li>
                <li>Astuces de mémorisation</li>
                <li>Conseils d&apos;orientation</li>
            </ul>
            <p className="my-3">J&apos;adapte le contenu et les méthodes à vos besoins.</p>
            <h2 className="mb-4 mt-6 font-2xl font-bold">Animation</h2>
            <p className="my-3">Je propose des &laquo; cafés philo &raquo; ouverts à toutes celles et ceux qui souhaitent réfléchir ensemble à des sujets comme l&apos;éducation, les croyances, la technologie… ou à toute autre question qui vous interpelle.</p>
            <p className="my-3">Chaque rencontre commence par une courte présentation du thème, conçue comme une mise en perspective, suivie d&apos;un échange libre et bienveillant où chacun peut partager ses idées. Le tout se conclut autour d&apos;un verre, pour prolonger les discussions dans une ambiance conviviale.</p>
            <p className="my-3">Un espace pour penser ensemble, autrement.</p>
        </main>
    </CitationLayout>
}