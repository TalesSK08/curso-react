import './App.css'
import { useState } from 'react';

const TwitterFolloCard = ({children, userName, initialIsFollowing}) =>{
    //console.log(isFollowing);

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo':'Seguir';
    const buttonClasName = isFollowing ?
    'tw-followCard-button is-following':
    'tw-followCard-button'
    const handleClick = () =>{
        return setIsFollowing(!isFollowing)
    }

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="Hombre con barba en una cafeteria" src={`https://unavatar.io/github/${userName}`}></img>

            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClasName} onClick={(handleClick)}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejas de seguir</span>
            </button>
        </aside>
    </article>
    )
}

export {TwitterFolloCard};