# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Renters searching across major cities, often under time pressure and without complete market knowledge.

## Product Purpose

Livin is a voice-first apartment search agent. A renter talks through requirements and preferences, Livin confirms what it heard, and returns a small set of best-fit options with clear trade-offs.

## Positioning

Livin combines persistent preference memory, hard-constraint filtering, and small explained shortlists. Conversation is the interface; the mechanism is what the system remembers and how strictly it respects eligibility.

## Operating Context

The primary flow happens as a voice conversation on a phone. A renter can describe an imperfect, evolving need in natural language, hear what Livin understood, correct it, and receive a shortlist without constructing a filter form. Explicit accept, reject, and refine feedback carries into later searches.

## Capabilities and Constraints

- Voice is the primary interaction mode represented by the website.
- Hard requirements such as budget, dates, commute, and dealbreakers must remain eligibility rules.
- Subjective preferences remain editable and are never allowed to silently overwrite explicit statements.
- The deterministic baseline remains reproducible and available until a learned layer proves measurable improvement.
- Recommendations are small, explained shortlists rather than infinite inventory feeds.
- The experience is intended for renters across major cities without being tied to a specific city or renter segment.
- The marketing site is a Next.js application deployed on Vercel.

## Brand Commitments

The product name is Livin. The voice is direct, observant, reassuring, and free of inflated AI claims. The website must foreground a phone-based voice conversation and feel authored rather than like a generic AI or SaaS template.

## Evidence on Hand

- Product, architecture, research, and roadmap source material is maintained in the `livin-brain` repository.
- The project has no validated testimonials, customer logos, pricing claims, or performance benchmarks; the website must not invent them.
- The current product segment remains proposed rather than validated.

## Product Principles

- Recommender, not authority.
- Constraints are eligibility.
- Personalization compounds through explicit feedback.
- Small explained shortlists beat browsing volume.
- Learning must prove uplift over a deterministic baseline.

## Accessibility & Inclusion

The voice demonstration must remain understandable without audio, expose its state in text, work by keyboard and touch, and provide an intentional reduced-motion path.
