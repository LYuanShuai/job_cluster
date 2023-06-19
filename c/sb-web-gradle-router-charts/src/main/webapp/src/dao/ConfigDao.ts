import {ee} from "../common/Common";

enum Event {
    QUERY = "config.query"
}

ee.on(Event.QUERY, (id: number, e: any) => {
    console.log(e == ee)
})

export default Event