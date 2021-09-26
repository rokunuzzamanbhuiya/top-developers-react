import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props)
    const { summary } = props || {}
    
    let total = 0;
    for (const dev of summary){
        total = total + parseInt(dev.salary)
    }

    return (
        <div>
            <div className="col-md-12">
                <div className="row m-2 text-center">
                    <div className="border bg-info p-5">
                        <h3>Developers<br/> Added:<br/> {summary.length}</h3>
                        <hr className="m-2" />
                        <h3>Total<br/> Expense:<br/> ${total}</h3>
                    </div>
                </div>
            </div>
            <hr className="m-2" />
            <div className="col-md-12">
                <div className="row m-2 text-center">
                {
                    summary.map( detail=> <h5 className="text-center bg-info user-img"><img className="p=5" src={detail.picture.large} alt="" /> {detail.name}</h5>)
                }
                </div>
            </div>
        </div>
    );
};

export default Summary;