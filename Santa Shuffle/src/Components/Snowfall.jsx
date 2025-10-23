import React, { useMemo, useEffect } from 'react'

const Snowfall = ({ count = 0 }) => {
  useEffect(() => {
    if (document.getElementById('snowfall-styles')) return
    const style = document.createElement('style')
    style.id = 'snowfall-styles'
    style.textContent = `
      ._sf { position:absolute; top:-5vh; will-change:transform; animation:sway var(--sway,8s) ease-in-out infinite; }
      ._fk { position:relative; display:inline-block; will-change:transform; animation:fall var(--fall,12s) linear infinite;
             color: rgba(255,255,255,var(--op,0.9));
             text-shadow: 0 0 6px rgba(255,255,255,0.7), 0 0 12px rgba(255,255,255,0.4); }
      @keyframes sway { 0%{transform:translateX(calc(var(--dr,12px)*-1))} 50%{transform:translateX(var(--dr,12px))} 100%{transform:translateX(calc(var(--dr,12px)*-1))} }
      @keyframes fall { 0%{transform:translateY(-10vh) rotate(0deg)} 100%{transform:translateY(120vh) rotate(360deg)} }
    `
    document.head.appendChild(style)
  }, [])

  const flakes = useMemo(() => Array.from({ length: count }, () => {
    const left = Math.random() * 100
    const delay = -(Math.random() * 10)
    const size = 10 + Math.random() * 18
    const fall = 8 + Math.random() * 10
    const sway = 6 + Math.random() * 6
    const drift = (Math.random() * 30 - 15)
    const op = 0.5 + Math.random() * 0.5
    const char = Math.random() < 0.5 ? '❄' : '✻'
    return { left, delay, size, fall, sway, drift, op, char }
  }), [count])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="_sf"
          style={{
            left: `${f.left}vw`,
            '--dr': `${f.drift}px`,
            '--sway': `${f.sway}s`,
            '--op': f.op,
            animationDelay: `${f.delay}s`,
          }}
        >
          <i
            className="_fk"
            style={{
              fontSize: `${f.size}px`,
              '--fall': `${f.fall}s`,
              animationDelay: `${f.delay}s`,
            }}
          >{f.char}</i>
        </span>
      ))}
    </div>
  )
}

export default Snowfall
