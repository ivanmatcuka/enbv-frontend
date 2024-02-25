import { ym } from 'react-ym';

export default function YM() {
  if (process.env.NODE_ENV === 'production') {
    ym.initialize('96529858', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }

  return null;
}
