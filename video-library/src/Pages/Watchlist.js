import { useDataProvider } from '../Context/Reducer'
import styles from './Pages.module.css'

export default function Watchlist (){
const {state} = useDataProvider()
const {Watchlist} = state
    return(
        <div>
        <h1>Watchlist</h1>
        <div className={styles.Page_Wrapper}>
         You have {state.Watchlist.length} Video's in Watchlist.
         <div className={styles.Page_Wrapper_Length}> {state.Watchlist.length}</div>
        </div>
        <div>
        {state.Watchlist.map((Video)=><ul>{Video.VideoLink}</ul>)}
        </div>
        
        </div>
    )
}