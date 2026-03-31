import { useEffect, useState } from 'react'

export default function App() {
  const firstName = 'Brendan'
  const lastName = 'Smyth.'
  const subtitleLine = 'Screenwriter & Story Editor. Multiple produced credits.'
  const sceneHeadingText = 'THE WRITTEN WORD — PRESENT DAY'
  function shuffleArray(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const scrollingScreenplayLines = [
    'INT. APARTMENT — NIGHT',
    'EXT. EMPTY ROAD — NIGHT',
    'INT. DINER — LATE NIGHT',
    'EXT. PARKING LOT — RAINING',
    'INT. BEDROOM — EARLY MORNING',
    'EXT. FIELD — SUNSET',
    'INT. HOSPITAL ROOM — DAY',
    'EXT. FOREST — DUSK',
    'INT. OFFICE — NIGHT',
    'EXT. CITY STREET — NIGHT',
    'INT. BASEMENT — NIGHT',
    'EXT. BEACH — DAY',
    'INT. CAR — MOVING — NIGHT',
    'EXT. ROOFTOP — NIGHT',
    'INT. HALLWAY — CONTINUOUS',
    'EXT. GAS STATION — MIDNIGHT',
    'INT. KITCHEN — MORNING',
    'EXT. ALLEYWAY — NIGHT',
    'INT. CLASSROOM — DAY',
    'EXT. HIGHWAY — SUNSET',
    'INT. MOTEL ROOM — NIGHT',
    'EXT. BACKYARD — NIGHT',
    'INT. TRAIN — MOVING — DAY',
    'EXT. DESERT — DAY',
    'INT. THEATER — EMPTY — NIGHT',
    'EXT. SUBURBAN STREET — EVENING',
    'INT. BATHROOM — NIGHT',
    'EXT. PARK — DAY',
    'INT. LIVING ROOM — NIGHT',
    'EXT. BRIDGE — NIGHT',
    'FADE IN:',
    'CUT TO:',
    'SMASH CUT:',
    'MATCH CUT:',
    'HARD CUT TO:',
    'FADE TO BLACK.',
    'HOLD ON:',
    'INSERT:',
    'CLOSE ON:',
    'WIDE SHOT:',
  ]

  // Randomize order per page load (keeps the motion feeling “alive” without requiring new content)
  const [scrollingScreenplayLinesShuffled] = useState(() =>
    shuffleArray(scrollingScreenplayLines),
  )

  const [typedFirst, setTypedFirst] = useState('')
  const [typedLast, setTypedLast] = useState('')
  const [typedDone, setTypedDone] = useState(false)
  const [typedSubtitle, setTypedSubtitle] = useState('')
  const [subtitleDone, setSubtitleDone] = useState(false)

  useEffect(() => {
    setTypedFirst('')
    setTypedLast('')
    setTypedDone(false)

    let i = 0
    let j = 0
    let firstTimer = null
    let secondTimer = null

    firstTimer = window.setInterval(() => {
      i += 1
      setTypedFirst(firstName.slice(0, i))

      if (i >= firstName.length) {
        if (firstTimer) window.clearInterval(firstTimer)

        window.setTimeout(() => {
          secondTimer = window.setInterval(() => {
            j += 1
            setTypedLast(lastName.slice(0, j))

            if (j >= lastName.length) {
              if (secondTimer) window.clearInterval(secondTimer)
              setTypedDone(true)
            }
          }, 65)
        }, 350)
      }
    }, 75)

    return () => {
      if (firstTimer) window.clearInterval(firstTimer)
      if (secondTimer) window.clearInterval(secondTimer)
    }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06 },
    )
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    setTypedSubtitle('')
    setSubtitleDone(false)

    let i = 0
    let intervalId = null
    const startTimeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1
        setTypedSubtitle(subtitleLine.slice(0, i))

        if (i >= subtitleLine.length) {
          if (intervalId) window.clearInterval(intervalId)
          setSubtitleDone(true)
        }
      }, 28)
    }, 650)

    return () => {
      window.clearTimeout(startTimeoutId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const btn = e.target.querySelector('.form-submit')
    btn.textContent = 'Message Sent.'
    btn.style.background = '#00A651'
    setTimeout(() => {
      btn.textContent = 'Send Message →'
      btn.style.background = ''
      e.target.reset()
    }, 3000)
  }

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          Brendan <span>Smyth</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#reel">Reel</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#credits">Credits</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#testimonials">Press</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span className="page-num">1.</span>
      </nav>

      <section id="hero">
        <div className="scene-heading fade-up">{sceneHeadingText}</div>
        <h1 className="hero-name fade-up">
          <span>{typedFirst || '\u00A0'}</span>
          <br />
          <span className="ur">{typedLast || '\u00A0'}</span>
          {typedDone ? <span className="type-underline" aria-hidden="true" /> : null}
        </h1>
        <p className="hero-role hero-role--typed fade-up" aria-label={subtitleLine}>
          <span className="hero-role-text">{typedSubtitle || '\u00A0'}</span>
          <span
            className={`subtitle-caret${subtitleDone ? ' subtitle-caret--done' : ''}`}
            aria-hidden="true"
          />
        </p>
        <div className="hero-cta fade-up">
          <a href="#projects" className="btn-primary">View Credits</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>

        <div className="scrolling-screenplay" aria-hidden="true">
          <div className="scrolling-screenplay__track">
            <div className="scrolling-screenplay__sequence">
              {scrollingScreenplayLinesShuffled.map((line, idx) => (
                <div className="scroll-line" key={`ss-a-${idx}`}>
                  <span className="scroll-scene">{line}</span>
                </div>
              ))}
            </div>
            <div className="scrolling-screenplay__sequence">
              {scrollingScreenplayLinesShuffled.map((line, idx) => (
                <div className="scroll-line" key={`ss-b-${idx}`}>
                  <span className="scroll-scene">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="slugline slugline--about"><span className="si">INT.</span> About me</div>
        <div className="about-grid fade-up">
          <div>
            <div className="about-photo">
              <img src="/brendan-about.png" alt="Brendan Smyth" />
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a fourth-year Bachelor of Film and Television (BFTV) student at Sheridan College, specializing in screenwriting and story editing. My work is rooted in a strong understanding of narrative structure, character development, and the collaborative nature of film production. In addition to writing, I bring hands-on experience in directing and location sound, giving me a well-rounded perspective from script to screen.
            </p>
            <p>
              I recently completed an internship with the CILECT Film Jury, where I gained professional experience analyzing and evaluating films within a collaborative, industry-focused environment.
            </p>
            <p>
              As a screenwriter, I primarily work in Final Draft and consistently maintain an active slate of projects. I am currently seeking opportunities as a screenwriter in the Greater Toronto Area.
            </p>
            <div className="mini-skills" aria-label="Skills">
              <h3>Skills</h3>
              <div className="mini-skills-tags">
                <span className="mini-skill">Screenwriting</span>
                <span className="mini-skill">Feature Development</span>
                <span className="mini-skill">Short Form Narrative</span>
                <span className="mini-skill">Story Development</span>
                <span className="mini-skill">Script Editing</span>
                <span className="mini-skill">Directing</span>
                <span className="mini-skill">Story Editing</span>
                <span className="mini-skill">Transmedia</span>
                <span className="mini-skill">Location Sound</span>
                <span className="mini-skill">Final Draft / Fade In</span>
                <span className="mini-skill">Development Pitching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reel">
        <div className="slugline"><span className="si">INT.</span> Demo Reel</div>
        <h2 className="reel-h">The work, <em>in motion.</em></h2>
        <p className="reel-sub">Demo reel coming soon — check back shortly.</p>
        <div className="reel-box fade-up">
          <div className="reel-placeholder">
            <div className="reel-brackets">[ &nbsp;&nbsp;&nbsp; ]</div>
            <span className="reel-label">
              Demo reel placeholder<br />Paste your Vimeo or YouTube<br />embed URL here when ready
            </span>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="slugline"><span className="si">INT.</span> Selected Projects</div>
        <div className="projects-grid fade-up">
          <div className="project-card">
            <div className="project-img">
              <img src="/mongrel-bewitching-still.png" alt="Mongrel Bewitching — film still" />
              <span className="project-year-badge">2025</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">Mongrel Bewitching</div>
              <p className="project-desc">During the Salem Witch Trial, a grieving husband converses with the man who proclaimed his wife a witch, only to learn that the hunt is not over.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="https://youtu.be/-ExLfeFW3JY" target="_blank" rel="noreferrer" className="project-watch-link">Watch on YouTube →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/meek-still.png" alt="The Meek Shall Inherit The Earth — film still" />
              <span className="project-year-badge">2024</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">The Meek Shall Inherit The Earth</div>
              <p className="project-desc">The Meek Shall inherit the Earth is a documentary following the chronicles of the canadian based organization known as Indwell, a charity that has devoted itself to fighting the rising homeless crisis in Ontario.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Film →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/odeath-still.png" alt="O'Death — film still" />
              <span className="project-year-badge">2026</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Story Editor</div>
              <div className="project-title">O&apos;Death</div>
              <p className="project-desc">During the height of the B.C. Caribou Gold Rush, a hardworking prospector sets out in an stretch of land that appears to harbor a strange presence.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Film →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/paralyzed-still.png" alt="Paralyzed — music video still" />
              <span className="project-year-badge">2025</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Story Editor · Music Video</div>
              <div className="project-title">Paralyzed</div>
              <p className="project-desc">A group of elderly men reminiscing about their glory days as a rock band are transported back in time to one of their shows, allowing them to relive their pasts.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="https://www.youtube.com/watch?v=TkNUurX3RPk" target="_blank" rel="noreferrer" className="project-watch-link">Watch on YouTube →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/expectations-still.png" alt="Expectations — film still" />
              <span className="project-year-badge">2026</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">Expectations</div>
              <p className="project-desc">A young girl, Jane Doe, attends a party where she hopes to find acceptance, instead, what she finds is a cycle of misery where no one is enough.</p>
              <div className="project-footer project-footer--status-only">
                <span className="proj-status-tag proj-status-tag--wip">Under Production</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/fitz-still.png" alt="Fitz — film still" />
              <span className="project-year-badge">2026</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Story Editor</div>
              <div className="project-title">Fitz</div>
              <p className="project-desc">After the murder of his longtime friend &amp; colleague, a former police detective turned PI must confront his troubled past as he searches for answers.</p>
              <div className="project-footer project-footer--status-only">
                <span className="proj-status-tag proj-status-tag--wip">Under Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="credits">
        <div className="slugline"><span className="si">EXT.</span> Additional Credits</div>
        <table className="credits-table fade-up">
          <thead>
            <tr>
              <th>Title</th>
              <th>Role</th>
              <th>Format</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="credit-title">The Invisible School</span></td>
              <td><span className="credit-role">Location Sound</span></td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>Documentary</td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>2024</td>
            </tr>
            <tr>
              <td><span className="credit-title">Celluloid Memories</span></td>
              <td><span className="credit-role">Transmedia</span></td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>Documentary</td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>2024</td>
            </tr>
            <tr>
              <td><span className="credit-title">Eco Norteños</span></td>
              <td><span className="credit-role">Asst. Transmedia</span></td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>Documentary</td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>2024</td>
            </tr>
            <tr>
              <td><span className="credit-title">CILECT</span></td>
              <td><span className="credit-role">Film Juror</span></td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>Internship</td>
              <td style={{ fontSize: '0.82rem', color: 'var(--ink-faint)' }}>2025</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="testimonials">
        <div className="slugline"><span className="si">EXT.</span> Testimonials</div>
        <div className="testimonials-grid fade-up">
          <div className="testimonial-card">
            <p className="testimonial-quote">Replace this with a real testimonial from a collaborator, director, or producer who has worked with your scripts. Specificity makes it credible.</p>
            <div className="testimonial-author">
              <div className="author-name">First Last</div>
              <div className="author-title">Director · Project Name</div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">Another testimonial here — ask producers, cast, or fellow writers for a short statement about your work on the page and in the room.</p>
            <div className="testimonial-author">
              <div className="author-name">First Last</div>
              <div className="author-title">Producer · Company</div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">Festival selections, jury quotes, or press mentions work here too. Even a short line from a review lends real weight.</p>
            <div className="testimonial-author">
              <div className="author-name">Publication or Festival</div>
              <div className="author-title">Film Festival · Year</div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="slugline"><span className="si">INT.</span> Résumé</div>
        <div className="resume-inner">
          <div>
            <h2 className="resume-title">Brendan Smyth</h2>
            <p className="resume-sub">screenwriting resume</p>
          </div>
          <div className="resume-actions">
            <a href="resume.pdf" download className="btn-primary">Download PDF</a>
            <a href="resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">View Online</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="slugline"><span className="si">EXT.</span> Contact</div>
        <div className="contact-grid">
          <div>
            <h2>Let&apos;s put something on <em>the page.</em></h2>
            <p className="contact-sub">Open to commissions, co-writing, development, and collaboration.</p>
            <div className="contact-links">
              <a href="mailto:b.smyth1@me.com" className="contact-link">
                <span className="cl-label">Email</span>b.smyth1@me.com
              </a>
              <a href="https://instagram.com/brendansmythh" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-label">Instagram</span>@brendansmythh
              </a>
              <a href="https://www.linkedin.com/in/brendan-smyth-b08879304" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-label">LinkedIn</span>linkedin.com/in/brendan-smyth-b08879304
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about your project…" required />
            </div>
            <button type="submit" className="form-submit">Send Message →</button>
          </form>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2026 Brendan Smyth. All rights reserved. &nbsp;·&nbsp; FADE OUT.</span>
        <ul className="footer-links">
          <li><a href="#hero">Top</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </>
  )
}
