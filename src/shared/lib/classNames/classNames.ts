type TMods = Record<string, boolean | string | undefined>

export function classNames (mainClass: string, classList: Array<string | undefined> = [], mods: TMods = {}): string {
    return [
        mainClass,
        ...classList.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ')
}
