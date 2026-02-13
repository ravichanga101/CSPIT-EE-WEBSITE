import { LINKS } from '@/lib/constants';

export default function Gallery() {
    return (
        <section id="portfolio" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2></h2><h2 style={{ paddingTop: '20px' }}>Gallery</h2>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row no-gutters">
                    {[1, 2, 3].map((id) => (
                        <div className="col-lg-3 col-md-4" key={id}>
                            <div className="portfolio-item wow fadeInUp">
                                <a href={LINKS.gallery[id as keyof typeof LINKS.gallery]} className="portfolio-popup">
                                    <img src={LINKS.gallery[id as keyof typeof LINKS.gallery]} alt="" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info"><h2 className="wow fadeInUp"></h2></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-3 col-md-4">
                        <div className="portfolio-item wow fadeInUp">
                            <a href={LINKS.gallery[4]} className="portfolio-popup">
                                <video width="530" height="300" controls>
                                    <source src={LINKS.gallery[4]} type="video/mp4" />
                                </video>
                            </a>
                        </div>
                    </div>

                    {[5, 6, 7, 8].map((id) => (
                        <div className="col-lg-3 col-md-4" key={id}>
                            <div className="portfolio-item wow fadeInUp">
                                <a href={LINKS.gallery[id as keyof typeof LINKS.gallery]} className="portfolio-popup">
                                    <img src={LINKS.gallery[id as keyof typeof LINKS.gallery]} alt="" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info"><h2 className="wow fadeInUp"></h2></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
