import * as React from 'react';
import { Grid } from '@material-ui/core';
import PlanList from '../components/PlanList';
import planPhone from '../assets/plan_phone.png';
import planCoupon40 from '../assets/plan_coupon_40.png';
import planCoupon100 from '../assets/plan_coupon_100.png';

const PlanView = () => {
    return (
        <div className="plan-view">
            <Grid container className="plan-main-container">
                <PlanList />
            </Grid>
            <Grid container className="plan-info-container">
                <Grid container item xs={7} justify="center" alignItems="center">
                    <Grid container item xs={8} justify="center" direction="column" className="plan-info-text">
                        <span className="font-body2">1. 월클박스는 2주에 1회 배송됩니다.</span>
                        <span className="font-body2">2. 월클박스에는 총 4벌의 옷이 들어있습니다.</span>
                        <span className="font-body2">3. 기본 의류 구성은 바지 1개, 상의 2개, 아우터 1개입니다.</span>
                        <span className="font-body2">
                            4. 스타일리스트와의 상답을 통해 월클박스 구성을 바꿀 수 있습니다.
                        </span>
                    </Grid>
                </Grid>
                <Grid container item xs={5} justify="flex-end" className="plan-info-image-container">
                    <img className="plan-info-image" src={planPhone} alt="planPhone" />
                </Grid>
            </Grid>
            <Grid container className="plan-benefit-container" justify="center" alignItems="center">
                <Grid item xs={7} container direction="column">
                    <div className="plan-benefit-title font-h5">월클의 추가 혜택!</div>
                    <Grid container direction="row">
                        <Grid item xs>
                            <img className="plan-benefit-image" src={planCoupon40} alt="planCoupon40" />
                        </Grid>
                        <Grid item xs container justify="center" direction="column" className="plan-benefit-text">
                            <span className="font-body2">월클 박스의 상품을 구매하고 싶다면?</span>
                            <span className="font-body2">시중 판매가의 40%이상 할인가로 구매할 수 있어요.</span>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" className="plan-coupon-container">
                        <Grid item xs>
                            <img className="plan-benefit-image" src={planCoupon100} alt="planCoupon100" />
                        </Grid>
                        <Grid item xs container justify="center" direction="column" className="plan-benefit-text">
                            <span className="font-body2">배송비와 세탁비는?</span>
                            <span className="font-body2">월간클로젯 이용자라면 100% 무료배송, 무료세탁!</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default PlanView;
