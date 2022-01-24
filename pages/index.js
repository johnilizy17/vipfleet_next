import Navbar from '../components/Navbar/Navbar';
import Main from '../components/home/Main';
import Slide from '../components/home/Slide';

export default function Home() {
  return (
    <div className="font-serif">
      <Navbar/>
      <Main/>
      <Slide/>
    </div>
  )
}
