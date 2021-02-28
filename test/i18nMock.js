export function i18nMock(msg, replace) {
  if (!replace) return msg

  return Object.keys(replace).reduce((result, key) => {
    const template = `{${key}}`
    return result.replace(template, replace[key])
  }, msg)
}
