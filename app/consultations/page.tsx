import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Consultations | φχψ"
};

export default function Consultations(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-4 font-2xl font-bold">En cabinet</h1>
            <p className="my-3">Je vous accueille en cabinet, au sein du <a href="https://crnmosan.be/psychologues/" target="_blank">CRN-Mosan</a>, un centre pluridisciplinaire situé dans un cadre paisible et verdoyant, propice à la réflexion et à l&apos;apaisement.</p>
            <h2 className="mb-4 font-2xl mt-6 font-bold">À domicile</h2>
            <p className="my-3">Parce qu&apos;il n&apos;est pas toujours possible de se déplacer — en raison de difficultés de santé, de mobilité ou de certaines situations de vie — je propose de venir à votre rencontre.<br/>Que ce soit à votre domicile ou dans un lieu où vous vous sentez en confiance, l&apos;essentiel est de créer un espace propice à l&apos;échange, dans le respect de votre rythme et de votre cadre.</p>
            <p className="my-3">La confidentialité et la discrétion demeurent garanties, quelles que soient les modalités de la rencontre.</p>
        </main>
    </CitationLayout>
}