// In `c()`, the first option is always the correct one; options are shuffled at runtime.
export const c = (prompt, options, code, explain) => ({ type: 'choice', prompt, options, answer: 0, code, explain })
export const t = (prompt, answers, code, explain) => ({ type: 'type', prompt, answers: [].concat(answers), code, explain })
export const b = (prompt, answer, extra = [], explain) => ({ type: 'build', prompt, answer, extra, mono: true, explain })
// Same as b(), but for prose instead of code (no monospace font).
export const bw = (prompt, answer, extra = [], explain) => ({ type: 'build', prompt, answer, extra, explain })
export const o = (prompt, lines, explain) => ({ type: 'order', prompt, lines, explain })
export const m = (prompt, pairs) => ({ type: 'match', prompt, pairs })

export const unit = (title, level, guide, exercises) => ({ title, level, guide, exercises })
