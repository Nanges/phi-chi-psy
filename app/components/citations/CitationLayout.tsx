'use client'

import { PropsWithChildren } from "react";
import Citation from "./Citation";
import { useRandomCitation } from "./useRandomCitation";
import { cn } from "@/libs/utils";

export default function CitationLayout({children}: PropsWithChildren){
    const citation = useRandomCitation();

    return <div suppressHydrationWarning={true} className={cn(citation ? '':'invisible')}>
        { citation ? <Citation citation={citation}/> : null}
        {children}
    </div>
}