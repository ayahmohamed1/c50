import { ArrowLeft, ArrowRight, Home } from 'lucide-react'

/**
 * The pair of round arrow buttons (and optional dot progress indicator)
 * seen at the bottom of every card in the reference design.
 */
export default function NavArrows({ onBack, onNext, step, total, nextLabel, showHome, onHome }) {
  return (
    <div className="w-full flex items-center justify-between mt-8">
      <button
        type="button"
        onClick={onBack}
        disabled={!onBack}
        aria-label="Go back"
        className="w-11 h-11 rounded-full bg-blush-600 text-blush-50 flex items-center justify-center shadow-md shadow-blush-700/30 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-transform"
      >
        <ArrowLeft size={18} strokeWidth={2.25} />
      </button>

      {total ? (
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all ${
                i === step ? 'w-4 h-1.5 bg-blush-700' : 'w-1.5 h-1.5 bg-blush-400'
              }`}
            />
          ))}
        </div>
      ) : showHome ? (
        <button
          type="button"
          onClick={onHome}
          aria-label="Back to start"
          className="w-10 h-10 rounded-full bg-blush-50 text-blush-700 flex items-center justify-center shadow-inner active:scale-95 transition-transform"
        >
          <Home size={16} strokeWidth={2.25} />
        </button>
      ) : null}

      <button
        type="button"
        onClick={onNext}
        disabled={!onNext}
        aria-label={nextLabel || 'Go next'}
        className="w-11 h-11 rounded-full bg-blush-600 text-blush-50 flex items-center justify-center shadow-md shadow-blush-700/30 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-transform"
      >
        <ArrowRight size={18} strokeWidth={2.25} />
      </button>
    </div>
  )
}
