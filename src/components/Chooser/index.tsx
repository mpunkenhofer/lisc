import * as React from "react";
import { Realm } from "../../common/types";

interface ClassChooserProps {
    realm: Realm;
}

const ClassChooser: React.FunctionComponent<ClassChooserProps> = ({ realm }: ClassChooserProps) => {
    return (
        <button>{'Yep'}</button>
    );
}

const Chooser: React.FunctionComponent = () => {

    return (
        <div>
            {
                Object.values(Realm).map(realm => <button key={realm}>{realm}</button>)
            }
        </div>
    );
};

export default Chooser;