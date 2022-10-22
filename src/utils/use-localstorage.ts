export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage(key: string) {
  const stringValue = localStorage.getItem(key)
  return stringValue ? JSON.parse(stringValue) : null
}
