/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
  Container,
  Form,
  DropdownButton,
} from 'react-bootstrap';
import {
  Button as MUIButton,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Cancel, AddCircle } from '@material-ui/icons';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './style.css';
function AddTask(props) {
  const [task, setTask] = useState({
    name: '',
    description: '',
    assignees: [],
    assignee: '',
    rank: '',
    bucket: '',
    start_date: '',
    due_date: '',
    progress: '',
    label_color: '#3797a4',
    priority: '',
    attachments: [],
  });
  const [uploadFiles, setUploadFiles] = useState(null);
  const [checklistName, setChecklistName] = useState('');
  const [checklist, setChecklist] = useState([]);
  useEffect(() => {
    setChecklist([]);
    setTask({
      name: '',
      description: '',
      assignees: [],
      rank: '',
      bucket: props.bucket._id,
      start_date: '',
      due_date: '',
      progress: '',
      label_color: '#3797a4',
      priority: '',
      attachments: [],
      prefilledKanban: props.ideaId,
    });
  }, [props]);

  const submitAddTask = (task) => {
    task.checklist = checklist;
    let fileData = new FormData();
    if (uploadFiles !== null) {
      for (var i = 0; i < uploadFiles.length; i++) {
        fileData.append('files', uploadFiles[i]);
      }
    } else {
      fileData = null;
    }
    setUploadFiles(null);
    props.saveFunction(task, fileData);
  };

  const handleFileUploadChange = (event) => {
    setUploadFiles(event.target.files);
  };

  const handleChecklistAdd = (event) => {
    if (event.key === 'Enter') {
      var checklist_ = checklist;

      checklist_ = [
        ...checklist,
        { name: checklistName, isChecked: false, isDisabled: true },
      ];
      setChecklist(checklist_);
      setChecklistName('');
    }
  };
  const handleChecklistEdit = (event, idx) => {
    if (event.key === 'Enter') {
      var checklist_ = [...checklist];

      checklist_[idx].name = event.target.value;
      checklist_[idx].isDisabled = true;

      setChecklist(checklist_);
      setChecklistName('');
    }
  };
  const handleEnableEditChecklist = (idx) => {
    var checklist_ = [...checklist];
    checklist_[idx].isDisabled = false;
    setChecklist(checklist_);
  };
  const handleChecklistItemDelete = (idx) => {
    var checklist_ = [...checklist];
    checklist_.splice(idx, 1);
    setChecklist(checklist_);
  };

  return (
    <Modal
      size='lg'
      centered
      show={props.visibility}
      onHide={() => props.hideModal()}>
      <div
        style={{
          padding: '30px 30px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '20px', color: '#949494' }}>
          Enter Task
        </h3>
        <svg
          onClick={props.hideModal}
          xmlns='http://www.w3.org/2000/svg'
          style={{
            height: '1.5rem',
            width: '1.5rem',
            color: '#424242',
            cursor: 'pointer',
          }}
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <form
          style={{
            margin: '0',
            padding: '0 38px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'none',
          }}>
          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
              Name*
            </label>

            <input
              type='text'
              style={{
                padding: '10px',
                borderRadius: '8px',
                boxShadow: 'inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2)',
                border: 'none',
              }}
              onChange={(e) => {
                setTask({
                  ...task,
                  name: e.target.value,
                });
              }}
              placeholder='Enter Name'
              maxLength='80'
            />
          </section>
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <small style={{ color: '#949494', fontSize: '10px' }}>
              {task.name.length}/80
            </small>
          </div>
        </form>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '0 38px',
            gap: '10px',
          }}>
          <form style={{ maxWidth: 'none' }}>
            <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
              Lane
            </label>
            <DropdownButton
              title={props.bucket.name}
              onSelect={(eventKey) => {
                setTask({ ...task, bucket: eventKey });
              }}
              variant='secondary'>
              {props.buckets
                ? props.buckets.map((bucket, idx) => (
                    <Dropdown.Item eventKey={bucket._id} key={idx}>
                      {bucket.name}
                    </Dropdown.Item>
                  ))
                : null}
            </DropdownButton>
          </form>

          <form style={{ maxWidth: 'none' }}>
            <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
              Progress
            </label>
            <DropdownButton
              title={
                task.progress === '' ? 'Select task progress' : task.progress
              }
              onSelect={(eventKey) => {
                setTask({ ...task, progress: eventKey });
              }}
              variant='secondary'>
              <Dropdown.Item eventKey='Not Started'>Not Started</Dropdown.Item>
              <Dropdown.Item eventKey='In Progress'>In Progress</Dropdown.Item>
              <Dropdown.Item eventKey='Completed'>Completed</Dropdown.Item>
            </DropdownButton>
          </form>

          <form style={{ maxWidth: 'none' }}>
            <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
              Label Colour
            </label>
            <DropdownButton
              title={
                task.label_color === '#3797a4' ? 'Default' : task.label_color
              }
              onSelect={(eventKey) => {
                setTask({ ...task, label_color: eventKey });
              }}
              variant='secondary'>
              <Dropdown.Item eventKey='Tomato'>Tomato</Dropdown.Item>
              <Dropdown.Item eventKey='MediumSeaGreen'>
                MediumSeaGreen
              </Dropdown.Item>
              <Dropdown.Item eventKey='Orange'>Orange</Dropdown.Item>
              <Dropdown.Item eventKey='DodgerBlue'>DodgerBlue</Dropdown.Item>
            </DropdownButton>
          </form>

          <form style={{ maxWidth: 'none' }}>
            <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
              Priority:
            </label>
            <DropdownButton
              title={
                task.priority === '' ? 'Select task Priority' : task.priority
              }
              onSelect={(eventKey) => {
                setTask({
                  ...task,
                  priority: eventKey,
                });
              }}
              variant='secondary'>
              <Dropdown.Item eventKey='Low'>Low</Dropdown.Item>
              <Dropdown.Item eventKey='Medium'>Medium</Dropdown.Item>
              <Dropdown.Item eventKey='High'>High</Dropdown.Item>
            </DropdownButton>
          </form>
        </section>

        <div
          style={{
            padding: '0 38px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            style={{
              display: 'flex',
              gap: '5px',
              flexDirection: 'column',
            }}>
            <label
              style={{
                fontSize: '14px',
                color: '#949494',
                margin: '0',
                width: 'auto',
              }}>
              Start Date
            </label>
            <div>
              {/* <DatePicker
                selected={task.start_date}
                onChange={(date) => {
                  setTask({ ...task, start_date: date });
                }}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  boxShadow: 'inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2)',
                  border: 'none',
                }}
              /> */}
            </div>
          </div>

          <div>
            <label
              style={{
                fontSize: '14px',
                color: '#949494',
                margin: '0',
                width: 'auto',
              }}>
              Due Date
            </label>

            <div>
              {/* <DatePicker
                minDate={task.start_date}
                selected={task.due_date}
                onChange={(date) => {
                  setTask({ ...task, due_date: date });
                }}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  boxShadow: 'inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2)',
                  border: 'none',
                }}
              /> */}
            </div>
          </div>
        </div>

        <form
          style={{
            margin: '0',
            padding: '0 38px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'none',
          }}>
          <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
            Description*
          </label>
          <textarea
            rows='2'
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
            style={{
              padding: '10px',
              borderRadius: '8px',
              boxShadow: 'inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2)',
              border: 'none',
            }}
            placeholder='Enter Description'
            required
          />
        </form>

        <form
          style={{
            margin: '0',
            padding: '0 38px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'none',
          }}>
          <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
            Attachments
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input
              type='file'
              id='files'
              multiple
              onChange={handleFileUploadChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                boxShadow: 'inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2)',
                border: 'none',
              }}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              style={{ width: '1rem', height: '1rem', color: 'red' }}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() => {
                setUploadFiles(null);
                document.getElementById('files').value = null;
              }}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
        </form>

        <form
          style={{
            margin: '0',
            padding: '0 38px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'none',
          }}>
          <label style={{ fontSize: '14px', color: '#949494', margin: '0' }}>
            Checklist
          </label>
        </form>
        {checklist
          ? checklist.map((item, idx) => (
              <Row key={idx}>
                <Col xs={2} style={{ paddingLeft: '69px' }}>
                  <div className='d-flex h-100 align-items-center'>
                    <Cancel
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => {
                        handleChecklistItemDelete(idx);
                      }}
                    />
                  </div>
                </Col>

                {item.isDisabled ? (
                  <Col
                    className='pl-2'
                    style={{ textAlign: 'left', wordBreak: 'break-all' }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.isChecked}
                          name='add'
                          onChange={() => {
                            var checklist_ = [...checklist];
                            checklist_[idx].isChecked = !checklist_[idx]
                              .isChecked;
                            setChecklist(checklist_);
                          }}
                        />
                      }
                      label={item.name}
                      style={
                        checklist[idx].isChecked
                          ? { textDecoration: 'line-through' }
                          : {}
                      }
                    />
                  </Col>
                ) : (
                  <Col className='pl-2'>
                    <TextField
                      placeholder='Add an item'
                      style={{ width: '90%' }}
                      onKeyDown={(e) => handleChecklistEdit(e, idx)}
                      defaultValue={item.name}
                      onChange={(event) => {
                        checklist[idx].name = event.target.value;
                        setChecklist(checklist);
                      }}
                      inputProps={{ maxLength: 60 }}
                    />
                  </Col>
                )}
                {item.isDisabled ? (
                  <Col xs={2}>
                    <IconButton
                      style={{ height: '30px', width: '30px' }}
                      onClick={() => handleEnableEditChecklist(idx)}>
                      <EditIcon />
                    </IconButton>
                  </Col>
                ) : (
                  ''
                )}
              </Row>
            ))
          : ''}
        <Row>
          <Col xs={2} className='pl-5 text-center'>
            <AddCircle style={{ color: '#888DFF' }} />
          </Col>
          <Col className='pl-2'>
            <TextField
              placeholder='Add an item'
              style={{ width: '90%' }}
              onKeyDown={handleChecklistAdd}
              value={checklistName}
              onChange={(event) => {
                setChecklistName(event.target.value);
              }}
              inputProps={{ maxLength: 60 }}
            />
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '20px 38px 38px 38px',
          flexDirection: 'row-reverse',
        }}>
        <button
          style={{
            border: 'none',
            color: '#fff',
            backgroundColor: `
            ${
              task.name === '' || task.description === ''
                ? '#949494'
                : '#888dff'
            }
          `,
            padding: '8px 16px',
            borderRadius: '8px',
          }}
          onClick={() => {
            submitAddTask(task);
          }}
          disabled={task.name === '' || task.description === ''}>
          Add Task
        </button>
      </div>
    </Modal>
  );
}

export default AddTask;
