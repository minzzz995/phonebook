import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SEARCH_TERM',
            payload: searchTerm
        });
    };

    return (
        <Form onSubmit={handleSearch}>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
