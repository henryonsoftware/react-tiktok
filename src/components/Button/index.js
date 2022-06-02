function Button() {
    const handleClick = () => {
        alert('Clicked!')
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button
