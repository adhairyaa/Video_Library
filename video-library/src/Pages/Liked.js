import { useDataProvider } from "../Context/Reducer";
import styles from "./Pages.module.css";

export default function Liked() {
  const { state } = useDataProvider();
  const { Liked } = state;
  return (
    <div>
        <h1>Liked</h1>
        <div className={styles.Page_Wrapper}>
         You have {state.Liked.length} Video's in Liked.
         <div className={styles.Page_Wrapper_Length}> {state.Liked.length}</div>
        </div>
        <div>
        {state.Liked.map((Video)=><ul>{Video.VideoLink}</ul>)}
        </div>
        
        </div>
    
  );
}
