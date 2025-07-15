'use client';

import { useState } from 'react';

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: 'Basic',
            icon: 'icon-[tabler--heart]',
            monthlyPrice: 9,
            yearlyPrice: 7,
            description: 'Perfect for individuals starting their health journey with essential tracking features.',
            buttonText: 'Get Started',
            buttonClass: 'btn-soft btn-primary',
            features: [
                'Basic activity tracking',
                'Sleep monitoring',
                'Water intake reminders',
                'Weekly health reports',
                'Email support'
            ]
        },
        {
            name: 'Pro',
            icon: 'icon-[tabler--activity]',
            monthlyPrice: 19,
            yearlyPrice: 15,
            description: 'Advanced features for serious health enthusiasts who want insights.',
            buttonText: 'Start Pro Trial',
            buttonClass: 'btn-primary',
            popular: true,
            features: [
                'Everything in Basic, plus:',
                'Advanced AI insights',
                'Heart rate zones tracking',
                'Nutrition tracking',
                'Custom workout plans',
                'Daily health scores',
                'Priority support'
            ]
        },
        {
            name: 'Premium',
            icon: 'icon-[tabler--crown]',
            monthlyPrice: 39,
            yearlyPrice: 31,
            description: 'Ultimate health optimization with personal coaching and advanced analytics.',
            buttonText: 'Go Premium',
            buttonClass: 'btn-soft btn-primary',
            features: [
                'Everything in Pro, plus:',
                'Personal health coach',
                'Advanced biomarker tracking',
                'Family sharing (up to 6 members)',
                'Telehealth consultations',
                'Custom health challenges',
                '24/7 dedicated support'
            ]
        }
    ];

    return (
        <section className="bg-base-100 py-8 sm:py-16 lg:py-24" id="pricing">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-6 text-center sm:mb-16 lg:mb-24">
                    <div className="mb-4">
                        <span className="badge badge-soft badge-primary rounded-full px-4 py-2">
                            <span className="icon-[tabler--crown] size-4"></span>
                            Flexible Pricing Plans
                        </span>
                    </div>
                    <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Choose Your
                        <span className="relative z-1 font-bold text-primary">
                            {' '}Health Journey{' '}
                            <span
                                className="from-primary absolute start-0 bottom-0 -z-1 h-0.5 w-full bg-gradient-to-r to-transparent to-100% max-sm:hidden"
                                aria-hidden="true"
                            ></span>
                        </span>
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-xl">
                        Select the perfect plan to match your wellness goals. Start free and upgrade anytime as your health
                        journey evolves.
                    </p>

                    {/* Monthly/Yearly Toggle */}
                    <div className="flex items-center justify-center gap-3">
                        <label htmlFor="pricing-toggle" className="inline-block">
                            <span className="text-base-content/80 cursor-pointer font-medium">Monthly</span>
                        </label>
                        <input
                            id="pricing-toggle"
                            name="pricing-toggle"
                            type="checkbox"
                            className="switch switch-primary"
                            checked={isYearly}
                            onChange={(e) => setIsYearly(e.target.checked)}
                        />
                        <label htmlFor="pricing-toggle" className="inline-block">
                            <span className="text-base-content/80 cursor-pointer font-medium">Yearly</span>
                            <span className="badge badge-primary badge-sm ml-2">Save 20%</span>
                        </label>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-${300 + index * 300} ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <div
                                className={`card border-2 bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative ${plan.popular ? 'border-primary shadow-xl hover:shadow-2xl' : 'border-base-content/20'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="badge badge-primary badge-lg px-6 py-2 font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`card-body gap-0 space-y-8 p-8 ${plan.popular ? 'pt-10' : ''}`}>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/20 flex items-center justify-center rounded-full p-2">
                                                <span className={`${plan.icon} text-primary size-6`}></span>
                                            </div>
                                            <h3 className="text-base-content text-2xl font-semibold">{plan.name}</h3>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-base-content/80 mb-auto text-lg font-medium">$</span>

                                            <span
                                                data-toggle-count={JSON.stringify({
                                                    target: '#pricing-toggle',
                                                    min: plan.monthlyPrice,
                                                    max: plan.yearlyPrice,
                                                })}
                                                className="text-primary text-5xl font-bold"
                                            >
                                                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-base-content/80 text-lg">/month</span>
                                        </div>
                                        <p className="text-base-content/80">{plan.description}</p>
                                    </div>

                                    <button className={`btn ${plan.buttonClass} w-full`}>{plan.buttonText}</button>

                                    <div>
                                        <p className="text-base-content mb-4 text-lg font-medium">
                                            {plan.features[0].includes('Everything') ? plan.features[0] : "What's included:"}
                                        </p>
                                        <ul className="space-y-3">
                                            {plan.features.slice(plan.features[0].includes('Everything') ? 1 : 0).map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    <span className="icon-[tabler--check] text-primary size-5 shrink-0 mt-0.5"></span>
                                                    <span className="text-base-content/80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Features & Guarantee */}
                <div className="mt-16 space-y-12">
                    {/* Money Back Guarantee */}
                    <div className="text-center">
                        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="icon-[tabler--shield-check] text-primary size-8"></span>
                                <h3 className="text-base-content text-2xl font-semibold">30-Day Money-Back Guarantee</h3>
                            </div>
                            <p className="text-base-content/80 text-lg mb-6 max-w-2xl mx-auto">
                                Try HealthTracker risk-free. If you&apos;re not completely satisfied with your health progress, get a full
                                refund within 30 days.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#" className="btn btn-primary btn-lg">
                                    <span className="icon-[tabler--download] size-5"></span>
                                    Start Free Trial
                                </a>
                                <a href="#" className="btn btn-soft btn-primary btn-lg">
                                    <span className="icon-[tabler--message] size-5"></span>
                                    Contact Sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
