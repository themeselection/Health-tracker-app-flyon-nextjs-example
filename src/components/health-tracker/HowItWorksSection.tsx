export default function HowItWorksSection() {
    return (
        <section className="bg-base-200 py-8 sm:py-16 lg:py-24" id="how-it-works">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                    <div className="mb-4">
                        <span className="badge badge-soft badge-primary rounded-full px-4 py-2">
                            <span className="icon-[tabler--route] size-4"></span>
                            Simple 3-Step Process
                        </span>
                    </div>
                    <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                        How HealthTracker
                        <span className="relative z-1 font-bold text-primary">
                            {' '}Works for You{' '}
                            <span
                                className="from-primary absolute start-0 bottom-0 -z-1 h-0.5 w-full bg-gradient-to-r to-transparent to-100% max-sm:hidden"
                                aria-hidden="true"
                            ></span>
                        </span>
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-xl">
                        Getting started with your health journey is effortless. Follow these simple steps to begin tracking,
                        analyzing, and improving your wellness with HealthTracker.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="space-y-16">
                    {/* Detailed Steps Grid */}
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Step 1 Detail */}
                        <div className="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-300">
                            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="card-body p-8">
                                    {/* Step Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-success/20 flex items-center justify-center rounded-full p-3">
                                            <span className="icon-[tabler--download] text-success size-8"></span>
                                        </div>
                                        <div className="bg-success/10 text-success rounded-full px-3 py-1 text-sm font-medium">
                                            Step 1
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base-content text-xl font-bold mb-4">Download & Quick Setup</h3>
                                    <p className="text-base-content/80 mb-6">
                                        Download HealthTracker from App Store or Google Play. Complete the 2-minute setup by adding your
                                        basic info, health goals, and preferences. Connect optional wearables for automatic tracking.
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-success size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Free download on all platforms</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-success size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">2-minute setup process</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-success size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Optional device integration</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 Detail */}
                        <div className="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-600">
                            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="card-body p-8">
                                    {/* Step Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-primary/20 flex items-center justify-center rounded-full p-3">
                                            <span className="icon-[tabler--activity] text-primary size-8"></span>
                                        </div>
                                        <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                                            Step 2
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base-content text-xl font-bold mb-4">Track Your Daily Activities</h3>
                                    <p className="text-base-content/80 mb-6">
                                        Start logging your daily activities with ease. Track steps, water intake, meals, sleep, and
                                        workouts. Use quick-log features or let the app automatically detect and record your activities.
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-primary size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">One-tap activity logging</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-primary size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Automatic detection</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-primary size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Smart reminders</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 Detail */}
                        <div className="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-900">
                            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="card-body p-8">
                                    {/* Step Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-warning/20 flex items-center justify-center rounded-full p-3">
                                            <span className="icon-[tabler--chart-line] text-warning size-8"></span>
                                        </div>
                                        <div className="bg-warning/10 text-warning rounded-full px-3 py-1 text-sm font-medium">
                                            Step 3
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base-content text-xl font-bold mb-4">Get Personalized Insights</h3>
                                    <p className="text-base-content/80 mb-6">
                                        Receive AI-powered insights about your health patterns. Get personalized recommendations, celebrate
                                        achievements, and adjust your goals based on your progress and lifestyle changes.
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-warning size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">AI-powered analytics</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-warning size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Personal recommendations</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="icon-[tabler--check] text-warning size-4 shrink-0"></span>
                                            <span className="text-base-content/70 text-sm">Progress celebrations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-1200 text-center">
                        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
                            <h3 className="text-base-content text-2xl font-semibold mb-4">
                                Ready to start your health journey?
                            </h3>
                            <p className="text-base-content/80 text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of users who have transformed their wellness with our simple 3-step process.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#" className="btn btn-primary btn-lg">
                                    <span className="icon-[tabler--download] size-5"></span>
                                    Download Now
                                </a>
                                <a href="#" className="btn btn-soft btn-primary btn-lg">
                                    <span className="icon-[tabler--video] size-5"></span>
                                    Watch Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
