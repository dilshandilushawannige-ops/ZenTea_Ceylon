import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ReserveTea from './components/ReserveTea.jsx';
import StatsSection from './components/StatsSection.jsx';
import TeaRecipes from './components/TeaRecipes.jsx';
import  FeatureSteps  from "./components/FeatureSteps.jsx"
import Footer from './components/footer.jsx';

const features = [
  {
    step: "Step 1",
    title: "Choose Your Tea",
    content: "Indulge in a dessert-inspired favorite. This blend features a robust black tea base with real cacao bits for a rich, chocolatey flavor that's perfectly sweet and satisfying—like your favorite treat in a cup.",
    image: "/images/Tea1.png",
  },
  {
    step: "Step 2",
    title: "Brew the Tea",
    content: "A timeless and refreshing classic. We expertly balance brisk, cold-brewed tea with the bright, tangy sweetness of lemonade. It's the ultimate thirst-quencher for a sunny day.",
    image: "/images/Tea2.png",
  },
  {
    step: "Step 3",
    title: "Enjoy Your Tea",
    content: "Escape to the tropics with this sunny, fruit-forward tea. Juicy pineapple pieces mingle with a light tea base, creating a sweet, vibrant, and perfectly refreshing sip that's pure sunshine.",
    image: "/images/Tea3.png",
  },
];

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
        <Navbar />
        <Hero />
        <ReserveTea />
        <StatsSection />
        <FeatureSteps features={features} imageHeight="h-[400px] w-[450px]" />
        <Footer />

       </main>
    )
}


export default App