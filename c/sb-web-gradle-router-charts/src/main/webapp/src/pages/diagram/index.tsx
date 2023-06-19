import React, {useState} from "react";
import {ee} from "../../common/Common";
import Event from "../../dao/ConfigDao";

const Config: React.FC = () => {
    let [configList, setConfigList] = useState()

    ee.emit(Event.QUERY, 1, ee);

    return (
        <div>
            This is the real config page!
        </div>
    );
};

export default Config