import { clsx } from "clsx"
import type { RefObject } from "react"

type TVDirection = {
    children: React.ReactNode,
    styles?: string,
    ref?: RefObject<HTMLDivElement | null>
}

const VDirection = ({ children, ref, styles = "", }: TVDirection) => {
    return (
        <div ref={ref} className={clsx("relative flex flex-col items-center justify-center h-full w-full", styles)}>
            {children}
        </div>
    )
}

export default VDirection
