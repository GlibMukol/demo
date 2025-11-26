type TButton = {
    onClick: () => void
    title: string
    disabled?: boolean
    children: React.ReactNode

}


const Button = (params: TButton) => {
    const { onClick, children, disabled = false } = params;
    return (
        <div className="flex m-1" title={disabled ? "Enter valid credentials" : "LogIn"}>
            <button
                onClick={() => onClick()}
                disabled={disabled}
                className="btn bg-red-700"
            >
                <div className="w-16 h-6 flex items-center justify-center">
                    {children}
                </div>
            </button>
        </div>

    )
}

export default Button