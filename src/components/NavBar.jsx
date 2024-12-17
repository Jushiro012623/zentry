import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
const NavBar = () => {
    const navItems = ['Nexus', 'Vault', 'Prolouge', 'About', 'Contact']
    const navContainerRef = React.useRef(null)
    const audioElementRef = React.useRef(null)
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [isNavVisible, setIsNavVisible] = React.useState(0)
    const [isAudioPlaying, setIsAudioPlaying] = React.useState(false)
    const [isIndicatopActive, setIsIndicatorActive] = React.useState(false)
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }
    const { y: currentScrollY } = useWindowScroll()
    React.useEffect(() => {
        if(currentScrollY === 0){
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    },[currentScrollY,lastScrollY ])

    React.useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    },[isNavVisible])
    React.useEffect(() => {
        isAudioPlaying ? audioElementRef.current.play() : audioElementRef.current.pause()
    },[isAudioPlaying])
    return (
        <div ref={navContainerRef} className={`fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6`}>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10'/>
                        <Button 
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                    <div className='flex h-full items-center'>
                        <div  className='hidden md:block'>
                            {navItems.map((item) => (
                                <a key={item} className='nav-hover-btn' href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            ) )}
                        </div>
                        <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5'>
                            <audio src="/audio/loop.mp3" ref={audioElementRef} className='hidden' loop />
                            {[1,2,3,4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatopActive ? 'active' : '' }`} style={{animationDelay : `${bar * 0.1}s`}} />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar