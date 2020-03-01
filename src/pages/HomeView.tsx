import * as React from 'react';
import { Grid } from '@material-ui/core';
import LinkButton from '../components/LinkButton';
import mainCloth1 from '../assets/main_cloth_1.png';
import mainCloth2 from '../assets/main_cloth_2.png';
import mainCloth3 from '../assets/main_cloth_3.png';
import mainCloth4 from '../assets/main_cloth_4.png';
import mainIcon1 from '../assets/main_icon_1.png';
import mainIcon2 from '../assets/main_icon_2.png';
import mainIcon3 from '../assets/main_icon_3.png';
import mainMiddle1 from '../assets/main_middle_1.png';
import mainMiddle2 from '../assets/main_middle_2.png';
import mainMiddle3 from '../assets/main_middle_3.png';

const HomeView = () => {
    return (
        <div className="home-view">
            <Grid container className="home-main-container" justify="flex-start">
                <Grid container item xs={12} md={12} justify="center" direction="row">
                    <Grid
                        container
                        xs={10}
                        md={10}
                        item
                        className="home-main-content"
                        direction="column"
                        justify="center"
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
                    <Grid item container justify="center" alignItems="center" className="plan-image-container">
                        <img className="plan-image" src={mainIcon1} alt="mainIcon1" />
                    </Grid>
                    <Grid item className="home-plan-text font-body2">
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
                    <Grid item container justify="center" alignItems="center" className="plan-image-container">
                        <img className="plan-image" src={mainIcon2} alt="mainIcon2" />
                    </Grid>
                    <Grid item className="home-plan-text font-body2">
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
                    <Grid item container justify="center" alignItems="center" className="plan-image-container">
                        <img className="plan-image" src={mainIcon3} alt="mainIcon3" />
                    </Grid>
                    <Grid item className="home-plan-text font-body2">
                        옷을 반납하고 스타일퀴즈를 업데이트하면
                        <br />
                        새로운 월클박스를 만나볼 수 있어요.
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className="home-introduction-container">
                <Grid
                    className="home-introduction-image-container"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <img className="introduction-image" src={mainMiddle1} alt="mainMiddle1" />
                </Grid>
                <Grid
                    className="home-introduction"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="flex-start"
                    direction="column"
                >
                    <Grid
                        className="home-introduction-inner"
                        container
                        item
                        justify="center"
                        alignItems="flex-start"
                        direction="column"
                    >
                        <span className="font-h6">월간클로젯과 섬세하게.</span>
                        <span className="font-body1">나는 모르는 나의 스타일! 월간클로젯의 AI와 스타일리스트가</span>
                        <span className="font-body1">찾아드려요. 나의 체형과 이미지에 맞는 스타일을 발견하세요.</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className="home-introduction-container">
                <Grid
                    className="home-introduction-image-container"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <img className="introduction-image" src={mainMiddle2} alt="mainMiddle2" />
                </Grid>
                <Grid
                    className="home-introduction"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="flex-start"
                    direction="column"
                >
                    <Grid
                        className="home-introduction-inner"
                        container
                        item
                        justify="center"
                        alignItems="flex-start"
                        direction="column"
                    >
                        <span className="font-h6">월간클로젯과 새롭게</span>
                        <span className="font-body1">월클박스에는 상의 2, 하의 1, 아우터 1벌이 들어가 있어요.</span>
                        <span className="font-body1">2주마다 만나보는 4벌의 옷, 그리고 나를 도와줄</span>
                        <span className="font-body1">스타일리스트와 함께 새로운 스타일링을 시도해보세요.</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className="home-introduction-container">
                <Grid
                    className="home-introduction-image-container"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <img className="introduction-image" src={mainMiddle3} alt="mainMiddle3" />
                </Grid>
                <Grid
                    className="home-introduction"
                    container
                    item
                    xs={6}
                    md={6}
                    justify="center"
                    alignItems="flex-start"
                    direction="column"
                >
                    <Grid
                        className="home-introduction-inner"
                        container
                        item
                        justify="center"
                        alignItems="flex-start"
                        direction="column"
                    >
                        <span className="font-h6">월간클로젯과 편리하게.</span>
                        <span className="font-body1">집에서 편하게 쇼핑하자! 무료배송, 무료세탁 혜택은 기본!</span>
                        <span className="font-body1">꽉찬 옷장 걱정 없이 새로운 쇼핑라이프를 시작하세요.</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" align-items="center" className="home-style-title">
                <span className="font-body2">월간클로젯의 스타일을 만나보고 싶다면?</span>
            </Grid>
            <Grid container className="home-style-container" justify="center" align-items="center" direction="column">
                <Grid container justify="space-around">
                    <Grid className="home-style" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainCloth1} alt="mainCloth1" />
                    </Grid>
                    <Grid className="home-style" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainCloth2} alt="mainCloth2" />
                    </Grid>
                    <Grid className="home-style" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainCloth3} alt="mainCloth3" />
                    </Grid>
                    <Grid className="home-style" container justify="center" item xs={6} md={3}>
                        <img className="style-image" src={mainCloth4} alt="mainCloth4" />
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
