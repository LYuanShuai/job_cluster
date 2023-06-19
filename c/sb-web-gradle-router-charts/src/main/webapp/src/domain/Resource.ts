import {RowItem} from "../components/display/table/TableAntd";

export interface Resource extends RowItem {
    id: number;
    name: string;
    script: string;
    type: string;
    env: string;
}