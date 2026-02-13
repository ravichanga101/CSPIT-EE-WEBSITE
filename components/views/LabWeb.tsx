export default function LabWeb() {
    return (
        <>
            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Programmable Logic Controller Lab</h2><br />

                        <div className="row">
                            <div className="col-sm-6">
                                <img className="img-thumbnail" src="img/labs/Programmable_Logic_Controller_La.webp" alt="UG lab" />
                            </div>

                            <div className="col-sm-6">
                                <p>PLC lab resides at lab No. 116, ground floor EE building. This lab is equipped with PLC M340 manufactured by Schneider-Electric which is mid-range PLC for industrial process and infrastructure. Along with PLC this lab contains various PLC modules like DIO16025, AMI0800, AMO0410 and ART414 which are used for sensors and actuators. Students can perform various experiment on this PLC and learn ladder logic diagrams. To program PLC 10 computer are available. Student can develop various project related to automation. This lab provides basic knowledge and hands-on experience of SCADA as well.</p>
                            </div>
                        </div>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <center><h3>Course Information</h3></center>
                                </td>
                                <td>
                                    <center><h3>Equipments</h3></center>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Programmable Logic Controllers & Industrial Automation
                                </td>
                                <td>
                                    Schneider electrics Industry version M340 CPU based PLC panel Which contains digital and analog input and output modules, Laboratory equipped with 10 PCs with Licensed PLC software (Unity Pro S) for PLC. One PC has licensed SCADA (Citect) software.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2><h2 style={{ paddingTop: '20px' }}>Projects</h2><br />
                        <ul>
                            <li>Stepper motor control using PLC and SCADA Syatem </li>
                            <li>Automatic bottle filling plant prototype </li>
                            <li>Feeder Monitoring and Remote controlling  </li>
                            <li> Temperature controller using PLC</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
