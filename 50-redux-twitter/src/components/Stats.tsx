import Avatar from './Avatar'
import { State, UserStats } from '../utils/types'
import { useSelector } from 'react-redux';

const Stats = () => {
    const {followers, following} = useSelector<State, UserStats>(state => state.stats)
    const name = useSelector<State, string>(state => state.user.name)
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                onClick={
                    () => {}
                }
                onContextMenu={
                    e => {
                        e.preventDefault();

                    }
                }
                >Followers: {followers}</div>
                <div
                onClick={
                    () => {}
                }
                onContextMenu={
                    e => {

                    }
                }
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats