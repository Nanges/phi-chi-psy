'use client'

import { useEffect, useState } from 'react';
import data from '../../../public/citations.json';
import { Citation } from './types';

export function getRandomCitation(){
    const themeIndex =  Math.round(Math.random() * (data.length - 1));
    const citations = data.at(themeIndex)?.citations;
    const citationIndex = Math.round(Math.random() * (citations?.length ?? 1) - 1);
    return citations?.at(citationIndex);
}

export function useRandomCitation(){
    const [citation, setCitation] = useState<Citation|undefined>(undefined)

    useEffect(() => {
        setCitation(getRandomCitation());
    },[]);

    return citation;
}