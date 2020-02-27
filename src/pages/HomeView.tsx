import * as React from 'react';
import { Grid } from '@material-ui/core';
import LinkButton from '../components/LinkButton';
import mainLogo from '../assets/logo512.png';

const HomeView = () => {
    return (
        <div className="home-view">
            <Grid container className="home-main-container" justify="flex-start">
                <Grid container item xs={12} md={12} justify="center" align-items="center" direction="row">
                    <Grid
                        container
                        xs={10}
                        md={10}
                        item
                        className="home-main-content"
                        direction="column"
                        justify="center"
                        align-items="center"
                    >
                        <Grid item className="home-main-title">
                            <span className="font-body1">
                                남성들의 옷걱정 없는 세상,
                                <br />
                                월간클로젯과 간편하게.
                            </span>
                        </Grid>
                        <Grid item>
                            <span className="font-body2">
                                2주에 4벌의 옷을 마음껏
                                <br />
                                트렌디하게, 깔끔하게, 편리하게
                                <br />
                                매일 반하는 나만의 클로젯을 만나보세요
                            </span>
                        </Grid>
                        <Grid className="home-link-button">
                            <LinkButton path="/plan" text="지금 만나러 가기" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="home-plan-container">
                <Grid
                    className="home-plan"
                    container
                    item
                    xs={12}
                    md={4}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <img className="plan-image" src={mainLogo} alt="My" />
                    </Grid>
                    <Grid item className="font-body2">
                        스타일 퀴즈를 완성하세요. 당신의 사이즈와
                        <br />
                        취향에 맞는 스타일 추천이 시작됩니다.
                    </Grid>
                </Grid>
                <Grid
                    className="home-plan"
                    container
                    item
                    xs={12}
                    md={4}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <img className="plan-image" src={mainLogo} alt="My" />
                    </Grid>
                    <Grid item className="font-body2 line-height">
                        추천 아이템을 수락하면 월클박스가 문앞에!
                        <br />
                        월클박스 속 옷을 2주동안 대여하세요.
                    </Grid>
                </Grid>
                <Grid
                    className="home-plan"
                    container
                    item
                    xs={12}
                    md={4}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <img className="plan-image" src={mainLogo} alt="My" />
                    </Grid>
                    <Grid item className="font-body2">
                        옷을 반납하고 스타일퀴즈를 업데이트하면
                        <br />
                        새로운 월클박스를 만나볼 수 있어요.
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className="home-introduction-container">
                <Grid
                    className="home-plan"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="flex-start"
                    direction="column"
                >
                    <span className="font-h6">월간클로젯과 섬세하게.</span>
                    <span className="font-body1">나는 모르는 나의 스타일! 월간클로젯의 AI와 스타일리스트가</span>
                    <span className="font-body1">찾아드려요. 나의 체형과 이미지에 맞는 스타일을 발견하세요.</span>
                </Grid>
            </Grid>
            <Grid container className="home-style-container" justify="center" align-items="center" direction="column">
                <Grid container justify="center" align-items="center" className="home-style-title font-h6">
                    Rent the Style
                </Grid>
                <Grid container justify="space-around">
                    <Grid className="home-plan" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainLogo} alt="style" />
                    </Grid>
                    <Grid className="home-plan" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainLogo} alt="style" />
                    </Grid>
                    <Grid className="home-plan" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainLogo} alt="style" />
                    </Grid>
                    <Grid className="home-plan" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainLogo} alt="style" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" align-items="center" className="home-link-button">
                <LinkButton path="/plan" text="지금 시작하기" />
            </Grid>
        </div>
    );
};

export default HomeView;
