type TButton = {
    onClick: () => void
    title: string
    disabled?: boolean

}

const Button = (params: TButton) => {
    const { onClick, title, disabled = false } = params;
    return (
        <div className="p-2">
            <button
                onClick={() => onClick()}
                disabled={disabled}
                className="btn bg-red-700"
            >
                {title}
            </button>
        </div>

    )
}

export default Button