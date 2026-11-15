import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            <span className="text-[#FAA116]">B</span>log{' '}
                            <span className="text-[#FAA116]">P</span>ortfolio
                        </h2>
                        <p className="text-gray-400 text-sm mt-3">
                            Full Stack Developer 
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-[#FAA116]">Home</a></li>
                            <li><a href="/blogs" className="hover:text-[#FAA116]">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                Email: <a href="mailto:yourmail@gmail.com" className="hover:text-[#FAA116]">
                                    gomathisivagnanam07@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone: <a href="tel:+919876543210" className="hover:text-[#FAA116]">
                                    +91 7904781517
                                </a>
                            </li>
                            <li>Location: Cuddalore</li>
                        </ul>
                    </div>

                </div>

                <hr className="border-gray-700 my-6" />

                <p className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Blog Portfolio. All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer