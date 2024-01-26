/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PMO_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
