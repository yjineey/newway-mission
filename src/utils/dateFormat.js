/**
 * 날짜 포맷 유틸리티
 */

/**
 * 날짜를 "yyyy.MM.dd" 형식으로 포맷
 */
export const formatDate = (date) => {
  if (!date) return ''
  
  const d = date instanceof Date ? date : new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  
  return `${year}.${month}.${day}`
}

/**
 * 날짜를 "yyyy년 MM월 dd일" 형식으로 포맷
 */
export const formatDateKorean = (date) => {
  if (!date) return ''
  
  const d = date instanceof Date ? date : new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  
  return `${year}년 ${month}월 ${day}일`
}

/**
 * 날짜를 "MM/dd HH:mm" 형식으로 포맷
 */
export const formatDateTime = (date) => {
  if (!date) return ''
  
  const d = date instanceof Date ? date : new Date(date)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  
  return `${month}/${day} ${hours}:${minutes}`
}

/**
 * 상대 시간 표시 (예: "5분 전", "2시간 전")
 */
export const formatRelativeTime = (date) => {
  if (!date) return ''
  
  const d = date instanceof Date ? date : new Date(date)
  const now = new Date()
  const diff = now - d
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 7) {
    return formatDate(d)
  } else if (days > 0) {
    return `${days}일 전`
  } else if (hours > 0) {
    return `${hours}시간 전`
  } else if (minutes > 0) {
    return `${minutes}분 전`
  } else {
    return '방금 전'
  }
}

