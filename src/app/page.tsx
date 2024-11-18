import Profile from '../app/components/Profile'
import Experience from '../app/components/Experience'
import Projects from '../app/components/Projects'
import ContactPopup from '../app/components/ContactPopup'


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <Profile />
        <Experience />
        <Projects />
        <ContactPopup />
      </div>
    </main>
  )
}