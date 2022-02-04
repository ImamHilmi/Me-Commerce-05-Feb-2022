import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background: linear-gradient(
        90deg,
        #519259 5%,
        #4AA96C 95%
    );
    color: #FBF8F1;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over $50
    </Container>
    );
};

export default Announcement;
