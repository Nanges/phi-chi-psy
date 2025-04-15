import { Metadata } from "next";
import CitationLayout from "./components/citations/CitationLayout";

export const metadata: Metadata = {
  title: "Accueil | φχψ"
};

export default function Home() {
  return <CitationLayout>
    <main className="container">
      <h1 className="mb-6 font-2xl font-bold">Présentation</h1>
      <p className="mb-3">La vie nous met à l’épreuve de s’y adapter. Nos ressources personnelles ainsi qu’un entourage bienveillant permettent le plus souvent de franchir les obstacles qui nous construisent.</p>
      <p className="mb-3">Cependant, des évènements particuliers peuvent ébranler l’édifice. Les stratégies utilisées ou le soutien apporté deviennent inefficaces. Une aide extérieure est alors parfois nécessaire.</p>
      <p className="mb-3">Spécialisé dans l’accompagnement émotionnel, cognitif et comportemental, je vous propose un soutien personnalisé avec une approche empathique, pour restaurer votre équilibre et votre bien-être mental.</p>
    </main>
  </CitationLayout>
}
