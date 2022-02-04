import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
    // background: linear-gradient(
    //     90deg,
    //     #2B2B2B 5%,
    //     #171717 95%
    //     );
    //  color: #FBF8F1;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 18px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 40px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 18px;
    margin-left: 25px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Language>
                    EN    
                </Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:'gray', fontSize:'18'}} />    
                </SearchContainer>    
            </Left>
            <Center>
                <Logo>
                    Me-Commerce
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
                <MenuItem>
                    LogIn
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
    );
};

export default Navbar;
