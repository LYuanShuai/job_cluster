import React, {Component} from 'react';
import EChartsReact from "echarts-for-react";

class EchartsBarBasic extends Component {
    getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        };
    }

    render() {
        return (
            <div style={{height: '600px', width: '650px'}}>
                <EChartsReact option={this.getOption()}/>
            </div>
        );
    }
}

export default EchartsBarBasic;