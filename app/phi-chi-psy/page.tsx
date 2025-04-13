import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Une alliance de sens | φχψ"
};


export default function PhiChiPsy(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-4 font-2xl font-bold">Une alliance de sens</h1>
            <dl className="dl">
                <div>
                    <dt>Φ (Phi)</dt>
                    <dd>évoque l&apos;amour du savoir et la quête d&apos;harmonie — comme le nombre d&apos;or reliant science, art et nature.</dd>
                </div>
                <div>
                    <dt>Χ (Chi)</dt>
                    <dd>symbolise le lien, le croisement entre les idées, les êtres, les expériences.</dd>
                </div>
                <div>
                    <dt>Ψ (Psy)</dt>
                    <dd>renvoie à la psyché, à ce qui nous anime et nous relie à nous-mêmes.</dd>
                </div>
            </dl>
            <p className="my-3">Ensemble, <em>φχψ</em> dessinent une approche humaniste et ancrée, où connaissance de soi et résonance symbolique se répondent pour mieux &laquo; exister &raquo;.</p>
        </main>
    </CitationLayout>
}