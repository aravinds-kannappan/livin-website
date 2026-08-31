import {
  ArrowUpRight,
  Check,
  CircleDot,
  GitBranch,
  LockKeyhole,
  MessageSquare,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TrendingUp
} from "lucide-react";

const finalists = [
  {
    name: "Parker House",
    fit: "92",
    rent: "$1,450",
    commute: "11 min",
    tradeoff: "Older building, stronger commute and price fit."
  },
  {
    name: "Oak + Vine",
    fit: "88",
    rent: "$1,620",
    commute: "18 min",
    tradeoff: "Better light and safety score, slightly over target."
  },
  {
    name: "Union Sublet",
    fit: "84",
    rent: "$1,280",
    commute: "9 min",
    tradeoff: "Shorter lease with verification still pending."
  }
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Constraints stay hard",
    copy: "Budget, commute, dates, and dealbreakers filter inventory before any semantic match or agent judgment."
  },
  {
    icon: SlidersHorizontal,
    title: "Preferences stay editable",
    copy: "The system separates what a renter requires from what they are still discovering across conversations."
  },
  {
    icon: TrendingUp,
    title: "Learning must prove itself",
    copy: "A deterministic baseline remains the fallback until feedback-driven ranking shows measurable uplift."
  }
];

const loop = [
  "Conversation confirms the profile",
  "Hard eligibility removes impossible listings",
  "Baseline scoring creates a reproducible shortlist",
  "Feedback updates the next search without rewriting stated needs"
];

const roadmap = [
  ["01", "Evaluation foundation", "Pairwise renter judgments, failure categories, and a repeatable baseline."],
  ["02", "Ranking prototype", "Filter-first ranking, semantic soft-preference matching, and grounded explanations."],
  ["03", "Learning loop", "Repeated feedback tests that show whether recommendations improve for the same user."]
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Livin home">
            <span className="brandMark">L</span>
            <span>Livin</span>
          </a>
          <div className="navLinks">
            <a href="#system">System</a>
            <a href="#research">Research</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <a className="navAction" href="https://github.com/aravinds-kannappan/livin-website">
            <span>GitHub</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Preference-learning apartment search</p>
            <h1>Apartment search that learns what you actually choose.</h1>
            <p className="lede">
              Livin turns messy renter preferences into a small set of best-fit listings,
              explains the trade-offs, and improves as the same person gives feedback.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#system">
                <span>See the loop</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="secondaryButton" href="#research">Read the research stance</a>
            </div>
          </div>

          <div className="productSurface" aria-label="Livin recommendation preview">
            <div className="surfaceTop">
              <div>
                <span className="surfaceKicker">Search profile</span>
                <h2>Near campus, under $1.6k, safer walk home</h2>
              </div>
              <span className="statusPill">Learning from round 3</span>
            </div>

            <div className="profilePanel">
              <div>
                <span>Hard constraints</span>
                <p>$1,650 max, Aug move-in, no car required</p>
              </div>
              <div>
                <span>Soft preferences</span>
                <p>Natural light, quiet street, flexible sublease</p>
              </div>
            </div>

            <div className="finalistList">
              {finalists.map((listing, index) => (
                <article className="listing" key={listing.name}>
                  <div className="listingRank">{index + 1}</div>
                  <div className="listingMain">
                    <div className="listingTitle">
                      <h3>{listing.name}</h3>
                      <span>{listing.fit}% fit</span>
                    </div>
                    <div className="listingStats">
                      <span>{listing.rent}</span>
                      <span>{listing.commute}</span>
                    </div>
                    <p>{listing.tradeoff}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section introBand">
        <div className="sectionHeader">
          <p className="eyebrow">What is different</p>
          <h2>Livin is built around preference evidence, not infinite browsing.</h2>
        </div>
        <div className="principleGrid">
          {principles.map((item) => (
            <article className="principle" key={item.title}>
              <item.icon size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section systemSection" id="system">
        <div className="sectionHeader compact">
          <p className="eyebrow">System loop</p>
          <h2>A transparent path from conversation to shortlist.</h2>
          <p>
            The architecture keeps market facts, stated preferences, feedback,
            and recommendation traces distinct so failures can be diagnosed.
          </p>
        </div>

        <div className="loopRail">
          {loop.map((item, index) => (
            <div className="loopItem" key={item}>
              <div className="loopNumber">{String(index + 1).padStart(2, "0")}</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section researchSection" id="research">
        <div className="researchGrid">
          <div>
            <p className="eyebrow">Research stance</p>
            <h2>Better means better for the same renter over time.</h2>
          </div>
          <div className="researchCopy">
            <p>
              Livin measures improvement with target-user feedback: pairwise
              choices, graded judgments, and later acceptance. Offline agent
              checks still matter, but they answer a different question than
              whether the renter actually prefers the results.
            </p>
            <div className="evidenceGrid">
              <span><CircleDot size={16} aria-hidden="true" /> Feasibility scored separately</span>
              <span><Radar size={16} aria-hidden="true" /> Uncertainty stays visible</span>
              <span><GitBranch size={16} aria-hidden="true" /> Baseline compared before agents win</span>
              <span><LockKeyhole size={16} aria-hidden="true" /> Explicit statements outrank inferred behavior</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section roadmapSection" id="roadmap">
        <div className="sectionHeader compact">
          <p className="eyebrow">Roadmap</p>
          <h2>From credible evaluation to a learning product.</h2>
        </div>
        <div className="roadmap">
          {roadmap.map(([step, title, copy]) => (
            <article className="roadmapItem" key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div>
          <Sparkles size={22} aria-hidden="true" />
          <h2>Small shortlists. Clear trade-offs. Preference memory that compounds.</h2>
        </div>
        <a className="primaryButton dark" href="mailto:hello@getlivin.org">
          <MessageSquare size={18} aria-hidden="true" />
          <span>Talk to Livin</span>
        </a>
      </section>
    </main>
  );
}
