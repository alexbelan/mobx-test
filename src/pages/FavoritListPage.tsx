import React, {memo, useEffect, useState} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';

export const FavoritListPage = memo(() => {
  const favoriteContactsState = useSelector((state: RootState) => state.contacts.favoriteContacts)
  const contactsState = useSelector((state: RootState) => state.contacts.contacts)
  const [contacts, setContacts] = useState<ContactDto[]>([])
  useEffect(() => {
    setContacts(() => contactsState.filter(({id}) => favoriteContactsState[0].includes(id)));
  }, [contactsState, favoriteContactsState])
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
