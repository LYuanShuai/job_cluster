import React from "react";
import {Table} from "antd";
import {ColumnsType} from "antd/lib/table";

export interface Props {
    cols: ColumnsType<any>;
    rows: any[] | undefined
}

export interface RowItem {

}

const TableAntd: React.FC<Props> = props => {

    return (
        <div>
            <Table columns={props.cols} dataSource={props.rows}/>
        </div>
    );
}

export default TableAntd;