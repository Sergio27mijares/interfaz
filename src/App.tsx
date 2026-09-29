import { useState, useEffect, useCallback, useRef } from 'react'

const animals = [
  {
    id: 1,
    name: 'Jirafa Masai',
    scientificName: 'Giraffa camelopardalis tippelskirchii',
    category: 'Mamíferos',
    habitat: 'Sabana africana',
    diet: 'Herbívoro',
    lifespan: '25 años',
    weight: '750–1,270 kg',
    height: '4.5–6 m',
    status: 'Vulnerable',
    description:
      'La jirafa es el animal terrestre más alto del mundo. Su cuello característico le permite alcanzar hojas en las copas que ningún otro herbívoro puede. Convive en nuestra sabana africana junto a cebras y ñus.',
    funFact: 'Su lengua mide hasta 50 cm y es de color azul-negro para protegerse del sol.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona África',
    feedingTime: '10:00 · 16:00',
    icon: '🦒',
    num: '01',
  },
  {
    id: 2,
    name: 'Tigre de Bengala',
    scientificName: 'Panthera tigris tigris',
    category: 'Mamíferos',
    habitat: 'Selvas tropicales de India',
    diet: 'Carnívoro',
    lifespan: '10–15 años',
    weight: '140–300 kg',
    height: '95 cm',
    status: 'En peligro',
    description:
      'El tigre de Bengala es la subespecie más numerosa, aunque gravemente amenazada. Nuestro ejemplar "Rajah" forma parte de un programa internacional de cría en cautiverio para su eventual reintroducción.',
    funFact: 'Cada tigre tiene un patrón único de rayas, tan irrepetible como una huella digital.',
    image: 'https://images.unsplash.com/photo-1452001603782-7d4e7d931173?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1452001603782-7d4e7d931173?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona Asia',
    feedingTime: '11:30 · 17:30',
    icon: '🐯',
    num: '02',
  },
  {
    id: 3,
    name: 'Pingüino de Magallanes',
    scientificName: 'Spheniscus magellanicus',
    category: 'Aves',
    habitat: 'Costas patagónicas',
    diet: 'Piscívoro',
    lifespan: '25 años',
    weight: '2.7–6.5 kg',
    height: '70 cm',
    status: 'Casi amenazado',
    description:
      'Nuestra colonia de 40 pingüinos es una de las más grandes de Latinoamérica. Nadan a más de 25 km/h y pueden permanecer hasta 20 minutos bajo el agua sin respirar.',
    funFact: 'Son monógamos de por vida y regresan cada año al mismo nido y pareja.',
    image: 'https://images.unsplash.com/photo-1619323424567-4d7a36c8bf42?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1619323424567-4d7a36c8bf42?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona Polar',
    feedingTime: '12:00 · 15:00',
    icon: '🐧',
    num: '03',
  },
  {
    id: 4,
    name: 'Elefante Africano',
    scientificName: 'Loxodonta africana',
    category: 'Mamíferos',
    habitat: 'Sabana y bosques africanos',
    diet: 'Herbívoro',
    lifespan: '60–70 años',
    weight: '4,000–7,000 kg',
    height: '3.2–4 m',
    status: 'Vulnerable',
    description:
      'El mayor animal terrestre del planeta. Nuestra manada liderada por "Amara" cuenta con cinco individuos. Son seres profundamente sociales con memoria excepcional y fuertes vínculos familiares.',
    funFact: 'Se comunican por infrasonidos que viajan kilómetros a través del suelo.',
    image: 'https://images.unsplash.com/photo-1725030019879-f50f37af6049?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1725030019879-f50f37af6049?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona África',
    feedingTime: '09:30 · 15:30',
    icon: '🐘',
    num: '04',
  },
  {
    id: 5,
    name: 'Cebra de Burchell',
    scientificName: 'Equus quagga burchellii',
    category: 'Mamíferos',
    habitat: 'Sabana africana',
    diet: 'Herbívoro',
    lifespan: '20–30 años',
    weight: '200–340 kg',
    height: '1.4 m',
    status: 'Preocupación menor',
    description:
      'Una manada de 12 cebras comparte nuestra sabana con las jirafas. En movimiento, su pelaje a rayas crea un efecto óptico que confunde y desorienta a los depredadores.',
    funFact: 'Las rayas también repelen naturalmente a moscas tsetsé y otros ectoparásitos.',
    image: 'https://images.unsplash.com/photo-1565638248604-2a9319e6f334?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1565638248604-2a9319e6f334?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona África',
    feedingTime: '10:30 · 16:30',
    icon: '🦓',
    num: '05',
  },
  {
    id: 6,
    name: 'Búho Nival',
    scientificName: 'Bubo scandiacus',
    category: 'Aves',
    habitat: 'Tundra ártica',
    diet: 'Carnívoro',
    lifespan: '9–10 años',
    weight: '1.6–3 kg',
    height: '52–71 cm',
    status: 'Vulnerable',
    description:
      '"Luna" llegó como parte de un programa de rehabilitación. Es uno de los rapaces más grandes del mundo y puede girar la cabeza 270° para compensar la inmovilidad de sus ojos.',
    funFact: 'Detecta presas bajo 30 cm de nieve gracias a su oído de precisión extraordinaria.',
    image: 'https://images.unsplash.com/photo-1725030019825-8c8675a854e3?w=1600&h=900&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1725030019825-8c8675a854e3?w=400&h=400&fit=crop&auto=format',
    zone: 'Zona Ártica',
    feedingTime: '13:00',
    icon: '🦉',
    num: '06',
  },
]

const categories = ['Todos', 'Mamíferos', 'Aves']

const statusConfig: Record<string, { color: string; label: string }> = {
  'En peligro':         { color: '#dc2626', label: 'En peligro' },
  'Vulnerable':         { color: '#d97706', label: 'Vulnerable' },
  'Casi amenazado':     { color: '#ca8a04', label: 'Casi amenazado' },
  'Preocupación menor': { color: '#16a34a', label: 'Estable' },
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoplay, setAutoplay] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const filtered = activeCategory === 'Todos' ? animals : animals.filter(a => a.category === activeCategory)
  const current = filtered[currentIndex] ?? filtered[0]
  const st = statusConfig[current.status] ?? { color: '#16a34a', label: current.status }

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setProgress(0)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 400)
  }, [isTransitioning])

  const next = useCallback(() => goTo((currentIndex + 1) % filtered.length), [currentIndex, filtered.length, goTo])
  const prev = useCallback(() => goTo((currentIndex - 1 + filtered.length) % filtered.length), [currentIndex, filtered.length, goTo])

  useEffect(() => {
    setCurrentIndex(0)
    setProgress(0)
  }, [activeCategory])

  useEffect(() => {
    if (!autoplay) return
    setProgress(0)
    let p = 0
    progressRef.current = setInterval(() => {
      p += 1
      setProgress(p)
      if (p >= 100) next()
    }, 50)
    return () => { if (progressRef.current) clearInterval(progressRef.current) }
  }, [autoplay, currentIndex, next])

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'var(--font-body)', color: '#111' }}>

      {/* ── HEADER ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8f2ec' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#f0faf4" />
              <path d="M16 6 C16 6 10 12 10 18 C10 21.3 12.7 24 16 24 C19.3 24 22 21.3 22 18 C22 12 16 6 16 6Z" fill="#1a7a45" />
              <path d="M16 10 C16 10 13 14 13 17 C13 18.7 14.3 20 16 20" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5" />
            </svg>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: '#0d2b1a', letterSpacing: '-0.02em' }}>
                Zoológico Natura
              </div>
              <div style={{ fontSize: 10, color: '#6fa882', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 1 }}>
                Parque Natural · Est. 1952
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Animales', 'Hábitats', 'Conservación', 'Visita'].map(n => (
              <a key={n} href="#" style={{ fontSize: 13, color: '#4a7c5f', textDecoration: 'none', letterSpacing: '0.01em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1a7a45')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a7c5f')}>
                {n}
              </a>
            ))}
          </nav>

          <button style={{ padding: '9px 22px', borderRadius: 100, background: '#1a7a45', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', letterSpacing: '0.01em', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Entradas
          </button>
        </div>
      </header>

      {/* ── CAROUSEL ── */}
      <section style={{ position: 'relative', height: '92vh', minHeight: 560, overflow: 'hidden', background: '#0d1f15' }}>
        {/* Image */}
        <img
          key={current.id}
          src={current.image}
          alt={current.name}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            opacity: isTransitioning ? 0 : 0.85,
            transform: isTransitioning ? 'scale(1.03)' : 'scale(1)',
          }}
        />

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,18,10,0.96) 0%, rgba(5,18,10,0.4) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(80deg, rgba(5,18,10,0.7) 0%, transparent 55%)' }} />

        {/* Counter top-right */}
        <div style={{ position: 'absolute', top: 36, right: 44, display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 300, color: 'rgba(255,255,255,0.9)', transition: 'opacity 0.4s', opacity: isTransitioning ? 0 : 1 }}>
            {current.num}
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>/ {String(filtered.length).padStart(2, '0')}</span>
        </div>

        {/* Category pill top-left */}
        <div style={{ position: 'absolute', top: 36, left: 44 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            {current.zone}
          </span>
        </div>

        {/* Bottom content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 44px 44px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40 }}>
          {/* Animal title */}
          <div style={{ maxWidth: 560, transition: 'opacity 0.4s', opacity: isTransitioning ? 0 : 1 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6fa882', marginBottom: 8, fontWeight: 500 }}>
              {current.category}
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 300, color: '#fff', lineHeight: 1.0, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              {current.name}
            </h2>
            <p style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-display)', marginBottom: 20 }}>
              {current.scientificName}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: st.color }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>{st.label}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 4px' }}>·</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Alimentación {current.feedingTime}</span>
            </div>
          </div>

          {/* Thumbnail strip + controls */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16, flexShrink: 0 }}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: 8 }}>
              {filtered.map((a, i) => (
                <button key={a.id} onClick={() => { setAutoplay(false); goTo(i) }}
                  style={{ width: 52, height: 52, borderRadius: 10, overflow: 'hidden', padding: 0, border: a.id === current.id ? '2px solid #4ade80' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s', opacity: a.id === current.id ? 1 : 0.5, background: 'none' }}>
                  <img src={a.thumb} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>

            {/* Progress + nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* Progress bar */}
              <div style={{ width: 120, height: 2, background: 'rgba(255,255,255,0.15)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: '#4ade80', width: `${progress}%`, transition: 'width 0.05s linear', borderRadius: 2 }} />
              </div>

              <button onClick={() => { setAutoplay(false); prev() }}
                style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                ‹
              </button>
              <button onClick={() => { setAutoplay(false); next() }}
                style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{ borderBottom: '1px solid #e8f2ec', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 52, display: 'flex', alignItems: 'center', gap: 4 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: '5px 16px', borderRadius: 100, fontSize: 12, fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.2s', letterSpacing: '0.02em',
                background: activeCategory === cat ? '#1a7a45' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#6fa882',
              }}>
              {cat}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: 12, color: '#b0cfbb' }}>
            {filtered.length} animales
          </div>
        </div>
      </div>

      {/* ── DETAIL SECTION ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>

          {/* LEFT: Info */}
          <div style={{ transition: 'opacity 0.4s', opacity: isTransitioning ? 0 : 1 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: '#1a7a45' }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1a7a45' }}>
                {current.zone}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 300, color: '#0d2b1a', margin: '0 0 4px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              {current.name}
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontStyle: 'italic', color: '#8fbfa3', marginBottom: 32 }}>
              {current.scientificName}
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#3d5c4a', maxWidth: 520, marginBottom: 36 }}>
              {current.description}
            </p>

            {/* Fact */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 24px', borderRadius: 12, background: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: 40 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>
                💡
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a34a', marginBottom: 4 }}>
                  Dato científico
                </div>
                <div style={{ fontSize: 14, color: '#166534', lineHeight: 1.6 }}>
                  {current.funFact}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#e8f2ec', borderRadius: 14, overflow: 'hidden', border: '1px solid #e8f2ec' }}>
              {[
                { label: 'Dieta', value: current.diet },
                { label: 'Vida', value: current.lifespan },
                { label: 'Peso', value: current.weight },
                { label: 'Altura', value: current.height },
              ].map(s => (
                <div key={s.label} style={{ background: '#fff', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#8fbfa3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, fontWeight: 500 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0d2b1a', fontFamily: 'var(--font-display)' }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Feeding */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a7a45' }} />
              <span style={{ fontSize: 13, color: '#4a7c5f' }}>
                <strong style={{ color: '#0d2b1a' }}>Horario de alimentación:</strong> {current.feedingTime}
              </span>
            </div>
          </div>

          {/* RIGHT: Animal list */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b0cfbb', marginBottom: 16 }}>
              Colección
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filtered.map((a, i) => {
                const active = a.id === current.id
                return (
                  <button key={a.id} onClick={() => { setAutoplay(false); goTo(i) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0',
                      borderBottom: '1px solid #e8f2ec', background: 'none', border: 'none',
                      borderBottom: '1px solid #e8f2ec',
                      cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', width: '100%',
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.paddingLeft = '8px' }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.paddingLeft = '0px' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, overflow: 'hidden', flexShrink: 0, border: active ? '2px solid #1a7a45' : '2px solid transparent', transition: 'border-color 0.2s' }}>
                      <img src={a.thumb} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: active ? 600 : 400, color: active ? '#0d2b1a' : '#3d5c4a', transition: 'color 0.2s', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {a.name}
                      </div>
                      <div style={{ fontSize: 11, color: '#8fbfa3', marginTop: 2 }}>{a.zone}</div>
                    </div>
                    <div style={{ fontSize: 11, color: '#b0cfbb', fontFamily: 'var(--font-display)', flexShrink: 0 }}>
                      {a.num}
                    </div>
                    {active && <div style={{ width: 3, height: 24, borderRadius: 2, background: '#1a7a45', flexShrink: 0 }} />}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div style={{ background: '#0d2b1a', borderTop: '1px solid #1a3a28' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { value: '280+', label: 'Especies', sub: 'en nuestro parque' },
            { value: '45 ha', label: 'Extensión', sub: 'de espacio natural' },
            { value: '12', label: 'Programas', sub: 'de conservación activos' },
          ].map((s, i) => (
            <div key={s.label} style={{ padding: '40px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 300, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 4 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e8f2ec', padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#f0faf4" />
            <path d="M16 6 C16 6 10 12 10 18 C10 21.3 12.7 24 16 24 C19.3 24 22 21.3 22 18 C22 12 16 6 16 6Z" fill="#1a7a45" />
          </svg>
          <span style={{ fontSize: 13, color: '#4a7c5f' }}>
            Zoológico Natura · Comprometidos con la conservación desde 1952
          </span>
        </div>
        <div style={{ fontSize: 12, color: '#b0cfbb' }}>Abierto todos los días · 9:00 – 18:00</div>
      </footer>
    </div>
  )
}
