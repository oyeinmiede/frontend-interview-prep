import { useEffect, useState } from 'react'
import { Menu, Sun, Moon, CloudSun, Flower2, MoonStar } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './Topbar.css'

export default function Topbar({ onOpenMobile }) {
    const { theme, toggleTheme } = useTheme()
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const hour = time.getHours()
    let greeting, Icon
    if (hour < 12) {
        greeting = 'Good Morning'
        Icon = CloudSun
    } else if (hour < 18) {
        greeting = 'Good Afternoon'
        Icon = Flower2
    } else {
        greeting = 'Good Evening'
        Icon = MoonStar
    }

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const formattedDate = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })

    return (
        <header className="topbar">
            <button className="icon-btn mobile-only" onClick={onOpenMobile}>
                <Menu size={20} />
            </button>
            <div className="topbar-greeting">
                <Icon size={16} className="greeting-icon" />
                {greeting}, Gabrielle
                <span className="topbar-time">{formattedTime}</span>
                <span className="topbar-date">{formattedDate}</span>
            </div>
            <div className="topbar-spacer" />
            <button className="icon-btn theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
        </header>
    )
}
