export const isNotNullish = <T>(a: T): boolean => (a !== null && a !== undefined) ?? true
