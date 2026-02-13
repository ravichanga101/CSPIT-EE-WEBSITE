import Link from 'next/link';
import { SITE_DATA, LINKS } from '@/lib/constants';

export default function Navigation() {
    return (
        <>
            {/* Top Bar */}
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o"></i> <a href={`mailto:${SITE_DATA.contact_email}`}>{SITE_DATA.contact_email}</a>
                        <i className="fa fa-phone"></i> {SITE_DATA.contact_phone} |
                        <i className="fa fa-download"></i> <a href={LINKS.brochure} target="_blank" rel="noopener noreferrer"> Brochure</a>
                    </div>
                    <div className="social-links float-right">
                        <a href={LINKS.facebook} target="_blank" className="" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        <a href={LINKS.twitter} target="_blank" className="twitter" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a href={LINKS.instagram} target="_blank" className="twitter" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href={LINKS.skype} target="_blank" className="twitter" rel="noopener noreferrer"><i className="fa fa-skype"></i></a>
                        <a href={LINKS.linkedin} target="_blank" className="" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </section>

            {/* Header */}
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h3>
                            {/* Using standard <a> tag to preserve strict parity with href="index.php..." */}
                            <a href="/?view=home" className="scrollto">
                                <span><h6>M & V Patel Department of</h6>{SITE_DATA.name_of_dept}</span>
                            </a>
                        </h3>
                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="/?view=home#about_us">About</a></li>

                            <li className="menu-has-children"><a href="#">Lab Facilities</a>
                                <ul>
                                    <li><a href="/?view=lab_advance">Advance Power System & Electrical Vehicle Lab</a></li>
                                    <li><a href="/?view=lab_Cable_Testing">Cable and Wire Testing Lab</a></li>
                                    <li><a href="/?view=lab_web">Programmable Logic Controller</a></li>
                                    <li><a href="/?view=lab_security">Measurement & Instrumentation</a></li>
                                    <li><a href="/?view=lab_networking">High Voltage Engineering</a></li>
                                    <li><a href="/?view=lab_os">Basics of Electrical Engineering</a></li>
                                    <li><a href="/?view=lab_pm">Power Electronic and Control System</a></li>
                                    <li><a href="/?view=lab_automation">Microcontroller & DSP</a></li>
                                    <li><a href="/?view=lab_ug"> UG Computer Lab </a></li>
                                    <li><a href="/?view=lab_pg"> Simulation Lab </a></li>
                                    <li><a href="/?view=lab_psp"> Power System Protection   </a></li>
                                    <li><a href="/?view=lab_em1"> Electrical Machine – Lab I   </a></li>
                                    <li><a href="/?view=lab_em2"> Electrical Machine – Lab II   </a></li>
                                </ul>
                            </li>

                            <li className="menu-has-children"><a href={LINKS.admission}>Admission</a></li>

                            <li className="menu-has-children"><a href="#">Students' Corner</a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href={LINKS.academic_calendar}>Academic Calendar</a></li>
                                    <li><a href={LINKS.transcript_request}>Transcript Request</a></li>
                                    <li><a href={LINKS.fees_payment}>Fees Payment</a></li>
                                    <li><a href={LINKS.exam_results}>Exam Results</a></li>
                                    <li><a href={LINKS.question_papers}>Question Papers</a></li>
                                    <li><a href={LINKS.syllabus}>Syllabus</a></li>
                                    <li><a href={LINKS.download_forms}>Download Forms</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
