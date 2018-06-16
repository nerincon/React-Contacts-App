function getContacts () {
    try {
      return JSON.parse(window.localStorage.getItem('inventory'))
    } catch (e) {
      console.error('Uh-oh! Contacts in localStorage was not valid JSON')
      return null
    }
  }
  
  function setContacts (newContact) {
    window.localStorage.setItem('contact', JSON.stringify(newContact))
  }
  
  function addItem (newItem) {
    let contacts = getContacts()
    contacts.push(newItem)
    setContacts(contacts)
    return getContacts()
  }

  export {addItem, getContacts, setContacts}