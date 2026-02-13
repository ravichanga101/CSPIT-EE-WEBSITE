import { LINKS } from '@/lib/constants';

export default function MajorRecruiters() {
    // Convert object to array for mapping, ensuring order
    const recruiters = Object.values(LINKS.recruiter);

    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2></h2><h2 style={{ paddingTop: '20px' }}>Major Recruiters</h2>
                </div>

                <div className="owl-carousel clients-carousel">
                    {recruiters.map((src, index) => (
                        <img key={index} src={src} alt="" />
                    ))}
                </div>
            </div>
        </section>
    );
}
