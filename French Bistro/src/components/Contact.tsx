import '../styles/Contact.css'
import '../styles/Reset.css'

export function Contact(){
    return (
        <section className="contact-wrapper">
            <div className='contact-img'></div>
            <div className="contact-info">
                <h2>SEE YOU SOON</h2>
                <div className="contact-info-holder">
                    <h4>PHONE NUMBER</h4>
                    <p>(123)456-7890</p>
                </div>
                <div className="contact-info-holder">
                    <h4>EMAIL ADDRESS</h4>
                    <p>frenchbistroproject@example.com</p>
                </div>
                <div className="contact-info-holder">
                    <h4>RESTAURANT</h4>
                    <p>Anywhere St. City, ST 12345</p>
                </div>
            </div>
        </section>
    )
}