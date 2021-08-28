import {Route, Switch} from "react-router-dom";

import CharacterInfo from "../../component/Characters/CharacterInfo/CharacterInfo";
import CharactersList from "../../component/Characters/CharactersList/CharactersList";


export default function CharacterPage() {
    return (
        <div className='characters'>
            <div className="container">
                <Switch>
                    <Route path={'/character/:id'} component={CharacterInfo}/>
                    <Route path={'/character'} render={(props) => <CharactersList {...props}/>}/>

                </Switch>
            </div>
        </div>
    )
}