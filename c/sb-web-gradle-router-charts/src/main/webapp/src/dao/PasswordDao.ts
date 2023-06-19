import {Password} from "../domain/Password";
import {ee} from '../common/Common';
import {Resource} from "../domain/Resource";

enum PasswordEvent {
    ALL = "password.all",
    CREATE = "password.create",
    UPDATE = "password.update",
    UPDATE_SCRIPT = "password.script.update"
}interface ResourceAllParam {
    cb: (data: Resource[]) => void;
}

export interface PasswordUpdateParam {
    id: number;
    script?: string;
    name: string;
    type: string;
    env: string;
}

export interface PasswordCreateParam {
    name: string;
    type: string;
    env: string;
}

export let getAll = (): Password[] => {
    return []
}

ee.on("pwd.getAll", (e : any) => {
    console.log(e == ee)
})

export default PasswordEvent;