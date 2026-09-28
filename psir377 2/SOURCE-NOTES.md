# Source and editorial notes

Course authority: **Fall 2026 PSIR 377**, seven-page syllabus provided by the course team. The course outline is explicitly tentative. Page references in the site refer to that PDF. Assessment dates are in 2026. No final examination date is specified.

The site preserves the thirteen official week titles and all 24 required reading entries (including the two separate Peoples page assignments), two recommended reading entries, six audiovisual URLs, and the film listed without a URL. Reflowed PDF line wraps and spacing are normalized. Full reading texts and the historical assignments are not distributed.

## Visible bibliographic discrepancies

- Week 8: the syllabus prints Kidd and McIntosh's journal as **Social Compass**, pp. **785-784**. The supplied article prints **Sociology Compass**, pp. **785–794**. The site keeps the syllabus entry and adds a visible source note. The source filename starts `W07`, but the authoritative 2026 syllabus assigns it to **Week 8**.
- Week 11: the syllabus prints Mello's journal as **Social Movements Studies**. The supplied article identifies it as **Social Movement Studies**. The site preserves the syllabus entry and provides a source note.
- Other bibliographic wording, including `Social Compass` for McCurdy and `Asymetrical` in the Rumelili and Çelik title, is retained as printed. No external corrections were substituted.
- Week 10 provides URLs but no titles for its three videos. Labels are therefore **Syllabus video 1**, **2**, and **3**. No title or transcript has been invented.
- *Made in Dagenham* (2010) has no URL in the syllabus. No streaming source is supplied by the site.

## Pedagogical sources

The October 2024 assignment asks students to construct a definition using multiple characteristics observed in Toby Chow's talk. The November 2024 assignment asks for interpretation of the relationship between media, politics, and society through *NO* (2012). Their analytical logic informs the companion. Neither prompt is reproduced as a Fall 2026 assessment; *NO* is not added to the 2026 watch list.

The optional activities use original hypothetical cases and paraphrases:

- Week 3: Císař (2015), Table 3.1 and pp. 50–64: Marxist, Weberian, Polanyian, and Tocquevillean explanatory emphases.
- Week 6: Tilly and Wood (2020), pp. 132–133 and 145–148: breadth, equality, protected/binding consultation, trust networks, and conditional democratizing effects.
- Week 8: Kidd and McIntosh (2016), pp. 785–793: techno-optimism, techno-pessimism, and evidence-oriented techno-ambivalence.
- Week 9: Wulff, Bernstein and Taylor (2015), pp. 110–121: identity for empowerment, as goal and as strategy; multiple institutional sites of power; emotions.
- Week 11: Mello (2007), pp. 207–209 and 217–223: structural change, opportunities/threats, organizations, interpretation/identity, and mobilization. The ordering exercise is an analytical reconstruction, not a deterministic chronological model.

These page numbers are printed publication pages, not PDF viewer page indices. Activities and key questions are editorial additions, explicitly identified as optional and ungraded. Explanatory feedback avoids scores or claims to universally settled definitions. It does not assess free-text answers automatically.

The companion groups resources and mobilizing structures in one toolkit entry, and repertoires and WUNC in another, to keep the map compact. Week links indicate relevance for companion study; they do not alter the reading schedule or assert that every associated concept is fully developed in every reading.

## Implementation decisions

Plain HTML, CSS, and JavaScript replace the specification's provisional React choice. The requested interactions need no backend or build tool, and a static bundle makes GitHub Pages setup and editing easier. No runtime dependencies, analytics, student database, authentication, or persistent response storage are included. Source files use relative paths for repository subdirectory hosting.

Browsers supporting `document.modelContext.registerTool` can expose two optional tools: opening a course week and showing a concept. The visible course interface works independently of that experimental browser API.
