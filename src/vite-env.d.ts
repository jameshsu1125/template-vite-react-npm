/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_MODE?: 'react' | 'standalone';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
