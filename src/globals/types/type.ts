// Use a type alias and const object to avoid non-erasable enum syntax
export type Status = 'success' | 'loading' | 'error';

export const Status = {
    SUCCESS: 'success' as Status,
    LOADING: 'loading' as Status,
    ERROR: 'error' as Status,
} as const;