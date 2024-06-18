import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { InstagramCarousel } from './components/InstagramCarousel';
import { Product } from './components/Product';
import { Description } from './components/Description';
import { Contact } from './components/Contact';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Description />
      <InstagramCarousel />
      <Product />
      <Contact />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}