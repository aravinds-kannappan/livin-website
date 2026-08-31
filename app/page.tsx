"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, Check, GitFork, Mic, Pause, Play,
  RotateCcw, ShieldCheck
} from "lucide-react";

const scenes = [
  { speaker: "You", state: "Listening", line: "Quiet, under $2,400, close to work. I walk home late.", marks: ["$2,400 → hard", "late walk → hard"] },
  { speaker: "Livin", state: "Confirming", line: "Budget and the walk stay fixed. Trade space for more light?", marks: ["2 confirmed", "1 open trade"] },
  { speaker: "You", state: "Refining", line: "Yes. Natural light matters more than extra space.", marks: ["light → priority", "space → flexible"] },
  { speaker: "Livin", state: "Shortlist ready", line: "Three places fit. Here’s the clearest trade-off.", marks: ["3 eligible", "trade-offs visible"] }
];

const listings = [
  { name: "The Rowan", place: "Central district", rent: "$2,180", walk: "11 min", fit: "92%", why: "Quiet route. Best light.", tradeoff: "Smaller kitchen" },
  { name: "Mercer House", place: "Riverside", rent: "$2,350", walk: "18 min", fit: "88%", why: "More space. Well-lit walk.", tradeoff: "Near budget" },
  { name: "Parkline", place: "Old quarter", rent: "$2,090", walk: "9 min", fit: "84%", why: "Shortest commute.", tradeoff: "Less natural light" }
];

const memory = [
  ["Said", "Under $2,400. Safe walk."],
  ["Chose", "Light over space."],
  ["Learned", "Quiet wins."],
  ["Next", "Start here."]
];

export default function Home() {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setScene((current) => (current + 1) % scenes.length), 4200);
    return () => window.clearInterval(timer);
  }, [playing]);

  const current = scenes[scene];
  const restart = () => { setScene(0); setPlaying(true); };

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Livin home">
            <span className="brandSignal" aria-hidden="true"><i /><i /><i /></span>
            Livin
          </a>
          <div className="navLinks">
            <a href="#conversation">How it works</a>
            <a href="#shortlist">Shortlist</a>
            <a href="#memory">Memory</a>
          </div>
          <a className="iconLink" href="https://github.com/aravinds-kannappan/livin-website" aria-label="View Livin on GitHub">
            <GitFork size={19} aria-hidden="true" />
          </a>
        </nav>

        <div className="heroLayout">
          <div className="heroCopy">
            <h1>Just tell Livin what home feels like.</h1>
            <p className="heroLede">
              Talk naturally. Get a shortlist that learns.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#conversation">
                Hear the conversation <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="textLink" href="mailto:hello@getlivin.org">
                Join early access <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="promiseLine" aria-label="Livin product principles">
              <span><Check size={14} /> Limits stay hard</span>
              <span><Check size={14} /> Trade-offs stay visible</span>
            </div>
          </div>

          <div className="phoneStage" id="conversation">
            <div className="stageNote stageNoteTop">VOICE WALKTHROUGH · ILLUSTRATIVE</div>
            <div className="phone" aria-label="Animated Livin voice conversation">
              <div className="phoneFrame">
                <div className="phoneTop">
                  <span>9:41</span><span className="dynamicIsland" aria-hidden="true" /><span>5G</span>
                </div>
                <div className="callHeader">
                  <div><span>Livin voice search</span><strong>{current.state}</strong></div>
                  <button className="phoneControl" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause voice demo" : "Play voice demo"}>
                    {playing ? <Pause size={17} /> : <Play size={17} />}
                  </button>
                </div>
                <div className={`voiceField voiceField${scene} ${playing ? "isPlaying" : "isPaused"}`}>
                  <div className="waveform" aria-hidden="true">
                    {Array.from({ length: 23 }).map((_, index) => <i key={index} style={{ "--bar": index } as React.CSSProperties} />)}
                  </div>
                  <span className="speaker">{current.speaker}</span>
                </div>
                <div className="transcript" key={scene} aria-live="polite">
                  <p>“{current.line}”</p>
                  <div className="annotationStrip">
                    {current.marks.map((mark) => <span key={mark}>{mark}</span>)}
                  </div>
                </div>
                <div className="sceneRail" aria-label={`Scene ${scene + 1} of ${scenes.length}`}>
                  {scenes.map((item, index) => (
                    <button key={item.state} className={index === scene ? "active" : ""} onClick={() => { setScene(index); setPlaying(false); }} aria-label={`Show ${item.state} scene`} />
                  ))}
                </div>
                <div className={`miniResults ${scene === 3 ? "isVisible" : ""}`} aria-hidden={scene !== 3}>
                  <div className="miniResultTop"><strong>The Rowan</strong><span>92% illustrative fit</span></div>
                  <p>Quiet + bright <em>Trade-off: smaller kitchen</em></p>
                </div>
                <div className="phoneFooter">
                  <button className="restartButton" onClick={restart} aria-label="Restart demo"><RotateCcw size={15} /> Restart</button>
                  <div className={`micButton ${playing ? "isListening" : ""}`} aria-hidden="true"><Mic size={22} /></div>
                  <span>{playing ? "Demo playing" : "Demo paused"}</span>
                </div>
              </div>
            </div>
            <div className="stageNote stageNoteBottom">SYNTHETIC DEMO</div>
          </div>
        </div>
        <a className="scrollCue" href="#precision">Voice in. Precision out. <ArrowDown size={17} aria-hidden="true" /></a>
      </section>

      <section className="precisionSection" id="precision">
        <div className="sectionHeading">
          <h2>Say it once. Keep it precise.</h2>
          <p>Needs stay hard. Preferences stay flexible.</p>
        </div>
        <div className="constraintLedger">
          <div className="ledgerRow hard"><span>Fixed</span><strong>$2,400 max · safe late walk</strong><em>Never traded</em></div>
          <div className="ledgerRow soft"><span>Flexible</span><strong>Light · space · character</strong><em>Ranked</em></div>
          <div className="ledgerRow learned"><span>Learned</span><strong>Quiet wins</strong><em>Editable</em></div>
        </div>
      </section>

      <section className="shortlistSection" id="shortlist">
        <div className="shortlistIntro">
          <div><span className="exampleLabel">Illustrative · synthetic data</span><h2>Three worth seeing.</h2></div>
          <p>Major cities. One clear shortlist.</p>
        </div>
        <div className="listingTable" role="table" aria-label="Example Livin shortlist">
          <div className="tableHeader" role="row"><span>Place</span><span>Fit</span><span>Why it made the cut</span><span>Trade-off</span></div>
          {listings.map((listing, index) => (
            <article className="listingRow" role="row" key={listing.name}>
              <div className="listingIdentity"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{listing.name}</h3><p>{listing.place} · {listing.rent} · {listing.walk} walk</p></div></div>
              <strong className="fitScore">{listing.fit}</strong>
              <p className="listingWhy">{listing.why}</p>
              <p className="tradeoff">{listing.tradeoff}</p>
            </article>
          ))}
        </div>
        <div className="trustNote"><ShieldCheck size={22} aria-hidden="true" /><p><strong>Uncertainty stays visible.</strong></p></div>
      </section>

      <section className="memorySection" id="memory">
        <div className="memoryTitle"><h2>Livin remembers what wins.</h2><p>Your words stay yours.</p></div>
        <div className="memoryTape">
          {memory.map(([label, copy], index) => <div className="memoryEntry" key={label}><span>{label}</span><p>{copy}</p>{index < memory.length - 1 && <i aria-hidden="true" />}</div>)}
        </div>
      </section>

      <footer className="footer">
        <div><span className="footerBrand">Livin</span><h2>Say it. See it.</h2></div>
        <a className="button buttonLight" href="mailto:hello@getlivin.org">Talk to Livin <ArrowUpRight size={18} aria-hidden="true" /></a>
        <p>Voice-first apartment search.</p>
      </footer>
    </main>
  );
}
