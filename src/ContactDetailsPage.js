import React from 'react'
import EditIcon from 'material-ui/svg-icons/image/edit'
import TrashIcon from 'material-ui/svg-icons/action/delete'
import CheckIcon from 'material-ui/svg-icons/navigation/check'
import TextField from 'material-ui/TextField'

function TableHeader () {
  return (
    <thead>
      <tr id='headers'>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
      </tr>
    </thead>
  )
}

function TableRow (props) {
  const {startEditing, handleChange, stopEditing, idx, editIdx} = props
  const currentlyEditing = editIdx === idx
  const name = <span>{props.name}</span>
  const email = <span>{props.email}</span>
  const phone = <span>{props.phone}</span>
  const address = <span>{props.address}</span>
  const city = <span>{props.city}</span>
  const state = <span>{props.state}</span>
  const zip = <span>{props.zip}</span>
  return (
    <tr>
      <td >{ currentlyEditing ? (<TextField name={'name' + idx}onChange={e => handleChange(e, 'name', idx)} defaultValue={props.name} />) : name }</td>
      <td >{ currentlyEditing ? (<TextField name={'email' + idx} onChange={e => handleChange(e, 'email', idx)} defaultValue={props.email} />) : (email) }</td>
      <td >{ currentlyEditing ? (<TextField name={'phone' + idx} onChange={e => handleChange(e, 'phone', idx)} defaultValue={props.phone} />) : (phone) }</td>
      <td >{ currentlyEditing ? (<TextField name={'address' + idx} onChange={e => handleChange(e, 'address', idx)} defaultValue={props.address} />) : (address) }</td>
      <td >{ currentlyEditing ? (<TextField name={'city' + idx} onChange={e => handleChange(e, 'city', idx)} defaultValue={props.city} />) : (city) }</td>
      <td >{ currentlyEditing ? (<TextField name={'state' + idx} onChange={e => handleChange(e, 'state', idx)} defaultValue={props.state} />) : (state) }</td>
      <td >{ currentlyEditing ? (<TextField name={'zip' + idx} onChange={e => handleChange(e, 'zip', idx)} defaultValue={props.zip} />) : (zip) }</td>
      <td className='up-del'>{ currentlyEditing ? (<CheckIcon onClick={() => { stopEditing(idx); props.updateContact(idx) }} />) : (<EditIcon label='Update' onClick={() => startEditing(idx)} />)}</td>
      <td className='up-del'><TrashIcon label='Delete' onClick={() => props.deleteContact(idx)} /></td>
    </tr>
  )
}

function ContactsTable (props) {
  const rows = props.items.map((row, i) => {
    return <TableRow {...row} {...props} key={i} idx={i} />
  })

  return (
    <table>
      <TableHeader />
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ContactsTable
