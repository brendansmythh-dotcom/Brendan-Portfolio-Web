import { useEffect } from 'react'

export default function App() {
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

  function handleSubmit(e) {
    e.preventDefault()
    const btn = e.target.querySelector('.form-submit')
    btn.textContent = 'Message Sent.'
    btn.style.background = '#2B5FA6'
    setTimeout(() => {
      btn.textContent = 'Send Message →'
      btn.style.background = ''
      e.target.reset()
    }, 3000)
  }

  return (
    <>
      <div className="margin-line" />
      <div className="hole" />
      <div className="hole" />
      <div className="hole" />

      <nav>
        <a href="#hero" className="nav-logo">
          Brendan <span>Smyth</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#reel">Reel</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#credits">Credits</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testimonials">Press</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span className="page-num">1.</span>
      </nav>

      <section id="hero">
        <div className="hero-watermark">FADE IN</div>
        <div className="scene-heading">THE WRITTEN WORD — PRESENT DAY</div>
        <h1 className="hero-name">
          Brendan<br />
          <span className="ur">Smyth.</span>
        </h1>
        <p className="hero-role">Screenwriter &amp; Story Editor. Multiple produced credits.</p>
        <p className="hero-action">
          A trained screenwriter whose work has made it from the page to the screen —
          crafting narratives that move through festival circuits, production houses,
          and the spaces where stories find their audience.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Credits</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </section>

      <section id="about">
        <div className="slugline"><span className="si">INT.</span> About Brendan</div>
        <div className="about-grid fade-up">
          <div>
            <div className="about-photo" />
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--ink-faint)', marginTop: '0.6rem' }}>
              — Add your photo here
            </p>
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
            <div className="about-stats">
              <div>
                <div className="stat-num">3</div>
                <div className="stat-label">Written Credits</div>
              </div>
              <div>
                <div className="stat-num">3</div>
                <div className="stat-label">Story Editor Credits</div>
              </div>
              <div>
                <div className="stat-num">—</div>
                <div className="stat-label">Years Active</div>
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
            <div className="project-img placeholder">
              <span className="project-img-label">Add Film Still</span>
              <span className="project-year-badge">2025</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">Mongrel Bewitching</div>
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Film →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img placeholder">
              <span className="project-img-label">Add Film Still</span>
              <span className="project-year-badge">2026</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Writer</div>
              <div className="project-title">Expectations</div>
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Film →</a>
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
            <div className="project-img placeholder">
              <span className="project-img-label">Add Film Still</span>
              <span className="project-year-badge">2026</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Story Editor</div>
              <div className="project-title">Fitz</div>
              <p className="project-desc">Add a logline or short description of the film here — genre, premise, tone.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Film →</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img placeholder">
              <span className="project-img-label">Add Film Still</span>
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
            <div className="project-img placeholder">
              <span className="project-img-label">Add Music Video Still</span>
              <span className="project-year-badge">2025</span>
            </div>
            <div className="project-body">
              <div className="project-role-tag">Story Editor · Music Video</div>
              <div className="project-title">Paralyzed</div>
              <p className="project-desc">Add a short description or credit note for this music video here.</p>
              <div className="project-footer">
                <span className="proj-status-tag">Produced</span>
                <a href="#" className="project-watch-link">Watch Video →</a>
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

      <section id="skills">
        <div className="slugline"><span className="si">INT.</span> Skills &amp; Craft</div>
        <div className="skills-layout fade-up">
          <div className="skills-col">
            <h3>Writing</h3>
            <div className="skill-item"><span className="skill-name">Screenwriting</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '96%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Feature Development</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '90%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Short Form Narrative</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '94%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Story Development</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '88%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Script Editing</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '85%' }} /></div></div>
          </div>
          <div className="skills-col">
            <h3>Production &amp; Media</h3>
            <div className="skill-item"><span className="skill-name">Story Editing</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '88%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Transmedia</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '78%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Location Sound</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '72%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Final Draft / Fade In</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '95%' }} /></div></div>
            <div className="skill-item"><span className="skill-name">Development Pitching</span><div className="skill-bar-wrap"><div className="skill-bar" style={{ width: '78%' }} /></div></div>
          </div>
        </div>
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
              <a href="mailto:brendan@youremail.com" className="contact-link">
                <span className="cl-label">Email</span>brendan@youremail.com
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-label">Instagram</span>@yourhandle
              </a>
              <a href="https://vimeo.com/yourhandle" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-label">Vimeo</span>vimeo.com/yourhandle
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-label">LinkedIn</span>linkedin.com/in/yourprofile
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
