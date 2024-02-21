export const getPrisonerPicture = (
  mediaItemUrl?: string | null,
  sex?: string | null,
) =>
  mediaItemUrl
    ? mediaItemUrl
    : sex === 'мужской'
    ? '/default_man.png'
    : '/default_woman.png';
