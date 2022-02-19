import React from 'react'
import BarChartComponent from './BarChartComponent'
import ChartComponent from './ChartComponent'
import PieChartComponent from './PieChartComponent'
import TableDataComponent from './TableDataComponent'
import TodoComponent from './TodoComponent'
import { FaCommentAlt } from "react-icons/fa";


const DashComponent = () => {
    return (
        <>
            <div class="row m-3">
                <div class="col-xl-6 col-sm-6 py-2">
                    <div class="card bg-dark text-white h-100">
                        <TodoComponent />
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-danger h-100">
                        <div class="card-body bg-danger">
                            <div class="rotate">
                                <i class="fa fa-list fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Team Members</h6>
                            <input type="range" max="100" min="0" value='53' />
                            <h1 class="display-4"><img src="../images/pro.png" alt="Admin Image"></img></h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-info h-150">
                        <div class="card-body bg-info">
                            <div class="rotate">
                                <i class="fab fa-twitter fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Team Members</h6>
                            <input type="range" max="100" min="0" value='53' />

                            <h1 class="display-4"><img src="../images/pro.png" alt="Admin Image"></img></h1>


                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <TableDataComponent />

            <div class="row ">
                <div className="col-lg-4 col-md-6 col-sm-12 col-sm-offset-5 firstChild ">
                    <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className="mb-5" style={{ height: "300px", width: "100%" }}><BarChartComponent /> </div></div>
                <div className="col-lg-4 col-md-3 col-sm-12 col-sm-offset-5 secondChild">
                    <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className="mb-5" style={{ height: "300px", width: "100%" }}><ChartComponent /> </div></div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-sm-offset-5 thirdChild">
                    <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className="mb-5" style={{ height: "300px", width: "100%" }}><PieChartComponent /> </div></div>

            </div>
        </>
    )
}

export default DashComponent