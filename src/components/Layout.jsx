export default function Layout(props){
    
    const{children} =props

    const header= (
        <header>
            <h1 className="text-gradient">Fitness Program</h1>
            <p><strong>30 Workout Gym Program</strong></p>
        </header>
    )

    const footer= (
        <footer>
            <p>Built by <a href="website.netlify.app" target="_blank">Sabrina</a></p>
        </footer>
    )
    return(
        <>
        {header}
        {children}
        {footer}
        </>
    )
} 