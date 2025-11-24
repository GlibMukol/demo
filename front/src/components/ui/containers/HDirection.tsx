import { clsx } from "clsx"

type THDirection = {
    children: React.ReactNode,
    styles?: string
}

const HDirection = ({ children, styles = "" }: THDirection) => {
    return (
        <div className={clsx("relative flex items-center justify-center h-full w-full", styles)}>
            {children}
        </div>
    )
}

export default HDirection
