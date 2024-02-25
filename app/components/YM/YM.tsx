'use client';

import { ym } from 'react-ym';

export default function YM() {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    ym.initialize('96529858', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }

  return null;
}
