import HomeSlider from './home/HomeSlider';
import AboutUs from './home/AboutUs';
import BestPractices from './home/BestPractices';
import VisionMission from './home/VisionMission';
import Certifications from './home/Certifications';
import StudentChapters from './home/StudentChapters';
import CareerDevelopment from './home/CareerDevelopment';
import MajorRecruiters from './home/MajorRecruiters';
import Testimonials from './home/Testimonials';
import Gallery from './home/Gallery';
import ContactUs from './home/ContactUs';

export default function HomeView() {
    return (
        <>
            <HomeSlider />
            <AboutUs />
            <BestPractices />
            <VisionMission />
            <Certifications />
            <StudentChapters />
            <CareerDevelopment />
            <MajorRecruiters />
            <Testimonials />
            <Gallery />
            <ContactUs />
        </>
    );
}
