import Button from '../Components/Button'
import rightIcon from '../assets/icons/right-icon.svg'

export default function PricingSection() {
    return (
        <div className="w-full py-20 bg-white">
            <div className="mycontainer">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Plan
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Free Plan Card - Same as Organization */}
                    <div className="bg-white h-160 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 mt-10">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Free
                            </h3>
                            <div className="text-4xl font-bold mb-4 pt-8">
                                $0
                            </div>
                            <p className="text-gray-600">
                                Capture ideas and find them quickly
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Sync unlimited devices</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">10 GB monthly uploads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">200 MB max. note size</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Connect primary Google Calendar account</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Add due dates, reminders, and notifications to your tasks</span>
                            </li>
                        </ul>

                        <div className="text-center">
                            <Button text="Get Started" />
                        </div>
                    </div>

                    {/* Personal Plan Card - Different UI */}
                    <div className="bg-primary h-180 text-white rounded-2xl p-8 hover:shadow-xl transition-shadow pt-20">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Personal
                            </h3>
                            <div className="text-4xl font-bold text-white mb-4 pt-8">
                                $11.99
                            </div>
                            <p className="text-blue-100">
                                Keep home and family on track
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">Sync unlimited devices</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">10 GB monthly uploads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">200 MB max. note size</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">Connect primary Google Calendar account</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-white">Add due dates, reminders, and notifications to your tasks</span>
                            </li>
                        </ul>

                        <div className="text-center">
                            <Button text="Get Started" />
                        </div>
                    </div>

                    {/* Organization Plan Card - Same as Free */}
                    <div className="bg-white h-160 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 mt-10">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Organization
                            </h3>
                            <div className="text-4xl font-bold mb-4 pt-8">
                                $49.99
                            </div>
                            <p className="text-gray-600">
                                Capture ideas and find them quickly
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Sync unlimited devices</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">10 GB monthly uploads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">200 MB max. note size</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Connect primary Google Calendar account</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1"><img src={rightIcon} /></span>
                                <span className="text-gray-700">Add due dates, reminders, and notifications to your tasks</span>
                            </li>
                        </ul>

                        <div className="text-center">
                            <Button text="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}