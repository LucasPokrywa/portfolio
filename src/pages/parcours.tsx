'use client'

import { useEffect, useRef, useState } from 'react'
import './parcours.css'

export default function Parcours() {
  const timeline = [
    {
      year: '2025-2028',
      title: 'Alternant Ingénieur DevOps',
      company: 'DGFiP',
      description: ['Automatisation avec Ansible', 'OpenStack', 'Podman'],
    },
    {
      year: '2025-2028',
      title: 'Ingénieur Developpement Informatique',
      company: 'ESIEE Paris',
      description: ['Developpement', 'Logiciel', 'Architecture', 'Projet'],
    },
    {
      year: '2025',
      title: 'Stage Développeur Web',
      company: 'Work Experience Agency',
      description: ['CMS','Javascript', 'Design'],
    },
    {
      year: '2025',
      title: 'BTS CIEL-IR',
      company: 'Lycée Louis Armand',
      description: ['Cybersécurité','Développement', 'Réseaux'],
    },
    {
      year: '2022',
      title: 'Baccalauréat Général',
      company: 'Lycée',
      description: ['Mention Bien', 'SVT', 'Physique Chimie', 'Maths Complémentaires'],
    },
  ]

  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  const targetProgressRef = useRef(0) 
  const currentProgressRef = useRef(0) 
  const maxTranslateRef = useRef(0)
  const rafRef = useRef(null)

  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const computeMax = () => {
      maxTranslateRef.current = Math.max(0, track.scrollWidth - window.innerWidth)
    }

    computeMax()
    window.addEventListener('resize', computeMax)
    return () => window.removeEventListener('resize', computeMax)
  }, [])

  
  useEffect(() => {
    const smoothing = 0.08 

    const loop = () => {
      const current = currentProgressRef.current
      const target = targetProgressRef.current
      const diff = target - current

      if (Math.abs(diff) > 0.0005) {
        currentProgressRef.current = current + diff * smoothing
        setTranslateX(-currentProgressRef.current * maxTranslateRef.current)
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top <= 1 && rect.bottom >= window.innerHeight - 1
      if (!isVisible) return

      const goingForward = e.deltaY > 0
      const atStart = targetProgressRef.current <= 0
      const atEnd = targetProgressRef.current >= 1

      if ((goingForward && atEnd) || (!goingForward && atStart)) return

      e.preventDefault()

      const max = maxTranslateRef.current || 1
      const delta = e.deltaY / max
      targetProgressRef.current = Math.min(1, Math.max(0, targetProgressRef.current + delta))
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section ref={sectionRef} className="parcours-section">
      <div className="parcours-track" ref={trackRef} style={{ transform: `translateX(${translateX}px)` }}>
        <div className="center-line-horizontal"></div>

        {timeline.map((item, index) => (
          <div
            className={`timeline-item-h ${index % 2 === 0 ? 'up' : 'down'}`}
            key={item.year}
          >
            <div className="dot-h"></div>
            <div className="card-h">
              <span className="year">{item.year}</span>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <ul>
                {item.description.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}