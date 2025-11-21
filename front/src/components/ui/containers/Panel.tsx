import { clsx } from "clsx"

type TPanel = {
    children: React.ReactNode,
    styles?: string
}

const Panel = ({ children, styles = "" }: TPanel) => {
    return (
        <div className={clsx("flex flex-col p-2 shadow-2xl shadow-foreground/10", styles)}>
            {children}
        </div>
    )
}

export default Panel
