import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

    const contactList = useSelector( (state) => state.contactList || []);
    const searchTerm = useSelector((state) => state.searchTerm);

    const filteredContacts = searchTerm 
        ? contactList.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : contactList;
        
  return (
    <div>
    <SearchBox />
    {filteredContacts.length > 0 ? (
        filteredContacts.map((item, index) => (
            <ContactItem key={index} item={item} />
        ))
    ) : (
        <div>연락처가 없습니다.</div>
    )}
</div>
  )
}

export default ContactList;