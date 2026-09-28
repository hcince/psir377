# Validation

Verified locally on 28 September 2026.

## Automated checks

`node scripts/check.mjs` passed:

- 13 chronologically ordered Friday meetings, 24 required reading entries, two recommended entries.
- Five dated/undated assessment records totaling 100%; final date remains null/TBC.
- Milestone selection before, on, and after assessment dates; end-of-semester state; Istanbul midnight boundary.
- Five reading activity references, concept links, six syllabus media URLs, and the film without a URL.
- JavaScript syntax and relative local asset references.

## Browser checks

Verified in the Codex browser:

- Course content rendered without application console errors.
- All four opening cases completed, final reflection displayed, and reset returned to case 1.
- Císař, Tilly/Wood, Kidd/McIntosh, and Wulff/Bernstein/Taylor activities produced explanatory feedback from selected responses.
- Form reset cleared selections and feedback.
- Mello sequence controls changed order, comparison displayed the explanatory path, and reset restored the initial order.
- Week accordions and expand/collapse-all worked; a week summary also responded to Enter.
- Concept selection displayed its explanation and week connections.
- Mobile menu opened and closed with Escape.
- At 390px and 320px viewport widths, the document had no horizontal overflow; expanded weeks were checked at 390px.
- YouTube player was created only after Load video and removed by Close video; the original source link stayed available. Successful third-party playback was not treated as guaranteed.
- Both WebMCP tools were registered in a supported browser; valid calls changed visible week/concept state. An invalid week was rejected.

The standalone headless browser launcher could not run under this environment's application restrictions, so browser interaction checks used the supported application browser instead. These checks do not constitute a comprehensive WCAG audit. Hosted GitHub Pages deployment, third-party link availability, and 200% text enlargement have not been independently verified.

No GitHub repository or live deployment was created during packaging. Follow README.md to publish the docs folder.
