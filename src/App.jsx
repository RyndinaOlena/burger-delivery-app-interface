import Header from './components/Header';
import Gallery from './components/Gallery';
import Carousel from './components/Carousel';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundDrone from './components/BackgroundDrone';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        <BackgroundDrone />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Featured
              </h2>
              <Carousel />
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                War Technology Gallery
              </h2>
              <Gallery />
            </section>
          </main>
          <footer className="py-6 bg-slate-200 dark:bg-slate-800 text-center text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <p>© {new Date().getFullYear()} Military Technology Gallery</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;