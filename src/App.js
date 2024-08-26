import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from "./component/ContactForm";
import ContactList from './component/ContactList';

// 1. 왼쪽에는 연락처 등록 폼, 오른쪽에는 연락처 리스트와 search창이 있음
// 2. 리스트에는 유저 이름과 전화번호를 추가할 수 있음
// 3. 리스트에 아이템이 몇 개 있는지 보임
// 4. 사용자가 유저를 이름검색으로 찾을 수 있음
function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
