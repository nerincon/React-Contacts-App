function getContacts () {
  try {
    return JSON.parse(window.localStorage.getItem('contact'))
  } catch (e) {
    console.error('Uh-oh! Contacts in localStorage was not valid JSON')
    return null
  }
}

function setContacts (newContact) {
  console.log('test' + newContact)
  window.localStorage.setItem('contact', JSON.stringify(newContact))
}

function addContact (newItem) {
  let contacts = getContacts()
  contacts.push(newItem)
  setContacts(contacts)
  return getContacts()
}

export {addContact, getContacts, setContacts}
