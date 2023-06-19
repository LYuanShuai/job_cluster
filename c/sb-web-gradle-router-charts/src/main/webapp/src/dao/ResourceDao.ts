import {ee} from "../common/Common";
import axios from "axios";
import {Resource} from "../domain/Resource";

enum ResourceEvent {
    ALL = "resource.all",
    CREATE = "resource.create",
    UPDATE = "resource.update",
    UPDATE_SCRIPT = "resource.script.update"
}

interface ResourceAllParam {
    cb: (data: Resource[]) => void;
}

export interface ResourceUpdateParam {
    id: number;
    script?: string;
    name: string;
    type: string;
    env: string;
}

export interface ResourceCreateParam {
    name: string;
    type: string;
    env: string;
}

ee.on(ResourceEvent.ALL, (param: ResourceAllParam) => {
    axios.get("/resource/all").then(result => {
        console.log(result)
        param.cb(result.data)
    })
})

ee.on(ResourceEvent.UPDATE, (resource: ResourceUpdateParam, cb: () => void) => {
    console.log(resource)
    axios.post("/resource", resource)
        .then(() => {
            cb()
        })
})

ee.on(ResourceEvent.UPDATE_SCRIPT, (resource: ResourceUpdateParam, cb: () => void) => {
    console.log(resource)
    axios.post("/resource/script", resource)
        .then(() => {
            cb()
        })
})

ee.on(ResourceEvent.CREATE, (resource: ResourceCreateParam) => {
    console.log(resource)
    axios.put("/resource", resource).then(result => {
        console.log("put mzz")
    })
})

export default ResourceEvent