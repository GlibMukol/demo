import { clsx } from "clsx"

type TVDirection = {
    children: React.ReactNode,
    styles?: string
}

const VDirection = ({ children, styles = "" }: TVDirection) => {
    return (
        <div className={clsx("relative flex flex-col items-center justify-center h-full w-full", styles)}>
            {children}
        </div>
    )
}

export default VDirection
