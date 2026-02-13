export default function HomeSlider() {
    return (
        <section id="intro">
            <div id="intro-carousel" className="owl-carousel">
                <div className="item" style={{ backgroundImage: "url('img/intro-carousel/1.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('img/intro-carousel/2.jpg')" }}></div>
                <div className="item" style={{ backgroundImage: "url('img/intro-carousel/3.jpg')" }}></div>
            </div>
        </section>
    );
}
