import * as React from 'react';
import { Grid } from '@material-ui/core';
import PlanButton from './PlanButton';
import planBox1 from '../assets/plan_box_1.png';
import planBox2 from '../assets/plan_box_2.png';
import planBox4 from '../assets/plan_box_4.png';
import planBoxPremium from '../assets/plan_box_premium.png';
import commingImage from '../assets/plan_comming_soon.png';

const PlanView = () => {
    const PlanList = [
        { title: '2주 이용권', productId: 'ME3Z6MP7U4TW', planDesc: '49,000원/2주', image: planBox1 },
        { title: '1달 이용권', productId: 'ME3Z6MP7U4TW', planDesc: '89,000원/1달', image: planBox2 },
        { title: '2달 이용권', productId: 'ME3Z6MP7U4TW', planDesc: '179,000원/2달', image: planBox4 },
    ];
    const CommingSoonPlanList = [
        {
            title: '프리미엄 2주 이용권',
            productId: 'ME3Z6MP7U4TW',
            planDesc: '89,000원/2주',
            image: planBoxPremium,
            commingImage,
        },
    ];
    return (
        <Grid container item spacing={5} justify="center" className="plan-list-container">
            {PlanList.map(plan => {
                return (
                    <Grid item className="plan-item-wrapper" xs={6} md={3}>
                        <Grid
                            className="plan-item-container"
                            item
                            container
                            alignItems="center"
                            direction="column"
                            justify="flex-start"
                        >
                            <div className="plan-item-title font-body1">{plan.title}</div>
                            <Grid container justify="center" alignItems="center" className="plan-item-image-container">
                                <img className="plan-item-image" src={plan.image} alt="mainMiddle2" />
                            </Grid>
                            <div className="plan-item-desc font-body1">{plan.planDesc}</div>
                            <PlanButton productId={plan.productId} text="구매하러 가기" />
                        </Grid>
                    </Grid>
                );
            })}
            {CommingSoonPlanList.map(plan => {
                return (
                    <Grid item className="plan-item-wrapper" xs={6} md={3}>
                        <Grid
                            className="plan-comming-item-container"
                            item
                            container
                            alignItems="center"
                            direction="column"
                            justify="flex-start"
                        >
                            <div className="plan-item-title font-body1">{plan.title}</div>
                            <Grid container justify="center" alignItems="center" className="plan-item-image-container">
                                <img className="plan-item-image" src={plan.image} alt="mainMiddle2" />
                            </Grid>
                            <div className="plan-item-desc font-body1">{plan.planDesc}</div>
                            <div className="plan-item-comming-container">
                                <img className="plan-item-comming" src={plan.commingImage} alt="commingImage" />
                            </div>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default PlanView;
