import React from 'react'

const Lap =(props)=>{
    
    return(
        <div>
            {
                props.lap.map((lap,index)=>{
                    return(
                        <ul className='list-group list-group-flush'>
                            <h2>
                            <li key={index} className="list-group-item">
                                <span className="mr-2">min:{lap.min}</span>
                                 <span className="mr-2">sec:{lap.sec}</span>
                                <span className="mr-2">mili:{lap.mili}</span>
                            </li>
                            </h2>
                        </ul>
                    )
                })
            }
        </div>
    
    )
}
export default Lap