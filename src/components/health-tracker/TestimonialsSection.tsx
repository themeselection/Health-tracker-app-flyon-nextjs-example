import Image from 'next/image';
export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Sarah Mitchell',
            role: 'Marketing Manager',
            age: 34,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png',
            rating: 5,
            quote: 'HealthTracker completely changed my approach to wellness. The sleep tracking helped me realize I wasn\'t getting quality rest, and the nutrition insights guided me to better eating habits. I\'ve never felt more energetic!',
            highlight: 'Lost 22 pounds in 3 months!'
        },
        {
            name: 'Mike Rodriguez',
            role: 'Software Developer',
            age: 29,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png',
            rating: 5,
            quote: 'As a busy software engineer, tracking my fitness was always hit or miss. HealthTracker\'s automatic activity detection and heart rate monitoring helped me train consistently for my first marathon. Crossed the finish line in under 4 hours!',
            highlight: 'Marathon training success'
        },
        {
            name: 'Emma Thompson',
            role: 'Teacher',
            age: 41,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png',
            rating: 5,
            quote: 'I struggled with insomnia for years. HealthTracker\'s sleep analysis revealed patterns I never noticed. By following the app\'s recommendations, I now sleep 7-8 hours consistently and wake up refreshed every morning.',
            highlight: 'Better sleep, better life'
        },
        {
            name: 'David Thompson',
            role: 'Father of 3',
            age: 38,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png',
            rating: 5,
            quote: 'The family sharing feature is incredible! My entire family uses HealthTracker now. We compete in healthy challenges, share meal plans, and support each other\'s fitness goals. It\'s brought us closer while improving our health.',
            highlight: 'Family wellness transformed'
        },

        {
            name: 'Lisa Johnson',
            role: 'Nurse',
            age: 45,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-14.png',
            rating: 5,
            quote: 'Managing my Type 2 diabetes was overwhelming until I found HealthTracker. The glucose tracking, meal logging, and activity monitoring help me maintain stable blood sugar levels. My doctor is amazed at my progress!',
            highlight: 'Diabetes management made easy'
        },
        {
            name: 'James Smith',
            role: 'Entrepreneur',
            age: 31,
            avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-15.png',
            rating: 5,
            quote: 'The mindfulness features and stress tracking opened my eyes to how chronic stress was affecting my health. The guided breathing exercises and meditation reminders have significantly improved my mental wellbeing and energy levels.',
            highlight: 'Stress reduction breakthrough'
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`icon-[tabler--star-filled] size-6 shrink-0 ${i < rating ? 'text-warning' : 'text-base-content/20'
                    }`}
            />
        ));
    };

    return (
        <section className="bg-base-200 py-8 sm:py-16 lg:py-24" id="testimonials">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-3 text-center sm:mb-16 lg:mb-24">
                    <div className="mb-4">
                        <span className="badge badge-soft badge-primary rounded-full px-4 py-2">
                            <span className="icon-[tabler--heart-handshake] size-4"></span>
                            Real Success Stories
                        </span>
                    </div>
                    <h2 className="text-base-content relative z-1 mb-4 inline-block text-2xl font-bold md:text-3xl lg:text-4xl">
                        Transform Your Health Journey
                        <span
                            className="from-primary absolute start-0 bottom-0 -z-1 h-0.5 w-full bg-gradient-to-r to-transparent to-100%"
                            aria-hidden="true"
                        ></span>
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-xl">
                        Discover how thousands of users have transformed their wellness with HealthTracker. Real stories from real
                        people achieving their health goals.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-${300 + index * 300} ${index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <div className="bg-base-100 rounded-box hover:shadow-base-300/20 h-fit space-y-4 p-6 hover:shadow transition-all duration-300">
                                {/* Star Rating */}
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                                    <div className="flex grow justify-end gap-1.5">
                                        <span className="icon-[tabler--circle-check] text-success size-5"></span>
                                        <span className="text-base-content text-sm">Verified</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-base-content text-lg font-medium">{testimonial.highlight}</h3>
                                    <p className="text-base-content/80">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <div className="avatar avatar-placeholder">
                                        <div className="size-12 rounded-full">
                                            <Image src={testimonial.avatar} alt={testimonial.name} width={42} height={42} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-base-content font-semibold">{testimonial.name}</div>
                                        <div className="text-base-content/70 text-sm">{testimonial.role}, {testimonial.age}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
                    <div className="grid gap-8 md:grid-cols-3 text-center">
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">4.9</div>
                            <div className="flex justify-center gap-1 mb-2">
                                <span className="icon-[tabler--star-filled] text-warning size-5"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5"></span>
                            </div>
                            <p className="text-base-content/80 font-medium">Average App Store Rating</p>
                            <p className="text-base-content/60 text-sm">Based on 50K+ reviews</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">89%</div>
                            <p className="text-base-content/80 font-medium">Users Report Better Health</p>
                            <p className="text-base-content/60 text-sm">Within first 90 days</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">2.4M</div>
                            <p className="text-base-content/80 font-medium">Health Goals Achieved</p>
                            <p className="text-base-content/60 text-sm">Last 12 months</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="space-y-6">
                        <h3 className="text-base-content text-2xl font-semibold md:text-3xl">
                            Ready to write your own success story?
                        </h3>
                        <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
                            Join thousands of users who have transformed their health with HealthTracker.
                            Start your journey today and see the difference in just 30 days.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" className="btn btn-primary btn-lg">
                                <span className="icon-[tabler--download] size-5"></span>
                                Start Your Transformation
                            </a>
                            <a href="#" className="btn btn-soft btn-primary btn-lg">
                                <span className="icon-[tabler--users] size-5"></span>
                                View All Success Stories
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
