// Videos shown on /videos.
//
// HOW TO ADD A VIDEO
// ──────────────────
// `id` is the bare YouTube video ID — the `v=` value in the watch URL.
//   https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: 'dQw4w9WgXcQ'
// The thumbnail is pulled from YouTube automatically; nothing to upload.
//
//   id          (required) YouTube video ID
//   title       (required) Shown on the card
//   category    (required) 'Workshop' or 'Motion Debrief' — drives the filter pills
//   date        (required) 'YYYY-MM-DD', used for newest-first ordering
//   description (optional) One or two lines under the title
//   speaker     (optional) Who ran the session
//
// Delete the placeholder entries below as you replace them with real videos.
// An entry whose id is still a placeholder is skipped rather than rendering a
// broken thumbnail, so a half-filled list is safe to ship.

export const VIDEO_CATEGORIES = ['Workshop', 'Motion Debrief'];

export const videos = [
    {
        id: '[youtube-video-id]',
        title: '[Workshop title]',
        category: 'Workshop',
        date: '2026-01-01',
        description: '[What the session covered.]',
        speaker: '[Speaker name]',
    },
    {
        id: '[youtube-video-id]',
        title: '[Motion debrief title — e.g. THW abolish private schools]',
        category: 'Motion Debrief',
        date: '2026-01-01',
        description: '[Which tournament or practice round the motion came from.]',
        speaker: '[Adjudicator name]',
    },
];

export default videos;
