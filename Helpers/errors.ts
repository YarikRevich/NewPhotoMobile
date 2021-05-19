const NOTAUTH_ERROR = 0;

export const IsAuthError = (e: number): boolean => {
    return e == NOTAUTH_ERROR
}