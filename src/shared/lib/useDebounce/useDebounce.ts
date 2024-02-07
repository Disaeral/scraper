import { useEffect, useRef } from 'react'
import { isNotNullish } from '../isNotNullish/isNotNullish'

export function useDebouncedCallback<T extends any[]> (
    callback: (...args: T) => void,
    wait: number = 500
): (...args: T) => void {
    // track args & timeout handle between calls
    const argsRef = useRef<T>()
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    const cleanup = (): void => {
        if (timeout.current !== undefined || timeout.current !== null) {
            clearTimeout(timeout.current)
        }
    }

    // make sure our timeout gets cleared if
    // our consuming component gets unmounted
    useEffect(() => cleanup, [])

    return function debouncedCallback (...args: T) {
        // capture latest args
        argsRef.current = args

        // clear debounce timer
        cleanup()

        // start waiting again
        timeout.current = setTimeout(() => {
            if (isNotNullish(argsRef.current) && Array.isArray(argsRef.current)) {
                callback(...argsRef.current)
            }
        }, wait)
    }
}
