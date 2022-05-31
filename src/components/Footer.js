import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import { Icon32LogoVk } from '@vkontakte/icons';
import {FaTiktok} from 'react-icons/fa'
function Footer() {

  return (
      <>
   
		<footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"><BsInstagram/></a>
				<a href="#"><Icon32LogoVk/></a>
				<a href="#"><FaTiktok/></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Paul Z. &copy; 2022</p>
			</div>

		</footer>
        </>
  )
}

export default Footer