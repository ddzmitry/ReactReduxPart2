import React, {Component} from 'react';
import {Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
function average(data){
return _.round(_.sum(data)/data.length)

}
export default(props) => {



    return (
       
            <td>
                <Sparklines height={50} width={180} data={props.data}
                >
                    <SparklinesLine color={props.color}/>
                    <SparklinesReferenceLine type = 'avg'/>
                </Sparklines>
                <div> {average(props.data)} {props.units}</div>
            </td>
        

    )
}
