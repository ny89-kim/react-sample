import React from 'react';
import { userSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const mock = {
    nickName : 'MockNickName',
    Post : [],
    Followings : [],
    Followers : [],
    isLoggedIn : false
};



const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>NodeBird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item key="mail"><Input.Search enterButton style={{ verticalAlign: 'middle' }}/></Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                {
                    mock.isLoggedIn
                    ? <UserProfile/>
                    : <LoginForm/>
                }
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}><Link href="https://www.zerocho.com"><a target="_blank">Made by ZeroCho</a></Link></Col>
            </Row>
        </div>
    )
};


// const AppLayout = ({ children }) => {
//     return (
//         <div>
//             <Menu mode="horizontal">
//                 <Menu.Item key="home">
//                 <Link href="/">
//                     <a>NodeBird</a>
//                 </Link>
//                 </Menu.Item>
//                 <Menu.Item key="profile">
//                 <Link href="/profile">
//                     <a>Profile</a>
//                 </Link>
//                 </Menu.Item>
//                 <Menu.Item key="mail">
//                 <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
//                 </Menu.Item>
//             </Menu>
//             <Link href="/signup">
//                 <Button>SignUp</Button>
//             </Link>
//             {/* 
//                 children 은 각각 page/ index.js, profile,js, signup.js에
//                 <AppLayout>에 들어가잇는거
//                 https://eomtttttt-develop.tistory.com/186?category=873489
//              */}
//             {children}
//         </div>
//     )
// };


AppLayout.propTypes = {
    children: PropTypes.node
}

export default AppLayout;