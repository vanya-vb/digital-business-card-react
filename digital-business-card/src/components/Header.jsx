import avatar from '/src/assets/avatar.png'

export default function Header() {
    return (
        <header className="header">
                <img src={avatar} alt="Avatar" className="avatar-img" />
        </header>
    )
}