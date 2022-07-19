
export const isMatchMediaMinWidth = (breakpoint: string) => {
    return window.matchMedia(`(min-width: ${breakpoint})`).matches;
}