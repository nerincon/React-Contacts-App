import React from 'react'


function TableHeader () {
    return (
      <thead>
        <tr>
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
  
  function TableRow (props, idx) {
    return (
      <tr key={idx}>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zip}</td>
      </tr>
    )
  }
  
  function ContactsTable (props) {
    const rows = props.items.map(TableRow)
  
    return (
      <table>
        <TableHeader />
        <tbody>{rows}</tbody>
      </table>
    )
  }

  export default ContactsTable