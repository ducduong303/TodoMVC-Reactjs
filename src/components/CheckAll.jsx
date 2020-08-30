import React from 'react';
const CheckAll = (props) => {
    const { todos, checkAll, remaining } = props
    const handleCheckALl = (event) => {
        checkAll(event)
    }
    return (
        <div className="check-all-container col-12">
            <div className="col-lg-4 col-md-4 col-sm-12 check-box">
                <input type="checkbox" className="check-all" onChange={(event) => handleCheckALl(event)}></input>
                <span> Check-all</span>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 check-box">
                <span className="text-center-2"> {todos.length} total-item</span>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 check-box">
                <span className=" text-right">{remaining()} item-left</span>
            </div>
        </div>
    )
}

export default CheckAll;