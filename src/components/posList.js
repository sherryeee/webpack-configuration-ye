

import React from 'react';


class PosList extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
       console.log(this.props.data.length);
        let poListData  = this.props.data || [];
        console.log(poListData)
        if(poListData.length > 0){
             poListData.map(function(item){
                return (
                    <div className="pos-item" key={item.posId}>
                        <div className="item-name">{item.posName}</div>
                        <div className="item-com-name">{item.comName}</div>
                        <div className="item-tip">
                            <div className="item-loc">{item.jobLocation}</div>
                            <div className="item-refresh">{item.postDateDesc}刷新</div>
                        </div>
                    </div>
                )
            })
        }else{
            return (
                <div> 无最近访问</div>
            )
        }
       
    }
}

export default PosList;