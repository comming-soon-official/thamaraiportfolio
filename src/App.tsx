import HeroSection from './components/internal/heroSection'
import Projects from './components/internal/office-projects'
import Skills from './components/internal/skills'
import SocialMediaProjects from './components/internal/socialmedia-projects'
import WorkExperience from './components/internal/work'
import Footer from './components/layout/footer'
import Navbar from './components/layout/navbar'

const App = () => {
    return (
        <div className="">
            <Navbar />
            <HeroSection />
            <Skills />
            <WorkExperience />
            <Projects />
            <SocialMediaProjects />
            <Footer />
        </div>
    )
}

export default App
