export function FooterSection() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

                <div className="mb-10 flex items-center justify-between gap-4 max-lg:flex-wrap">
                    <div>
                        <h3 className="text-base-content mb-2 text-2xl font-semibold">Stay healthy with our newsletter</h3>
                        <p className="text-base-content/80">Get weekly health tips, wellness insights, and app updates delivered
                            to your inbox.</p>
                    </div>
                    <div className="flex gap-3">
                        <input type="email" placeholder="your@email.com" className="input max-w-sm" />
                        <button className="btn btn-primary btn-gradient">
                            <span className="icon-[tabler--mail] size-4"></span>
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="footer grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {/* Features */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Features</h4>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-base-content/80 link link-animated">Health Tracking</a></li>
                            <li><a href="#features" className="text-base-content/80 link link-animated">Meal Planning</a></li>
                            <li><a href="#features" className="text-base-content/80 link link-animated">Exercise Monitoring</a>
                            </li>
                            <li><a href="#features" className="text-base-content/80 link link-animated">Sleep Analysis</a></li>
                            <li><a href="#features" className="text-base-content/80 link link-animated">Health Reports</a></li>
                            <li><a href="#pricing" className="text-base-content/80 link link-animated">Premium Plans</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Health Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base-content/80 link link-animated">Health Articles</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Nutrition Guides</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Exercise Routines</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Wellness Blog</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Medical Insights</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Health Calculator</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base-content/80 link link-animated">Help Center</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Contact Support</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">User Guide</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Video Tutorials</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Community Forum</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Report an Issue</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base-content/80 link link-animated">About Us</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Our Mission</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Careers</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Press</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Partnerships</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Legal & Privacy</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base-content/80 link link-animated">Privacy Policy</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Terms of Service</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">HIPAA Compliance</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Data Security</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Cookie Policy</a></li>
                            <li><a href="#" className="text-base-content/80 link link-animated">Medical Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="via-primary/30 mx-auto h-px bg-gradient-to-r from-transparent to-transparent"></div>


            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8">

                <a href="#" title="HealthTracker" className="text-base-content flex items-center gap-3 text-xl font-bold">
                    <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-full">
                        <span className="icon-[tabler--activity] size-5"></span>
                    </div>
                    <span>HealthTracker</span>
                </a>


                <div className="flex items-center gap-6">

                    <div className="flex items-center gap-2">
                        <span className="badge badge-outline badge-secondary badge-lg rounded-full">
                            <span className="icon-[tabler--shield-check-filled] text-success size-4"></span>
                            HIPAA Compliant
                        </span>
                    </div>


                    <div className="text-base-content flex h-5 gap-4">
                        <a href="#" aria-label="Facebook" className="link">
                            <span className="icon-[tabler--brand-facebook] size-5"></span>
                        </a>
                        <a href="#" aria-label="Twitter" className="link">
                            <span className="icon-[tabler--brand-x] size-5"></span>
                        </a>
                        <a href="#" aria-label="Instagram" className="link">
                            <span className="icon-[tabler--brand-instagram] size-5"></span>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="link">
                            <span className="icon-[tabler--brand-linkedin] size-5"></span>
                        </a>
                        <a href="#" aria-label="YouTube" className="link">
                            <span className="icon-[tabler--brand-youtube] size-5"></span>
                        </a>
                    </div>
                </div>


                <div className="text-base-content text-base text-wrap">
                    &copy;2024
                    <a href="#" className="text-primary"> HealthTracker </a>
                    - Empowering your health journey with technology and care.
                </div>
            </div>
        </footer>
    );
}