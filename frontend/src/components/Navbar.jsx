import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',     
      start: 'top top',    
      end: '+=200',        
      scrub: true          
    }
  });

  navTween.fromTo('nav', 
    { backgroundColor: 'transparent', backdropFilter: 'blur(0px)' }, 
    { backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut' }
  );
});

 
 return (
	<nav>
	 <div>
		<a href="#home" className="flex items-center gap-2">
		 <img src="/images/logo.png" alt="logo"  className="h-10 w-auto" />
		 <p  className="text-[#185519]">ZenTea</p>
		</a>
		
		<ul className="mr-60 ">
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
		</ul>


        
	 </div>
	</nav>
 )
}
export default Navbar
