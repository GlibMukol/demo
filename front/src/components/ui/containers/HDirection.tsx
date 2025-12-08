import { clsx } from "clsx"
import type { RefObject } from "react"

type THDirection = {
    children: React.ReactNode,
    styles?: string,
    ref?: RefObject<HTMLDivElement | null>
}

const HDirection = ({ children, ref, styles = "" }: THDirection) => {
    return (
        <div ref={ref} className={clsx("opacity-100 relative flex items-center justify-center h-full w-full flex-row", styles)}>
            {children}
        </div>
    )
}

export default HDirection
