import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        build: { manifest: true, outDir: path.join(__dirname, 'build') },
        root: path.join(__dirname, 'src'),
        server: {
            proxy: {
                "/api": 'http://localhost:5001',
            }
        },
        plugins: [react()],
    };
});
