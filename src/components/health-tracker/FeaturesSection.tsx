export default function FeaturesSection() {
    return (
        <section className="bg-base-100 py-8 sm:py-16 lg:py-24" id="features">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                    <div className="mb-4">
                        <span className="badge badge-soft badge-primary rounded-full px-4 py-2">
                            <span className="icon-[tabler--heart-rate-monitor] size-4"></span>
                            Comprehensive Health Tracking
                        </span>
                    </div>
                    <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Everything you need to stay
                        <span className="relative z-1 font-bold text-primary">
                            {' '}healthy and active{' '}
                            <span
                                className="from-primary absolute start-0 bottom-0 -z-1 h-0.5 w-full bg-gradient-to-r to-transparent to-100% max-sm:hidden"
                                aria-hidden="true"
                            ></span>
                        </span>
                        every day
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-xl">
                        Monitor your wellness journey with intelligent tracking, personalized insights, and real-time health
                        metrics. Take control of your health with features designed by wellness experts.
                    </p>
                    <div className="flex items-center justify-center gap-1.5">
                        <a href="#" className="link link-primary link-animated text-lg font-medium">
                            Explore All Features
                        </a>
                        <span className="icon-[tabler--arrow-right] text-primary size-5"></span>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Sleep Tracking Card */}
                    <div className="card hover:border-info border-info/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-info/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-info bg-info/10 rounded-field size-12">
                                    <span className="icon-[tabler--moon-stars] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-info text-xl transition-colors duration-300">
                                Smart Sleep Tracking
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Monitor sleep stages, quality metrics, and patterns. Get personalized recommendations to improve your
                                rest and wake up refreshed every morning.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-info font-medium">
                                <span className="icon-[tabler--clock] size-4"></span>
                                <span>Auto sleep detection</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity Tracking Card */}
                    <div className="card hover:border-success border-success/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-success/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-success bg-success/10 rounded-field size-12">
                                    <span className="icon-[tabler--activity] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-success text-xl transition-colors duration-300">
                                Activity & Fitness
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Track steps, workouts, calories burned, and heart rate. Set personalized fitness goals and celebrate
                                achievements with detailed progress insights.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-success font-medium">
                                <span className="icon-[tabler--target] size-4"></span>
                                <span>Goal-based tracking</span>
                            </div>
                        </div>
                    </div>

                    {/* Nutrition & Hydration Card */}
                    <div className="card hover:border-primary border-primary/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-primary bg-primary/10 rounded-field size-12">
                                    <span className="icon-[tabler--droplet-heart] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-primary text-xl transition-colors duration-300">
                                Nutrition & Hydration
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Log meals, track water intake, and monitor calorie consumption. Get smart reminders and nutritional
                                insights to maintain optimal health.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                <span className="icon-[tabler--bell-ringing] size-4"></span>
                                <span>Smart reminders</span>
                            </div>
                        </div>
                    </div>

                    {/* Health Insights Card */}
                    <div className="card hover:border-warning border-warning/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-warning/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-warning bg-warning/10 rounded-field size-12">
                                    <span className="icon-[tabler--chart-line] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-warning text-xl transition-colors duration-300">
                                Health Insights
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Analyze trends, patterns, and correlations in your health data. Receive AI-powered insights and
                                personalized recommendations for better wellness.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-warning font-medium">
                                <span className="icon-[tabler--brain] size-4"></span>
                                <span>AI-powered analysis</span>
                            </div>
                        </div>
                    </div>

                    {/* Heart Rate Monitoring Card */}
                    <div className="card hover:border-error border-error/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-error/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-error bg-error/10 rounded-field size-12">
                                    <span className="icon-[tabler--heart-rate-monitor] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-error text-xl transition-colors duration-300">
                                Heart Rate Monitoring
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Continuous heart rate tracking during workouts and daily activities. Monitor heart health trends and
                                receive alerts for unusual patterns.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-error font-medium">
                                <span className="icon-[tabler--heart] size-4"></span>
                                <span>24/7 monitoring</span>
                            </div>
                        </div>
                    </div>

                    {/* Mindfulness & Wellness Card */}
                    <div className="card hover:border-accent border-accent/30 card-border group shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <div className="card-body">
                            <div className="avatar avatar-placeholder mb-4">
                                <div className="text-accent bg-accent/10 rounded-field size-12">
                                    <span className="icon-[tabler--brain] size-8"></span>
                                </div>
                            </div>
                            <h6 className="card-title group-hover:text-accent text-xl transition-colors duration-300">
                                Mindfulness & Wellness
                            </h6>
                            <p className="text-base-content/80 mb-4">
                                Practice meditation, breathing exercises, and stress management. Track mood patterns and mental
                                wellness with guided mindfulness sessions.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-accent font-medium">
                                <span className="icon-[tabler--peace] size-4"></span>
                                <span>Guided sessions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="icon-[tabler--shield-check] text-primary size-6"></span>
                            <span className="text-primary font-semibold">Trusted by 10,000+ users</span>
                        </div>
                        <h3 className="text-base-content text-2xl font-semibold md:text-3xl mb-4">
                            Ready to transform your health journey?
                        </h3>
                        <p className="text-base-content/80 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of users who have already improved their wellness with our comprehensive health tracking
                            platform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" className="btn btn-primary btn-lg btn-gradient">
                                <span className="icon-[tabler--rocket] size-5"></span>
                                Start Your Journey
                            </a>
                            <a href="#" className="btn btn-soft btn-primary btn-lg">
                                <span className="icon-[tabler--video] size-5"></span>
                                Watch Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
