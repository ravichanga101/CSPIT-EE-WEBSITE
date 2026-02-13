import { SITE_DATA } from '@/lib/constants';

export default function VisionMission() {
    return (
        <>
            <section id="services">
                <div className="services-content container">
                    <div className="row">
                        <div className="col-lg-6" id="vision">
                            <div className="box wow fadeInLeft">
                                <div className="icon"><i className="fa fa-eye"></i></div>
                                <big><h4 className="title"><a href="">Vision</a></h4>
                                    <p className="description"><i> “{SITE_DATA.vision}”<br /><br /></i></p></big>
                            </div>
                        </div>

                        <div className="col-lg-6" id="mission">
                            <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                <div className="icon"><i className="fa fa-line-chart"></i></div>
                                <big><h4 className="title"><a href="">Mission</a></h4>
                                    <p className="description"><i>“{SITE_DATA.mission}”</i></p></big>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal PEOs */}
            <div className="modal fade" id="peos" role="dialog">
                <div className="modal-dialog" style={{ minWidth: '70%' }}>
                    <div className="modal-content" style={{ paddingLeft: '30px' }}>
                        <div className="modal-header">
                            <h4 className="modal-title">Program Education Objectives (PEOs)</h4>
                            <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'right' }}>&times;</button>
                        </div>
                        <div className="modal-body">
                            {/* Content commented out in original */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal POs */}
            <div className="modal fade" id="pos" role="dialog">
                <div className="modal-dialog" style={{ minWidth: '70%' }}>
                    <div className="modal-content" style={{ paddingLeft: '30px' }}>
                        <div className="modal-header">
                            <h4 className="modal-title">Program Outcomes (POs)</h4>
                            <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'right' }}>&times;</button>
                        </div>
                        <div className="modal-body">
                            {/* Content commented out in original */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
