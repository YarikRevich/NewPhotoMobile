import { MiddlewareAPI } from "redux"

export const authMiddleware = (store: MiddlewareAPI<any>) => (next: Function) => (action: any) => {
    return next(action)
}