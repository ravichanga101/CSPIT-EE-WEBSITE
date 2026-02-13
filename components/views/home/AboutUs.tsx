import { SITE_DATA } from '@/lib/constants';

export default function AboutUs() {
    return (
        <>
            <main id="main">
                <section className="wow fadeInUp">
                    <div className="container">
                        <br />
                        {/* 
              Marquee section was commented out in original PHP
            */}
                    </div>
                </section>
                <section id="about_us" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2></h2><h2 style={{ paddingTop: '20px' }}>About Us</h2>
                        </div>
                        <h5>
                            M & V Patel Department of {SITE_DATA.name_of_dept} (Estd. {SITE_DATA.dept_esta}) offers {SITE_DATA.dept_b_tech_seats} seats in B. Tech - Electrical Engineering and PhD Programme.
                        </h5>

                        <div className="row">
                            <div className="col-sm text-center">
                                <section id="services" className="wow fadeInUp">
                                    <div className="container">
                                        <div className="services-content container">
                                            <div className="row">
                                                <div className="col-lg-4 content">
                                                    <h2><center><b>{SITE_DATA.total_publications}</b></center></h2>
                                                    <h3><center>Publications</center></h3>
                                                </div>

                                                <div className="col-lg-4 content">
                                                    <h2><center><b>{SITE_DATA.student_teacher_ratio}</b></center></h2>
                                                    <h3><center>Student Teacher Ratio</center></h3>
                                                </div>

                                                <div className="col-lg-4 content">
                                                    <h2><center><b>{SITE_DATA.total_number_of_student}</b></center></h2>
                                                    <h3><center>Number of Students</center></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section id="facts" className="wow fadeInUp">
                <div className="services-content container">
                    <div className="row">
                        <div className="col-lg-4 content">
                            <h2><center><b>{SITE_DATA.total_workshops_org}</b></center></h2>
                            <h3><center>Workshop Organized</center></h3>
                        </div>

                        <div className="col-lg-4 content">
                            <h2><center><b>{SITE_DATA.total_projects_and_grants}</b></center></h2>
                            <h3><center>Projects & Grant Received</center></h3>
                        </div>

                        <div className="col-lg-4 content">
                            <h2><center><b>{SITE_DATA.placement_percent}</b></center></h2>
                            <h3><center>Placement - {SITE_DATA.placement_year}</center></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
