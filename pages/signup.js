import React, { useStae, useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';

import { useInput } from '../components/LoginForm';

const Signup = () => {
    const [pass, setPass] = useState('');
    const [passChk, setPassChk] = useState('');
    const [term, setTerm] = useState('');

    const [pasError, setPassError] = useState('');
    const [termError, setTermError] = useState('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if(pass !== passChk) return setPassError(true);
        if(!term) return setTermError(true);

        console.log({
            id, nick, pass, passChk, term
        })
    }, [pass, passChk, term]);

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     if(pass !== passChk) return setPassError(true);
    //     if(!term) return setTermError(true);

    //     console.log({
    //         id, nick, pass, passChk, term
    //     })
    // };

    const onChangePass = useCallback((e) => {
        setPassError(e.target.value);
    }, []);
    
    const onChangePassChk = useCallback((e) => {
        setPassError(e.target.value !== pass);
        setPassChk(e.target.value);
    }, [pass]);
    
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };
    
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">ID</label>
                        <br/>
                        <Input name="user-id" required value={id} onChange={onChangeId}/>
                    </div>
                    <div>
                        <label htmlFor="user-nick">Nickname</label>
                        <br/>
                        <Input name="user-nick" required value={nick} onChange={onChangedNick}/>
                    </div>
                    <div>
                        <label htmlFor="user-pass">Password</label>
                        <br/>
                        <Input name="user-pass" type="password" required value={pass} onChange={onChangePass}/>
                    </div>
                    <div>
                        <label htmlFor="user-pass-chk">Password Check</label>
                        <br/>
                        <Input name="user-pass-chk" type="password" required value={passChk} onChange={onChangePassChk}/>
                        {passError && <div style={{ color: 'red' }}>Please check password</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
                        Are you agree this term?
                        </Checkbox>
                        {termError && <div style={{ color: 'red' }}>You must agrre term</div>}
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </div>
                </Form>
          </AppLayout>
        </>
    );
};

export default Signup;