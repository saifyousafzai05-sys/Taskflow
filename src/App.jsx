import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Bell, Check, ChevronDown, CircleHelp,
  Clock3, Command, Menu, MoreHorizontal, PackageCheck, Search,
  ShieldCheck, Sparkles, Timer, TrendingUp, X, Zap
} from 'lucide-react'

const orders = [
  { id: '#1048', name: 'Sarah Mitchell', items: '2 items · Chicken wrap, iced tea', time: '2 min ago', status: 'Preparing', tone: 'amber', initials: 'SM' },
  { id: '#1047', name: 'James Wilson', items: '3 items · Classic burger, fries', time: '5 min ago', status: 'Ready', tone: 'green', initials: 'JW' },
  { id: '#1046', name: 'Olivia Chen', items: '1 item · Margherita pizza', time: '8 min ago', status: 'New order', tone: 'blue', initials: 'OC' },
]

function Brand() {
  return <a className="brand" href="#home" aria-label="TaskFlow home">
    <span className="brand-mark"><Command size={19} strokeWidth={2.6} /></span>
    <span>taskflow<span className="brand-dot">.</span></span>
  </a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container nav-wrap">
      <Brand />
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#features" onClick={() => setOpen(false)}>Features</a>
        <a href="#preview" onClick={() => setOpen(false)}>How it works</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="nav-mobile-cta" href="#get-started" onClick={() => setOpen(false)}>Get started <ArrowUpRight size={15}/></a>
      </nav>
      <a className="button button-dark nav-cta" href="#get-started">Get started <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
  </header>
}

function OrderRow({ order }) {
  return <div className="order-row">
    <div className={`avatar avatar-${order.tone}`}>{order.initials}</div>
    <div className="order-info">
      <div className="order-name">{order.name}<span>{order.id}</span></div>
      <p>{order.items}</p>
    </div>
    <div className="order-side">
      <span className={`status status-${order.tone}`}><i />{order.status}</span>
      <small>{order.time}</small>
    </div>
  </div>
}

function BoardPreview() {
  const [filter, setFilter] = useState('All orders')
  const visible = orders.filter(order => filter === 'All orders' || order.status === filter)
  return <div className="board-shell" id="preview">
    <div className="board-topbar">
      <div className="board-brand"><span className="mini-mark"><Command size={13}/></span> TaskFlow <span className="board-label">LIVE BOARD</span></div>
      <div className="board-top-actions"><span className="live-indicator"><i/> Live updates</span><button aria-label="More options"><MoreHorizontal size={19}/></button></div>
    </div>
    <div className="board-content">
      <div className="board-heading">
        <div><p className="eyebrow">MONDAY, 09 NOVEMBER</p><h3>Good morning, Alex <span>✦</span></h3><p className="board-subtitle">Here’s what’s happening with your orders today.</p></div>
        <button className="board-date">Today <ChevronDown size={14}/></button>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><span>Total orders</span><strong>28</strong><small className="positive"><TrendingUp size={12}/> 12% <em>vs yesterday</em></small></div>
        <div className="stat-card"><span>In progress</span><strong>08</strong><small className="muted"><Timer size={12}/> Being prepared</small></div>
        <div className="stat-card"><span>Ready to serve</span><strong>05</strong><small className="positive"><Check size={12}/> On track</small></div>
      </div>
      <div className="orders-head"><div><h4>Recent orders</h4><span>Keep track of every order</span></div><button className="search-button"><Search size={14}/> Search</button></div>
      <div className="filter-tabs">
        {['All orders', 'Preparing', 'Ready', 'New order'].map(item => <button key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="orders-list">
        {visible.length ? visible.map(order => <OrderRow key={order.id} order={order}/>) : <p className="empty-state">No orders in this category.</p>}
      </div>
      <div className="board-footer"><span><ShieldCheck size={13}/> All systems operational</span><span>Updated just now</span></div>
    </div>
    <div className="floating-note"><span className="note-icon"><Bell size={16}/></span><span><b>Order #1047 is ready!</b><small>Customer has been notified</small></span><span className="note-check"><Check size={13}/></span></div>
  </div>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="announcement"><span><Sparkles size={13}/></span> A clearer way to manage every order <ArrowRight size={13}/></div>
        <h1>Great service starts with <span>smooth order flow.</span></h1>
        <p className="hero-description">Keep every restaurant order in sync. TaskFlow gives your team one simple place to track what’s new, what’s cooking, and what’s ready.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#get-started">Explore the order board <ArrowUpRight size={17}/></a>
          <a className="text-link" href="#features">See how it works <ArrowRight size={16}/></a>
        </div>
        <div className="hero-proof"><div className="proof-avatars"><span>AM</span><span>JK</span><span>SL</span><b>+</b></div><p><strong>Made for busy teams</strong><br/>Less confusion. Better service.</p></div>
      </div>
      <div className="hero-visual"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><BoardPreview/></div>
    </div>
    <div className="container hero-bottom"><span>ONE BOARD. EVERY ORDER.</span><div><span><Zap size={14}/> Clear at a glance</span><span><Clock3 size={14}/> Always up to date</span><span><PackageCheck size={14}/> Ready when you are</span></div></div>
  </section>
}

const features = [
  { icon: <Zap size={19}/>, title: 'Stay in sync', text: 'See order changes in one shared place, so your team always knows what needs attention.', color: 'blue' },
  { icon: <Clock3 size={19}/>, title: 'Move faster', text: 'Spot new, preparing, and ready orders quickly without checking multiple screens.', color: 'orange' },
  { icon: <ShieldCheck size={19}/>, title: 'Keep it simple', text: 'A clean, easy-to-read board helps staff focus on service instead of admin.', color: 'green' },
]
function Features() {
  return <section className="features-section section" id="features">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow">BUILT FOR THE REAL WORLD</p><h2>Less order chaos.<br/><span>More happy customers.</span></h2></div><p>When the kitchen gets busy, clarity matters. TaskFlow keeps the important details easy to find.</p></div>
      <div className="feature-grid">{features.map(feature => <article className="feature-card" key={feature.title}><div className={`feature-icon icon-${feature.color}`}>{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#get-started" aria-label={`Learn about ${feature.title}`}><ArrowUpRight size={17}/></a></article>)}</div>
    </div>
  </section>
}

function CTA() {
  return <section className="cta-section" id="get-started"><div className="container cta-card"><div className="cta-decoration">✳</div><div><p className="eyebrow">YOUR NEXT SERVICE, SIMPLIFIED</p><h2>Ready to bring every order together?</h2><p>Give your team a clearer view of the work ahead.</p></div><a className="button button-light" href="mailto:hello@taskflow.example?subject=TaskFlow%20Order%20Board">Let’s get started <ArrowUpRight size={17}/></a></div></section>
}

function Footer() {
  return <footer className="site-footer" id="about"><div className="container footer-inner"><Brand/><p>Making every order easier to manage.</p><span>© 2026 TaskFlow. Built for better service.</span></div></footer>
}

export default function App() {
  return <><Header/><main><Hero/><Features/><CTA/></main><Footer/></>
}