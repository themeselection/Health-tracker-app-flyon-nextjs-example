export default function HeroSection() {
    return (
        <main className="pt-40 pb-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:px-8">


                <div className="flex max-w-4xl flex-col items-center gap-8 text-center">

                    <div
                        className="bg-success/10 border-success/30 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 flex w-fit items-center gap-2.5 rounded-full border px-4 py-2">
                        <span className="badge badge-success shrink-0 rounded-full">
                            <span className="icon-[tabler--heart-filled] size-3"></span>
                        </span>
                        <span className="text-base-content/80">Join 100K+ users tracking their wellness journey</span>
                    </div>


                    <h1
                        className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-300 text-5xl leading-[1.15] font-bold text-balance max-md:text-3xl lg:text-6xl">
                        <span className="text-base-content">Your Health, </span>
                        <span className="relative z-1">
                            <span className="from-success to-primary bg-linear-to-r bg-clip-text text-transparent">Perfectly
                                Tracked</span>
                            <span
                                className="from-success/30 absolute start-0 -bottom-2 -z-1 h-1.5 w-full rounded-full bg-linear-to-r to-transparent to-98%"></span>
                        </span>
                        <br />
                        <span className="text-base-content">Every Day 🌟</span>
                    </h1>


                    <p
                        className="text-base-content/80 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-600 text-lg max-w-2xl">
                        Monitor your sleep patterns, track water intake, count calories, and measure daily activity.
                        Get personalized insights to achieve your wellness goals with our intelligent health companion.
                    </p>


                    <div
                        className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-900 flex items-center justify-center gap-4 max-md:flex-col">
                        <a href="#"
                            className="rounded-field shadow-base-300/20 flex items-center gap-4 bg-black px-6 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                            <span className="flex items-center gap-4">
                                <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/cta/apple-icon.png"
                                    alt="App Store" className="w-6" />
                                <span className="flex flex-col items-start text-white/90">
                                    <span className="text-xs">Download on the</span>
                                    <span className="font-medium">App Store</span>
                                </span>
                            </span>
                        </a>

                        <a href="#"
                            className="rounded-field shadow-base-300/20 flex items-center gap-4 bg-black px-6 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                            <span className="flex items-center gap-4">
                                <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/cta/google-play-icon.png"
                                    alt="Google Play" className="w-7" />
                                <span className="flex flex-col items-start text-white/90">
                                    <span className="text-xs">Get it on</span>
                                    <span className="font-medium">Google Play</span>
                                </span>
                            </span>
                        </a>
                    </div>


                    <div
                        className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-1200 flex items-center gap-4">
                        <div className="avatar-group pull-up -space-x-5">
                            <div className="tooltip">
                                <div className="tooltip-toggle avatar">
                                    <div className="w-12">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                                    </div>
                                </div>
                                <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span className="tooltip-body">Sarah M. - Lost 15 lbs</span>
                                </span>
                            </div>
                            <div className="tooltip">
                                <div className="tooltip-toggle avatar">
                                    <div className="w-12">
                                        <img src="https://i.pravatar.cc/100?img=2" alt="User" />
                                    </div>
                                </div>
                                <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span className="tooltip-body">Mike R. - Improved sleep quality</span>
                                </span>
                            </div>
                            <div className="tooltip">
                                <div className="tooltip-toggle avatar">
                                    <div className="w-12">
                                        <img src="https://i.pravatar.cc/100?img=3" alt="User" />
                                    </div>
                                </div>
                                <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span className="tooltip-body">Emma L. - Better hydration habits</span>
                                </span>
                            </div>
                            <div className="tooltip cursor-default">
                                <div className="tooltip-toggle avatar avatar-placeholder">
                                    <div className="bg-success text-white w-12 text-xs">
                                        <span>50K+</span>
                                    </div>
                                </div>
                                <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span className="tooltip-body">50K+ healthy users</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-start">
                            <div className="flex items-center gap-0.5">
                                <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                            </div>
                            <span className="text-base-content text-sm">4.9/5 from 50K+ reviews</span>
                        </div>
                    </div>
                </div>


                <div
                    className="motion-preset-expand motion-duration-900 motion-delay-1500 motion-opacity-in-0 w-full max-w-6xl relative">

                    <div
                        className="from-success/20 to-primary/20 absolute inset-0 bg-linear-to-br rounded-3xl blur-3xl opacity-30">
                    </div>


                    <div className="relative flex items-center justify-center min-h-96">


                        <div
                            className="motion-preset-slide-up-md motion-duration-800 motion-opacity-in-0 motion-delay-1800 absolute start-4 top-8 max-sm:start-2 sm:start-8 lg:start-16">
                            <div className="card shadow-lg bg-white/90 backdrop-blur w-48 max-sm:w-40">
                                <div className="card-body p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-info/20 flex items-center justify-center rounded-full p-2">
                                            <span className="icon-[tabler--moon-filled] text-info size-5"></span>
                                        </div>
                                        <div>
                                            <h3 className="text-info text-2xl font-bold">7h 42m</h3>
                                            <p className="text-base-content/60 text-sm">Sleep Quality</p>
                                        </div>
                                    </div>
                                    <div className="badge badge-soft badge-info badge-sm mt-2">
                                        <span className="icon-[tabler--trending-up] size-3 mr-1"></span>
                                        +15% vs last week
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="motion-preset-slide-up-md motion-duration-800 motion-opacity-in-0 motion-delay-2100 absolute end-4 top-12 max-sm:end-2 sm:end-8 lg:end-16">
                            <div className="card shadow-lg bg-white/90 backdrop-blur w-48 max-sm:w-40">
                                <div className="card-body p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/20 flex items-center justify-center rounded-full p-2">
                                            <span className="icon-[tabler--droplet-filled] text-primary size-5"></span>
                                        </div>
                                        <div>
                                            <h3 className="text-primary text-2xl font-bold">2.3L</h3>
                                            <p className="text-base-content/60 text-sm">Water Today</p>
                                        </div>
                                    </div>
                                    <div className="progress progress-primary progress-sm mt-2">
                                        <div className="progress-bar w-3/4"></div>
                                    </div>
                                    <p className="text-xs text-base-content/50 mt-1">Goal: 3L</p>
                                </div>
                            </div>
                        </div>


                        <div
                            className="motion-preset-slide-up-md motion-duration-800 motion-opacity-in-0 motion-delay-2400 absolute start-8 bottom-16 max-sm:start-4 lg:start-20">
                            <div className="card shadow-lg bg-white/90 backdrop-blur w-48 max-sm:w-40">
                                <div className="card-body p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-warning/20 flex items-center justify-center rounded-full p-2">
                                            <span className="icon-[tabler--flame] text-warning size-5"></span>
                                        </div>
                                        <div>
                                            <h3 className="text-warning text-2xl font-bold">1,847</h3>
                                            <p className="text-base-content/60 text-sm">Calories Burned</p>
                                        </div>
                                    </div>
                                    <div className="badge badge-soft badge-warning badge-sm mt-2">
                                        Daily Goal: 2,000
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="motion-preset-slide-up-md motion-duration-800 motion-opacity-in-0 motion-delay-2700 absolute end-8 bottom-20 max-sm:end-4 lg:end-20">
                            <div className="card shadow-lg bg-white/90 backdrop-blur w-48 max-sm:w-40">
                                <div className="card-body p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-success/20 flex items-center justify-center rounded-full p-2">
                                            <span className="icon-[tabler--walk] text-success size-5"></span>
                                        </div>
                                        <div>
                                            <h3 className="text-success text-2xl font-bold">9,432</h3>
                                            <p className="text-base-content/60 text-sm">Steps Today</p>
                                        </div>
                                    </div>
                                    <div className="badge badge-soft badge-success badge-sm mt-2">
                                        <span className="icon-[tabler--check] size-3 mr-1"></span>
                                        Goal Achieved!
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="motion-preset-fade-md motion-duration-1000 motion-delay-3000 z-10">
                            <div className="mockup-phone">
                                <div className="mockup-phone-camera !top-1.5"></div>
                                <div className="mockup-phone-display bg-gradient-to-b from-white to-gray-50">
                                    <div className="h-142 w-80 p-6">

                                        <div className="flex justify-between items-center mb-6 text-black">
                                            <span className="text-sm font-medium">9:41</span>
                                            <div className="flex items-center gap-1">
                                                <span className="icon-[tabler--wifi] size-4"></span>
                                                <span className="icon-[tabler--battery-3] size-4"></span>
                                            </div>
                                        </div>


                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-gray-800 mb-2">HealthTracker</h2>
                                            <p className="text-sm text-gray-600"> Today&apos;s Progress</p>
                                        </div>


                                        <div className="flex justify-center mb-8">
                                            <div className="relative w-32 h-32">
                                                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">

                                                    <circle cx="60" cy="60" r="45" stroke="#e5e7eb" strokeWidth="6"
                                                        fill="none" />
                                                    <circle cx="60" cy="60" r="35" stroke="#e5e7eb" strokeWidth="6"
                                                        fill="none" />
                                                    <circle cx="60" cy="60" r="25" stroke="#e5e7eb" strokeWidth="6"
                                                        fill="none" />


                                                    <circle cx="60" cy="60" r="45" stroke="#10b981" strokeWidth="6"
                                                        fill="none" strokeDasharray="283" strokeDashoffset="85"
                                                        strokeLinecap="round" />
                                                    <circle cx="60" cy="60" r="35" stroke="#3b82f6" strokeWidth="6"
                                                        fill="none" strokeDasharray="220" strokeDashoffset="55"
                                                        strokeLinecap="round" />
                                                    <circle cx="60" cy="60" r="25" stroke="#f59e0b" strokeWidth="6"
                                                        fill="none" strokeDasharray="157" strokeDashoffset="31"
                                                        strokeLinecap="round" />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-lg font-bold text-gray-800">94%</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="bg-white/80 backdrop-blur rounded-xl p-3 shadow-sm">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="icon-[tabler--heart] text-red-500 size-4"></span>
                                                    <span className="text-xs text-gray-600">Heart Rate</span>
                                                </div>
                                                <p className="text-lg font-bold text-gray-800">72 bpm</p>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur rounded-xl p-3 shadow-sm">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="icon-[tabler--moon] text-indigo-500 size-4"></span>
                                                    <span className="text-xs text-gray-600">Sleep</span>
                                                </div>
                                                <p className="text-lg font-bold text-gray-800">7h 42m</p>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur rounded-xl p-3 shadow-sm">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="icon-[tabler--droplet] text-blue-500 size-4"></span>
                                                    <span className="text-xs text-gray-600">Water</span>
                                                </div>
                                                <p className="text-lg font-bold text-gray-800">2.3L</p>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur rounded-xl p-3 shadow-sm">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="icon-[tabler--walk] text-green-500 size-4"></span>
                                                    <span className="text-xs text-gray-600">Steps</span>
                                                </div>
                                                <p className="text-lg font-bold text-gray-800">9,432</p>
                                            </div>
                                        </div>


                                        <div className="text-center">
                                            <button className="btn btn-success btn-sm rounded-full px-6">
                                                <span className="icon-[tabler--plus] size-4"></span>
                                                Log Activity
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-3300 flex flex-wrap justify-center gap-8 text-center max-w-4xl">
                    <div className="flex flex-col items-center gap-2">
                        <div className="bg-success/20 flex items-center justify-center rounded-full p-3">
                            <span className="icon-[tabler--activity] text-success size-6"></span>
                        </div>
                        <h3 className="font-semibold">Activity Tracking</h3>
                        <p className="text-sm text-base-content/70">Monitor steps, workouts, and daily movement</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="bg-info/20 flex items-center justify-center rounded-full p-3">
                            <span className="icon-[tabler--moon] text-info size-6"></span>
                        </div>
                        <h3 className="font-semibold">Sleep Analysis</h3>
                        <p className="text-sm text-base-content/70">Track sleep patterns and quality metrics</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="bg-primary/20 flex items-center justify-center rounded-full p-3">
                            <span className="icon-[tabler--droplet] text-primary size-6"></span>
                        </div>
                        <h3 className="font-semibold">Hydration Goals</h3>
                        <p className="text-sm text-base-content/70">Stay hydrated with smart reminders</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="bg-warning/20 flex items-center justify-center rounded-full p-3">
                            <span className="icon-[tabler--flame] text-warning size-6"></span>
                        </div>
                        <h3 className="font-semibold">Calorie Counter</h3>
                        <p className="text-sm text-base-content/70">Track nutrition and calorie intake</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
