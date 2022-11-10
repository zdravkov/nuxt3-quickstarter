const startAt = Date.now()
let count = 0

interface PageView {
  pageview: number;
  startAt: number;
}

export default defineEventHandler((): PageView => ({
  pageview: count++,
  startAt,
}))
