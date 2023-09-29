import { createSignal } from 'solid-js';
import { BsThreeDots } from 'solid-icons/bs'
import { IoCloseCircleOutline } from 'solid-icons/io'
import Brand from './../../assets/monochrome-white.svg'
import "./topbar.css"
export function Topbar() {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
        <div class='topbar'>
            <div id='brand'><Brand /></div>
            <header class="">
                <div class='drawer'>
                    <button class="menu-button" onClick={() => setIsOpen(!isOpen())}>
                        {!isOpen() ? <BsThreeDots size={64} /> : <IoCloseCircleOutline size={64} />}
                    </button>
                </div>
                <nav class={`nav-links ${isOpen() ?"":"close"}`}>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">Services</a>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">Projects</a>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">Testimonials</a>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">Learn to code</a>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">Contact</a>
                    <a class="link" onClick={() => setIsOpen(!isOpen())} href="#">About</a>
                </nav>
            </header>
            <a class='blog-link'>Blog</a>
        </div>
    )
} 