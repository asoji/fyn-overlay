// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: 'ComicMono',
        cssVariable: '--font-comic-mono',
        options: {
            variants: [
                {
                    src: ['./src/assets/fonts/ComicMono.woff2'],
                    weight: 'normal',
                    style: 'normal'
                },
                {
                    src: ['./src/assets/fonts/ComicMono-Bold.woff2'],
                    weight: 'bold',
                    style: 'oblique'
                }
            ]
        }
    }],

    vite: {
        plugins: [tailwindcss()]
    }
});