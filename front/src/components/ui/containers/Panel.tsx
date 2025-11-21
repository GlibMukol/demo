import { clsx } from "clsx"

type TPanel = {
    children: React.ReactNode,
    styles?: string
}

const Panel = ({ children, styles = "" }: TPanel) => {
    return (
        <div className={clsx("flex flex-col p-2 rounded-md border ", styles)}>
            {children}
        </div>
    )
}

export default Panel
