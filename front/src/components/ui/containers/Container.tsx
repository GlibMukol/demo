import { clsx } from "clsx"

const Container = ({ children, styles = "" }: { children: React.ReactNode, styles?: string }) => {
    return (
        <div className={clsx(
            "flex h-full justify-center items-center",
            styles
        )}>
            {children}
        </div>
    )
}

export default Container