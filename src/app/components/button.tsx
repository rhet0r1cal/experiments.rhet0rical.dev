"use client"

// Component
function Button({text, url}: {text: string, url: string}){

    return(

        <p className = 'button' onClick={() => {window.open(url)}}>
            {text}
        </p>

    )

}

// Export
export default Button;