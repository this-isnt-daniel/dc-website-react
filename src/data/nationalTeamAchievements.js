// Achievements of each National Team, keyed by year to match the image filenames
// in src/assets/team/ (the same keying used by TEAM_MEMBERS in NationalTeamCarousel.jsx).
//
// HOW TO FILL THIS IN
// ───────────────────
// A year holds a list of `results`, because a squad usually competes in more than one
// championship in a season (WSDC plus Pre-WSDC events and invitationals).
//
//   results        [{ placing, tournament }] — e.g. { placing: 'Champions', tournament: 'Tilbury House' }
//   speakerAwards  Array of individual speaker honours (omit or [] if none)
//   highlights     Array of other notable moments worth calling out (omit or [] if none)
//
// Anything left as a "[...]" placeholder, empty string, or deleted outright is simply
// not rendered — the panel never shows a blank label or "undefined". So it is safe to
// fill this in one year at a time.
//
// PROVENANCE — PLEASE VERIFY: the 2007-2020 results below were recovered from the DC's
// old Webflow site (debaterscouncil.webflow.io/nationalteam/achievements). They are NOT
// independently confirmed — check them before treating them as final, especially the
// 2020 runners-up result. That site had no entry at all for 2013; whether the team did
// not attend or the page simply omitted it is unknown, so 2013 is deliberately absent
// here rather than guessed at.

export const ACHIEVEMENTS = {
    // ── 2021 onward: the old site's content stops at 2020, so these are yours to add.
    "2026": {
        results: [
            { placing: "[e.g. Octofinalists]", tournament: "[e.g. WSDC 2026, host city]" },
        ],
        speakerAwards: ["[e.g. Top 50 Speaker — Name]"],
        highlights: ["[notable win or milestone]"],
    },
    "2025": {
        results: [
            { placing: "[furthest stage reached]", tournament: "[e.g. WSDC 2025, host city]" },
        ],
        speakerAwards: ["[speaker honour — Name]"],
        highlights: ["[notable win or milestone]"],
    },
    "2024": {
        results: [
            { placing: "[furthest stage reached]", tournament: "[e.g. WSDC 2024, host city]" },
        ],
        speakerAwards: ["[speaker honour — Name]"],
        highlights: ["[notable win or milestone]"],
    },
    "2023": {
        results: [
            { placing: "[furthest stage reached]", tournament: "[e.g. WSDC 2023, host city]" },
        ],
        speakerAwards: ["[speaker honour — Name]"],
        highlights: ["[notable win or milestone]"],
    },
    "2022": {
        results: [
            { placing: "[furthest stage reached]", tournament: "[e.g. WSDC 2022, host city]" },
        ],
        speakerAwards: ["[speaker honour — Name]"],
        highlights: ["[notable win or milestone]"],
    },
    "2021": {
        results: [
            { placing: "[furthest stage reached]", tournament: "[e.g. WSDC 2021, host city]" },
        ],
        speakerAwards: ["[speaker honour — Name]"],
        highlights: ["[notable win or milestone]"],
    },

    // ── 2007-2020: recovered from the old site. See the provenance note above.
    "2020": {
        results: [
            { placing: "Runners up", tournament: "Online WSDC" },
            { placing: "Champions", tournament: "Tilbury House Online Championship" },
            { placing: "6th — Quarter Finals", tournament: "Vancouver Pre-WSDC" },
            { placing: "3rd — Semi Finals", tournament: "Bluebonnet Debate Championship" },
        ],
    },
    "2019": {
        results: [
            { placing: "Ranked 37th", tournament: "WSDC, Bangkok" },
            { placing: "Ranked 7th", tournament: "Chennai Pre-WSDC" },
            { placing: "4th — Semi Finals", tournament: "Oldham Cup — National Team Category" },
        ],
    },
    "2018": {
        results: [
            { placing: "17th — Partial Double Octo-Final", tournament: "WSDC, Zagreb" },
        ],
    },
    "2017": {
        results: [
            { placing: "22nd — Partial Double Octo-Final", tournament: "WSDC, Bali" },
        ],
    },
    "2015": {
        results: [
            { placing: "Ranked 17th", tournament: "WSDC, Singapore" },
        ],
    },

    // ── RECORD-ONLY: there is no team photo in src/assets/team/ for the years below,
    // and the carousel is driven by those photos — so these do not surface anywhere on
    // the site yet. Kept here so the record is not lost. Add a photo for a year and its
    // results appear automatically; ask if you would rather have an all-years honours
    // roll section that shows them without photos.
    "2016": {
        results: [{ placing: "11th — Octo-Final", tournament: "WSDC, Stuttgart" }],
    },
    "2014": {
        results: [{ placing: "Ranked 28th", tournament: "WSDC, Bangkok" }],
    },
    "2012": {
        results: [{ placing: "Ranked 19th", tournament: "WSDC, Cape Town" }],
    },
    "2011": {
        results: [{ placing: "Ranked 23rd", tournament: "WSDC, Dundee" }],
    },
    "2010": {
        results: [{ placing: "12th — Octo-Final", tournament: "WSDC, Doha" }],
    },
    "2009": {
        results: [{ placing: "Ranked 17th", tournament: "WSDC, Athens" }],
    },
    "2008": {
        results: [{ placing: "Ranked 18th", tournament: "WSDC, Washington D.C." }],
    },
    "2007": {
        results: [{ placing: "Ranked 24th", tournament: "WSDC, Seoul" }],
    },
};

export default ACHIEVEMENTS;
