import { useEffect, useState } from 'react'

export default function App() {
  const firstName = 'Brendan'
  const lastName = 'Smyth.'
  const subtitleLine = 'Screenwriter & Story Editor. Multiple produced credits.'
  const sceneHeadingText = 'THE WRITTEN WORD — PRESENT DAY'

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
              {Array.from({ length: 14 }).map((_, idx) => (
                <div className="scroll-line" key={`ss-a-${idx}`}>
                  <span className="scroll-int">INT.</span>
                  <span className="scroll-scene">{sceneHeadingText}</span>
                </div>
              ))}
            </div>
            <div className="scrolling-screenplay__sequence">
              {Array.from({ length: 14 }).map((_, idx) => (
                <div className="scroll-line" key={`ss-b-${idx}`}>
                  <span className="scroll-int">INT.</span>
                  <span className="scroll-scene">{sceneHeadingText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="slugline"><span className="si">INT.</span> About Brendan</div>
        <div className="about-grid fade-up">
          <div>
            <div className="about-photo">
              <img src="/brendan-about.png" alt="Brendan Smyth" />
            </div>
          </div>
          <div className="about-text">
            <h2>A writer who sees the world through <em>story structure.</em></h2>
            <p>
              Brendan Smyth is a trained screenwriter with multiple produced film credits. His work spans a range of genres and tones — from intimate character-driven drama to bold, formally ambitious storytelling — united by a commitment to authentic voice and rigorous craft.
            </p>
            <p>
              With scripts that have moved from development through to production, Brendan brings a deep understanding of what it takes to write for the screen at a professional level: not just the ability to put words on a page, but to navigate the full arc of a script&apos;s life — from first draft to final cut.
            </p>
            <p>
              He is currently open to new collaborations, commissions, and development opportunities. Add anything specific here — current projects, training, a notable collaboration, or what drives your writing.
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
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="https://youtu.be/-ExLfeFW3JY" target="_blank" rel="noreferrer" className="project-watch-link">Watch on YouTube →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img placeholder">
              <span className="project-img-label">Add Film Still</span>
              <span className="project-year-badge">2024</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">The Meek Shall Inherit The Earth</div>
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
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
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
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
              <p className="project-desc">Add a short description or credit note for this music video here.</p>
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
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
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
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
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
            <h2>Full credits &amp; <em>CV.</em></h2>
            <p className="resume-sub">Complete writing history, production credits, and education — updated [Month Year].</p>
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
