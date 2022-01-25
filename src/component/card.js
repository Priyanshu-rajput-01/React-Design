import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faUser } from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    render() {
        return <div className="container my-4">
            <div className="">
                <div className="p-3 mb-2 bg-transparent task-kadan-card">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="kaban-profile-icon"> <FontAwesomeIcon icon={faUser} style={{ cursor: 'pointer' }}/> </div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0 d-flex">Title</h6> <span>Company Lead's Name</span>
                            </div>
                        </div>
                        <div className="kaban-badge"> <span className = "mb-2">Topic</span><svg
                        
																	style={{ color: '#ccc' }}
																	width='2rem'
																	height='2rem'
																	// styleName={{ color: 'black' }}
																	viewBox='0 0 16 16'
																	fill='currentColor'
																	xmlns='http://www.w3.org/2000/svg'>
																	<path
																		fillRule='evenodd'
																		d='M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z'
																	/>
																</svg> </div>
                    </div>
                    
                    <div className="mt-4">
                       
                        <h3 className="heading d-flex ">sub event title</h3>
                   
                        
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, magnam neque. Explicabo beatae adipisci non quod sapiente, asperiores officiis eum accusamus minima incidunt architecto eaque ducimus doloremque maxime? Placeat, fuga.</p>
                        <div className="mt-2 d-flex justify-content-between">
                            <div className="mt-3 ml-3 d-inline "> <span className="kaban-text1">Start date<span className="kaban-text2"><FontAwesomeIcon icon={faCalendar} style={{ cursor: 'pointer' }} className="float-right font-icon-kaban mx-2" /><small>11/12/2022</small></span></span></div>
                            <div className="mt-3 ml-3 d-inline"> <span className="kaban-text1">Due date<span className="kaban-text3"><FontAwesomeIcon icon={faCalendar} style={{ cursor: 'pointer' }} className="float-right font-icon-kaban mx-2" /><small>11/12/2022</small></span></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default Card;
