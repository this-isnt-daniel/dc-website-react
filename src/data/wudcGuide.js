// Content for /guide-to-wudc.
//
// The repo had almost no WUDC content, so this is a section scaffold: the BP format
// summary and the WUDC Manual link are real, everything marked [PLACEHOLDER] is
// waiting to be written.
export const wudcGuideSections = {
  'the-format': {
    title: 'The BP Format',
    description: 'British Parliamentary, as used at WUDC',
    faqs: [
      {
        id: 'format-basics',
        question: 'What is British Parliamentary debating?',
        answer: `**British Parliamentary (BP)** is the format used at university level and at the World Universities Debating Championship (WUDC).

- 4 teams of 2 speakers
- 7-minute speeches
- Impromptu motions (15 min prep)

The definitive reference is the [WUDC Manual](https://drive.google.com/file/d/1pXoKtAdigoL5w94cKDcQ8nCQ5fN06pMp/view).`
      },
      {
        id: 'the-four-teams',
        question: 'How are the four teams arranged?',
        answer: `[PLACEHOLDER — explain Opening Government, Opening Opposition, Closing Government and Closing Opposition, the eight speaker positions in order, and that teams compete against the other three rather than just the other side.]`
      },
      {
        id: 'speaker-roles',
        question: 'What is each speaker responsible for?',
        answer: `[PLACEHOLDER — duties of the PM, LO, DPM, DLO, Member of Government, Member of Opposition, Government Whip and Opposition Whip.]`
      },
      {
        id: 'extension',
        question: 'What is an extension, and what makes a good one?',
        answer: `[PLACEHOLDER — what closing half teams must add, what counts as a genuine extension vs. a rehash, and how extensions are weighed against the opening half.]`
      },
      {
        id: 'points-of-information',
        question: 'How do Points of Information work in BP?',
        answer: `[PLACEHOLDER — protected first and last minute, offering and taking POIs, and how they factor into a speaker's score.]`
      },
    ]
  },
  'adjudication': {
    title: 'Adjudication',
    description: 'Calling and ranking a BP room',
    faqs: [
      {
        id: 'ranking-teams',
        question: 'How is a BP room ranked?',
        answer: `[PLACEHOLDER — the four teams take 1st through 4th, awarding 3/2/1/0 team points. Explain how the panel compares halves and teams within a half.]`
      },
      {
        id: 'speaker-scale',
        question: 'What speaker scale does WUDC use?',
        answer: `[PLACEHOLDER — set out the 50-100 WUDC speaker scale and what each band means.]`
      },
      {
        id: 'ca-team',
        question: 'What does the CA team do?',
        answer: `[PLACEHOLDER — role of the Chief Adjudicator and Deputy CAs: motion setting, judge allocation, briefings and dispute resolution.]`
      },
    ]
  },
  'glossary': {
    title: 'Glossary',
    description: 'BP jargon, decoded',
    faqs: [
      {
        id: 'common-terms',
        question: 'What does the jargon mean?',
        answer: `[PLACEHOLDER — define the terms newcomers hit first, e.g. knifing, whipping, squirrel, even-if, mechanism, characterisation, burden, clash, iron-manning, tabbing, break, silent round.]`
      },
    ]
  },
  'resources': {
    title: 'Resources',
    description: 'Manual and reference material',
    documents: [
      { title: 'WUDC Manual', type: 'Link', size: '—', link: 'https://drive.google.com/file/d/1pXoKtAdigoL5w94cKDcQ8nCQ5fN06pMp/view' },
      { title: 'DebateData — Motion Database', type: 'Link', size: '—', link: 'https://debatedata.io' },
      { title: 'Debate Resources Compilation', type: 'Link', size: '—', link: 'https://docs.google.com/spreadsheets/d/1FkJ7FlD64-Kga9kwHVgm863lJTnmeC3abbwleCIQ9vY/htmlview#' },
    ]
  },
};

export default wudcGuideSections;
