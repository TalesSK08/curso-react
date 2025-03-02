import './App.css'
import {TwitterFolloCard} from './TwitterFollowCard'


const users = [
    {
        userName: 'mdo',
        name: 'Toti Villa',
        isFollowing: true,
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durian',
        isFollowing: true,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,
    },
]

//la Key debe ser un identificador único

const App = () =>{
    //const addAt = (userName) => `@${userName}`

    return (
        <section className='App'>
            {/* <TwitterFolloCard 
            userName="mdo" isFollowing = {false}>
                Toti Villa
            </TwitterFolloCard>

            <TwitterFolloCard   
             userName="midudev">
                Miguel Angel Durian
            </TwitterFolloCard> */}
            {
                users.map(users => {
                    const {userName, name, isFollowing} = users
                    return (
                        <TwitterFolloCard
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFolloCard>
                    )
                })
            }
        </section>
    )
}

export {App};