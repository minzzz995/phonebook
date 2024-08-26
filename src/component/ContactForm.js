import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

function ContactForm() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const contactList = useSelector((state) => state.contactList);

    const addContact = (event) => {
        event.preventDefault();

        // 중복된 이름과 전화번호 확인
        const isDuplicate = contactList.some(
          (contact) => contact.name === name && contact.phoneNumber === phoneNumber
        );
        
        if (isDuplicate) {
          alert('이미 존재하는 이름과 연락처입니다.');
          return; // 중복일 경우 함수를 종료하여 추가되지 않도록 함
        }

        // dispatch는 action을 파라미터로 갖음 
        dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}});

        // 폼 입력 필드 초기화
        setName('');
        setPhoneNumber('');
    }

  return (
    // <Button>을 클릭하면 onSubmit이 작동하는데 할 때마다 페이지 새로고침 됌(리액트는 새로고침하면 안됨)
    <Form onSubmit={addContact}> 
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력하세요" value={name} onChange={(event)=>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해세요" value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>
      </Form.Group>
      {/* type="submit"이면 <Button>은 onClick이벤트가 아닌 onSubmit이벤트를 작동시킴 */}
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default ContactForm;