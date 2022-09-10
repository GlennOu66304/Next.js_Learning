import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div >
            <h1 className={headerStyles.title}>
                <span>Web Dev</span> news

                </h1>
            <p className={headerStyles.description}>
                Keep up with the latest web news
            </p>
       </div>
    )
}

export default Header
