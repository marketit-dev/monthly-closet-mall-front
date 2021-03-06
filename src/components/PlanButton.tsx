import React from 'react';
import '../styles/main.scss';

declare global {
    interface Window {
        Thunder: any;
        $: any;
    }
}

type PlanButtonProps = {
    productId: string;
    text: string;
};

const PlanButton = ({ productId, text }: PlanButtonProps) => {
    function openThunder() {
        const { Thunder, $ } = window;
        Thunder.open('product-detail', {
            product: productId,
            productActions: ['buy-now'],
            optionSelector: 'combined',
            descriptionStyle: 'detailed',
            useFollowingNav: true,
            useReviews: true,
            useRating: true,
            onBuyNow() {
                // Default implementations...
                Thunder.open('cart', {
                    onCheckout($container: any, context: { options: { items: any } }, type: any) {
                        if (Thunder.authenticated()) {
                            Thunder.render($container, 'checkout', {
                                type,
                                items: context.options.items,
                                back: {
                                    $container,
                                    component: 'cart',
                                    options: context.options,
                                },
                            });
                        } else {
                            // 고객이 로그인 된 경우, d
                            // -> 로그인 창 오버레이 렌더링
                            Thunder.render(
                                $container,
                                'customer-login',
                                {
                                    onLogin() {
                                        // Default implementations...
                                        Thunder.render($container, 'checkout', {
                                            type,
                                            items: context.options.items,
                                            back: {
                                                $container,
                                                component: 'cart',
                                                options: context.options,
                                            },
                                        });
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
                                                Thunder.render($container, 'customer-login', {
                                                    onLogin() {
                                                        // Default implementations...
                                                        Thunder.render($container, 'checkout', {
                                                            type,
                                                            items: context.options.items,
                                                            back: {
                                                                $container,
                                                                component: 'cart',
                                                                options: context.options,
                                                            },
                                                        });
                                                    },
                                                });
                                            },
                                        });
                                    });
                                },
                            );
                        }
                    },
                });
            },
        });
    }
    return (
        <button
            className="plan-buy-button font-h5"
            onClick={() => openThunder()}
            onKeyDown={() => openThunder()}
            type="button"
        >
            {text}
        </button>
    );
};

export default PlanButton;
