import {Route, Switch} from "react-router-dom";

import LocationInfo from "../../component/Location/LocationInfo/LocationInfo";
import LocationList from "../../component/Location/LocationList/LocationList";


export default function LocationPage() {
    return (
        <div className='characters'>
            <div className="container">
                <Switch>
                    <Route path={'/location/:id'} component={LocationInfo}/>
                    <Route path={'/location'} render={(props) => <LocationList {...props}/>}/>

                </Switch>
            </div>
        </div>
    )
}