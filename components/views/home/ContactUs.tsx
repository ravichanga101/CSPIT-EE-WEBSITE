import { SITE_DATA, LINKS } from '@/lib/constants';

export default function ContactUs() {
    return (
        <section id="contact" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2></h2><h2 style={{ paddingTop: '20px' }}>Contact Us</h2>
                </div>

                <div className="row contact-info">
                    <div className="col-md-4">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>Address</h3>
                            <small><small><address dangerouslySetInnerHTML={{ __html: SITE_DATA.contact_address }} /></small></small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-phone">
                            <i className="ion-ios-telephone-outline"></i>
                            <h3>Phone Number</h3>
                            <p className="text-center"><a href={`tel:${SITE_DATA.contact_phone}`}>{SITE_DATA.contact_phone}</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-email">
                            <i className="ion-ios-email-outline"></i>
                            <h3>Email</h3>
                            <p className="text-center"><a href={`mailto:${SITE_DATA.contact_email}`}>{SITE_DATA.contact_email}</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <iframe
                    src={LINKS.google_map}
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen
                />
            </center>

            {/* Contact Form was commented out in original PHP/HTML */}
        </section>
    );
}
