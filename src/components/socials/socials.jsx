import "./socials.css"
import { FaBrandsInstagram, FaBrandsYoutube, FaBrandsLinkedin } from 'solid-icons/fa'
export const Socials = () => {
    return (
            <div class="socials">
                <div>Follow us through socials</div>
                <div class="social-links">
                    <a href="#"><FaBrandsInstagram size={32} color="black" /></a>
                    <a href="#"><FaBrandsYoutube size={32} color="black" /></a>
                    <a href="#"><FaBrandsLinkedin size={32} color="black" /></a>
                </div>
            </div>
    )
}