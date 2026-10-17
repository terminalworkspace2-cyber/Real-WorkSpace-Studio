import { REPOS } from './data/repos'
// BACKGROUND LIBRARY - runs on app start, no click needed
export async function loadBackgroundLibrary() {
  const cached = localStorage.getItem('dolor-repos')
  if (cached) return JSON.parse(cached)
  // Fetch GitHub meta in background (non-blocking)
  const results = await Promise.allSettled(REPOS.map(async r => {
    try {
      const res = await fetch(`https://api.github.com/repos/${r.repo}`)
      const j = await res.json()
      return { ...r, stars: j.stargazers_count, desc: j.description, updated: j.updated_at }
    } catch { return { ...r, stars: 0, desc: '' } }
  }))
  const data = results.map(x => x.status==='fulfilled' ? x.value : null).filter(Boolean)
  localStorage.setItem('dolor-repos', JSON.stringify(data))
  localStorage.setItem('dolor-repos-at', new Date().toISOString())
  return data
}
export function getBackgroundRepos() {
  try { return JSON.parse(localStorage.getItem('dolor-repos') || '[]') } catch { return [] }
}
