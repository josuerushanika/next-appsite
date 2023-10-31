import { lazy } from 'react';

 export const PoisonWormsEmbed = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve (import('./poisson-worms-embed'));
    }, 10000);
 }));

export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed'));



