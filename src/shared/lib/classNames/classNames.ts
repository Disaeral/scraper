type TMods = Record<string, boolean | string>

export function classNames (mainClass: string, classList: string[] = [], mods: TMods = {}): string {
  return [
    mainClass,
    ...classList.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ')
}
