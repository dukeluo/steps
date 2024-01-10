export function formatLocally(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatRelative(date: string): string {
  const diffInMs = new Date(date).getTime() - new Date().getTime()
  const minutesDiff = Math.floor(Math.abs(diffInMs) / 60000)

  if (minutesDiff < 60) {
    return `just now`
  }

  const hoursDiff = Math.floor(minutesDiff / 60)

  if (hoursDiff === 1) {
    return `1 hour ago`
  } else if (hoursDiff < 24) {
    return `${hoursDiff} hours ago`
  }

  const daysDiff = Math.floor(hoursDiff / 24)

  if (daysDiff === 1) {
    return `1 day ago`
  }

  return `${daysDiff} days ago`
}
