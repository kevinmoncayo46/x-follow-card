import { useState } from "react";

export function XFollowCard ({ userName, name, initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassname = isFollowing
        ? 'x-followcard-button is-following'
        : 'x-followcard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='x-followcard'>
            <header className='x-followcard-header'>
                <img className='x-followcard-avatar' src={`https://unavatar.io/x/${userName}`} alt="El avatar de {userName}" />
                <div className='x-followcard-info'>
                    <strong>{name}</strong>
                    <span className='x-followcard-username'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    <span className='x-followcard-text'>{text}</span>
                    <span className="x-followcard-stopfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}