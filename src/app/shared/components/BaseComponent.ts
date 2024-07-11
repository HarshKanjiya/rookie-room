import { signal, Signal } from "@angular/core"
import { PageObject } from "../interfaces/common"

interface IBaseComponent {
    addFilter: () => void
    removeAllFilters: () => void
    getParameter: () => any
    reset: () => void
    resetPagination: () => void
}

export class BaseComponent {
    result: Signal<boolean> = signal(false)
    isLoading: Signal<boolean> = signal(false)
    pageObject = new PageObject()
}