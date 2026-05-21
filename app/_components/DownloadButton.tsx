import { PLAY_STORE_URL } from '../_data/config'

export function DownloadButton({ variant = 'primary' }: { variant?: 'primary' | 'light' }) {
  const base =
    'inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-medium shadow-lg transition active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'bg-white text-brand-800 hover:bg-brand-50 shadow-brand-900/40'
      : 'bg-brand-500 text-white hover:bg-brand-800 shadow-brand-500/30'

  return (
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2.5v19c0 .35.18.66.46.83l11.04-10.33L3.46 1.67A.93.93 0 0 0 3 2.5zm13.5 8.42l2.92-1.69c.74-.43.74-1.5 0-1.93L16.96 5.7l-3 2.81 2.54 2.42zM4.32 23.18l11.5-6.65-2.55-2.42-9.41 8.85c.13.13.3.22.46.22zm0-22.36c-.16 0-.33.09-.46.22l9.41 8.85 2.55-2.42L4.32.82z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs opacity-80">Baixar no</span>
        <span className="text-base font-bold">Google Play</span>
      </span>
    </a>
  )
}
