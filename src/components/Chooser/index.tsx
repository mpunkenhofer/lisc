import * as React from "react";
import { Realm } from "../../common/types";
import { ICONS } from "../../constants";
import "./chooser.scss"

// interface ClassChooserProps {
//     realm: Realm;
// }

// const ClassChooser: React.FunctionComponent<ClassChooserProps> = ({ realm }: ClassChooserProps) => {
//     return (
//         <button>{'Yep'}</button>
//     );
// }

const Chooser: React.FunctionComponent = () => {

    return (
        <div>
            {
                Object.values(Realm).map(realm => <button data-icon={ICONS[realm]} key={realm}>{realm}</button>)
            }
        </div>
    );
};

export default Chooser;