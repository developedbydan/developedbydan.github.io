import '../styles/About.css'
import '../styles/Reset.css'

export function About() {
    return (
        <article className="about">
            <section className="about-us">
                <section className="about-text">
                    <h2>A <span>FRENCH</span> FILING</h2>
                    <p>
                        La Lune French Bistro was born from a love of all things Paris. 
                        Our founder and chef Ingrid Correa spent three amazing years in the City of Love, training under the industry's best. 
                        She brought home everything she learned - the flavors, the feelings, 
                        the family-style cafe - so that you can get a taste of Paris, too.
                    </p>
                </section>
                <div className="about-img img1"></div>
                <div className="about-img img2"></div>
                <button>Book Now</button>
            </section>
            <section className="categories">
                <h2>FLAVORS OF FRANCE</h2>
                <p>
                    Paris is a melting pot, as our food can attest. 
                    Take a bite and savor la vie délicieuse!
                </p>
                <div className="ctg ctg1"></div>
                <h4>MOUTHWATERING APPETIZERS</h4>
                <div className="ctg ctg2"></div>
                <h4>WHOLESOME MAINS</h4>
                <div className="ctg ctg3"></div>
                <h4>SWEET ENDINGS</h4 >
            </section>
        </article>
    )
}