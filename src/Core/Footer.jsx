import React from 'react';
import { ArrowRight, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#0A0A0A66] text-white pt-24 mt-20 pb-8 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col">
                <div className="absolute -top-[5%] left-0 w-full h-full flex justify-center items-start overflow-hidden opacity-60 md:opacity-100 scale-75 md:scale-100 origin-top">
                    <svg width="614" height="264" viewBox="0 0 614 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.20822 239.459H29.7612L84.4475 20.0789H59.8945L65.1027 0H163.315L158.107 20.0789H133.554L78.8673 239.459H103.42L98.2121 259.538H0L5.20822 239.459Z" fill="white" />
                        <path d="M142.087 264C133.406 264 126.71 261.645 121.998 256.935C117.286 252.225 114.93 246.524 114.93 239.831C114.93 237.104 115.302 233.882 116.046 230.163C118.03 222.479 121.874 216.406 127.578 211.944C133.53 207.234 140.723 204.879 149.155 204.879C157.835 204.879 164.532 207.358 169.244 212.315C173.956 217.025 176.312 222.727 176.312 229.42C176.312 232.146 175.94 235.369 175.196 239.087C173.212 246.772 169.244 252.845 163.292 257.307C157.587 261.769 150.519 264 142.087 264Z" fill="white" />
                        <path d="M204.045 239.459H237.526L291.468 21.5662H240.874L229.342 67.3014H193.256L209.997 0H432.834L416.094 67.3014H380.008L391.541 21.5662H340.574L286.632 239.459H320.114L314.905 259.538H198.836L204.045 239.459Z" fill="white" />
                        <path d="M377.91 264C369.229 264 362.533 261.645 357.821 256.935C353.109 252.225 350.753 246.524 350.753 239.831C350.753 237.104 351.125 233.882 351.869 230.163C353.853 222.479 357.697 216.406 363.401 211.944C369.353 207.234 376.546 204.879 384.978 204.879C393.658 204.879 400.355 207.358 405.067 212.315C409.779 217.025 412.135 222.727 412.135 229.42C412.135 232.146 411.763 235.369 411.019 239.087C409.035 246.772 405.067 252.845 399.115 257.307C393.41 261.769 386.342 264 377.91 264Z" fill="white" />
                        <path d="M420.18 239.459H444.733L499.419 20.0789H474.866L480.074 0H578.287L573.078 20.0789H548.525L494.211 237.972H564.894L577.914 186.287H614L595.771 259.538H414.972L420.18 239.459Z" fill="white" />
                    </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-x border-[#FFFFFF1A] transform-gpu backdrop-blur-sm lg:backdrop-blur-3xl">
                    <a href="#" className="group flex items-center justify-between py-6 md:pr-8 border-b md:border-b-0 md:border-r border-[#FFFFFF1A] px-6">
                        <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M21.2428 6.70602C21.1851 6.47477 21.0731 6.26059 20.9161 6.08126C20.7591 5.90192 20.5616 5.76257 20.34 5.67477C17.2013 4.46727 12 4.50009 12 4.50009C12 4.50009 6.79875 4.46727 3.65625 5.67946C3.43466 5.76726 3.23718 5.9066 3.08017 6.08594C2.92317 6.26528 2.81116 6.47945 2.75344 6.71071C2.53781 7.55071 2.25 9.19602 2.25 12.0001C2.25 14.8041 2.53781 16.4495 2.75719 17.2941C2.8152 17.5242 2.92694 17.7371 3.08322 17.9156C3.23951 18.094 3.43589 18.2329 3.65625 18.3207C6.79875 19.5329 12 19.5001 12 19.5001C12 19.5001 17.2013 19.5329 20.3438 18.3207C20.5648 18.2334 20.7619 18.0947 20.9189 17.9163C21.0759 17.7378 21.1882 17.5246 21.2466 17.2941C21.4659 16.4504 21.7537 14.8041 21.7537 12.0001C21.7537 9.19602 21.4622 7.55071 21.2428 6.70602ZM10.5 15.0001V9.00009L15 12.0001L10.5 15.0001Z" fill="white" />
                                <path d="M15.4163 11.3756L10.9163 8.37563C10.8033 8.30025 10.6719 8.25697 10.5363 8.2504C10.4006 8.24382 10.2657 8.27421 10.146 8.33831C10.0263 8.40241 9.9262 8.49783 9.85645 8.61436C9.7867 8.7309 9.74991 8.86419 9.75 9V15C9.74991 15.1358 9.7867 15.2691 9.85645 15.3856C9.9262 15.5022 10.0263 15.5976 10.146 15.6617C10.2657 15.7258 10.4006 15.7562 10.5363 15.7496C10.6719 15.743 10.8033 15.6998 10.9163 15.6244L15.4163 12.6244C15.5191 12.5559 15.6035 12.4631 15.6618 12.3542C15.7202 12.2452 15.7507 12.1236 15.7507 12C15.7507 11.8764 15.7202 11.7548 15.6618 11.6458C15.6035 11.5369 15.5191 11.4441 15.4163 11.3756ZM11.25 13.5984V10.4063L13.6481 12L11.25 13.5984ZM21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM20.5163 17.1113C20.4877 17.2263 20.4323 17.3329 20.3545 17.4224C20.2768 17.5118 20.179 17.5816 20.0691 17.6259C17.1019 18.7716 12.0553 18.7509 11.9953 18.7509C11.9353 18.7509 6.89813 18.7678 3.93281 17.6259C3.82291 17.5816 3.72508 17.5118 3.64735 17.4224C3.56962 17.3329 3.5142 17.2263 3.48563 17.1113C3.2625 16.2553 3 14.6784 3 12C3 9.32157 3.2625 7.74469 3.48375 6.89344C3.51179 6.77774 3.56697 6.67037 3.64473 6.58022C3.7225 6.49007 3.8206 6.41972 3.93094 6.375C6.89813 5.23313 11.9438 5.25 12.0047 5.25C12.0656 5.25 17.1019 5.23313 20.0672 6.375C20.1771 6.41936 20.2749 6.48913 20.3526 6.57859C20.4304 6.66806 20.4858 6.77467 20.5144 6.88969C20.7375 7.74469 21 9.32157 21 12C21 14.6784 20.7375 16.2553 20.5163 17.1066V17.1113Z" fill="white" />
                            </svg>
                            <span className="font-serif text-xl">Youtube</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white" />
                    </a>

                    <a href="#" className="group flex items-center justify-between py-6 md:pl-8 px-6">
                        <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M21 3.75V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75Z" fill="white" />
                                <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="white" />
                            </svg>
                            <span className="font-serif text-xl">Linkedin</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-x border-[#FFFFFF1A] mb-24 backdrop-blur-sm lg:backdrop-blur-3xl">
                    <div className="p-8 md:border-r border-[#FFFFFF1A]">
                        <h3 className="font-serif italic text-xl mb-6 text-white">Ecosystem</h3>
                        <ul className="space-y-2">
                            {['LUCA the Leader', 'Martinich Consulting', 'Martinich Institute', 'Martinich R&D', 'CSR Partnerships'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#525252] hover:text-white transition-colors text-sm font-medium">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8">
                        <h3 className="font-serif italic text-xl mb-6 text-white">Resources</h3>
                        <ul className="space-y-2">
                            {['Leadership Insights (Blog)', 'Whitepapers & Reports', 'Public Lectures', 'Media Kit', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#525252] hover:text-white transition-colors text-sm font-medium">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-14 px-4">
                    <div className="max-w-md w-full">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="font-serif italic text-5xl font-black leading-none tracking-tighter">I.T.L</h2>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif leading-none mb-1">Institute for</span>
                                <span className="text-xl font-serif leading-none">Trusted Leadership</span>
                            </div>
                        </div>
                        <p className="font-sans text-[#525252] text-sm leading-relaxed">
                            We envision a world where organizations are led by trust and committed to continuous development of people and purpose. <br className="hidden md:block" />
                            Join us in making this vision a reality.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <h3 className="font-serif text-xl mb-4 text-[#525252]">Join our community of trusted leaders</h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Name@email.com"
                                className="w-full bg-[#0D0D0D] border border-[#292929] rounded-sm px-4 py-3 text-white placeholder-[#FFFFFF3D] focus:outline-hidden text-sm italic"
                            />
                            <button className="bg-[#006AFF] text-white font-bold px-6 py-3 rounded-sm transition-colors uppercase text-sm tracking-wider whitespace-nowrap shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#FFFFFF1A] pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#FFFFFF40] gap-4 px-4 uppercase tracking-wider font-medium">
                    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                        <span>© 2025 Institute for Trusted Leadership. All rights reserved.</span>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                    </div>
                    <div className="flex gap-4">
                        <span>Founded by Leslie Martinich</span>
                        <span>|</span>
                        <span>Built with purpose</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
