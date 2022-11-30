export const SIMULATED_HOVER_CLASS = '__hover__'
export const SIMULATED_FOCUS_CLASS = '__focus__'
export const SIMULATED_HOCUS_CLASS = '__hocus__'

export const HOVER = `&:hover, &.${SIMULATED_HOVER_CLASS}, &.${SIMULATED_HOCUS_CLASS}`
export const FOCUS = `&:focus, &.${SIMULATED_FOCUS_CLASS}, &.${SIMULATED_HOCUS_CLASS}`
export const HOCUS = `&:hover, &:focus, &.${SIMULATED_HOVER_CLASS}, &.${SIMULATED_FOCUS_CLASS}, &.${SIMULATED_HOCUS_CLASS}`
