import React, { useState } from 'react'
import myorderdetailData from '../data/myorderData'
import { useParams } from 'react-router'
import slugify from 'slugify'
import BreadCrumb from './BreadCrumb'

const MyorderDetails = () => {
    
    const {name}=useParams()
    const detailsData = myorderdetailData.find((p)=>slugify(p.name)==name)
    console.log(detailsData);
    
    return (
        <>
        <BreadCrumb title="MY ORDER DETAIL" isOtherPage={true} />
        <div className="myorderdetail-card-body  col-10 col-sm-12 col-md-8 ">
                <>
                   
                    <div className="myorderdetailcard-main col-10 col-sm-12 col-md-8 p-3">
                    <h4 className='mb-4'>Order detail</h4>
                        <div className="myorderdetsils-section col-10 col-sm-12 col-md-8">
                        <div className="myorderdetail">
                            <p className='detail-title'>Order ID</p>
                            <p>{detailsData.orderId}</p>
                        </div>
                        <div className="myorderdetail">
                            <p className='detail-title'>Order time</p>
                            <p>{detailsData.orderTime}</p>
                        </div>
                        <div className="myorderdetail">
                            <p className='detail-title'>Cargo tracking number</p>
                            <p>{detailsData.cargoNumber}</p>
                        </div>
                        <div className="myorderdetail">
                            <p className='detail-title'>Status</p>
                            <p>{detailsData.status}</p>
                        </div>
                        </div>
                        <div className="myorderdetail-card col-10 col-sm-12 col-md-12 pt-4">
                            <div className="myorderdetail-card-parts">
                                <img src={detailsData.img} alt="error" className='mb-2'/>
                            </div>
                            <div className="myorderdetail-card-parts">
                                <p className='detail-title'>Name</p>
                                <p>{detailsData.name}</p>
                            </div>
                            <div className="myorderdetail-card-parts">
                                <p className='detail-title'>Price</p>
                                <p>${detailsData.price}</p>
                            </div>
                            <div className="myorderdetail-card-parts">
                                <p className='detail-title'>Count</p>
                                <p>{detailsData.count}</p>
                            </div>
                            <div className="myorderdetail-card-parts">
                                <p className='detail-title'>Subtotal</p>
                                <p>${detailsData.price*detailsData.count}</p>
                            </div>
                        </div>
                    </div>
                </>
          
        </div>
        </>

    )
}

export default MyorderDetails