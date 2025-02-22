import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number) {
    const timer = useRef<number | null>(null);

    return useCallback(
        (...args: Parameters<T>) => {
            if (timer.current !== null) {
                clearTimeout(timer.current);
            }
            timer.current = window.setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}