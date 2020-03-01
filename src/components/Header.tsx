import React from 'react';
import { observer } from 'mobx-react';
import '../styles/main.scss';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const SideBar = () => {
    const openThunder = () => {
        const { Thunder, $ } = window;
        if (Thunder.authenticated()) {
            Thunder.open('customer-dashboard');
        } else {
            // 고객이 로그인 된 경우, d
            // -> 로그인 창 오버레이 렌더링
            Thunder.open(
                'customer-login',
                {
                    onLogin: function onLogin() {
                        // Default implementations...
                        Thunder.open('customer-dashboard');
                    },
                },
                function() {
                    // 오버레이 렌더링이 끝나면 콜백 함수에서
                    const loginBody = $('.thunder--login-form-wrapper'); // 컴포넌트가 렌더링된 DOM 컨테이너 (jQuery Object)
                    // 여기서 jQuery 함수 등을 이용해,
                    // 가입 페이지로 보내는 버튼 등을 넣으시면 됩니다.
                    loginBody.append('<button id="customer-register">가입하기</button>');
                    $('#customer-register').click(function() {
                        Thunder.open('customer-register', {
                            onRegister() {
                                // Default implementations...
                                Thunder.open('customer-login', {
                                    onLogin: function onLogin() {
                                        // Default implementations...
                                        Thunder.open('customer-dashboard');
                                    },
                                });
                            },
                        });
                    });
                },
            );
        }
    };
    return (
        <Grid className="header" container alignItems="center" justify="flex-start">
            <Grid item xs={3} md={3} container alignItems="center" justify="center">
                <Link to="/home">
                    <span className="font-h3">월간클로젯</span>
                </Link>
            </Grid>
            <Grid item xs={7} md={7} className="header-category" container justify="flex-start" align-items="center">
                <Grid item xs={2} container justify="center">
                    <Link to="/story">
                        <span className="font-h6">Story</span>
                    </Link>
                </Grid>
                <Grid item xs={2} container justify="center">
                    <Link to="/guide">
                        <span className="font-h6">Guide</span>
                    </Link>
                </Grid>
                <Grid item xs={2} container justify="center">
                    <Link to="/plan">
                        <span className="font-h6">Plan</span>
                    </Link>
                </Grid>
                <Grid item xs={2} container justify="center">
                    <Link to="/faq">
                        <span className="font-h6">FAQ</span>
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={2} md={2} className="user-info" container justify="flex-end" align-items="center">
                <Grid item xs={2} container justify="center">
                    <button type="button" onClick={() => openThunder()}>
                        <i className="fas fa-user" />
                    </button>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default observer(SideBar);
