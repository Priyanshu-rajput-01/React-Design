import React,{ Component } from 'react';
import Card from './card';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
// import AddTask from 'AddTask';

class Kaban extends Component {
  constructor(props) {
		super(props);
		this.state = {
      deaTitle: '',
			//data
			buckets_array: [],
			tasks: {},
			bucketName: '',
			showBucketModal: false,
			remountVar: false,
			ideaId: null,
			newBucketRank: -1,

			//Helper Variables
			hasBeenFetched: false,
			bucket: '',
			priority: '',

			//Modal Show props.
			showAddModal: false,
			editModal: {},
			showEditModal: false,
			showSettings: false,
			showEditBucketModal: false,

			//Modal Assignee autocomplete array
			currentCompanyUsers: [],

			//Dragging variables for buckets.
			draggedBucketIndex: -1,
			targetBucketIndex: -1,
			isBucketDragged: false,
			isBucketEntered: false,

			//Dragging variables for tasks
			draggedTask: null,
			targetTask: null,
			isTaskDragged: false,
			isTaskEntered: false,
			draggedTaskTargetBucket: null,
			targetBucketForTask: null,

			autoSave: true,
    }

    }
  render(){
  return <div>
    <div className="kaban-tab-bg m-4" style={{width:'440px'}}>
    <div
											className='bucket-title d-flex justify-content-between mt-4 mx-2'
											>
											<div className='m-0 '>
												<h6
													id='{bucket._id}'
                          className='mx-4 my-1'
								>
													'bucket.name'
												</h6>
											</div>
											<div className='ml-3 d-flex bucket-buttons  '>
                   
                      <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} className="float-right mx-2 font-icon-kaban" size="lg"/>
                      <FontAwesomeIcon icon={faPen} style={{ cursor: 'pointer' }} className="float-right mx-2 ml-4 font-icon-kaban-edit" size="lg"/>
												
											</div>
										</div>
                    {this.props.props.map((e,td)=>(<Card/>))}
                    
      
      
      
      <div className="m-4 task-kadan-add-button p-2"
									
                  onClick={() =>
                    this.setState({
                      showAddModal: true,
                      // bucket: bucket,
                    })
                  }>
											
											Add Task
										</div>
      </div>
      
  </div>;
  }
}

export default Kaban;
