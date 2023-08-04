import React, {memo} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';

export const GroupListPage = memo(() => {
  const groupContactsState = useSelector((state: RootState) => state.contacts.groupContacts)

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
