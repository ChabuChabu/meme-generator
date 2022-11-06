import headerImg from '../images/troll-face.png'

function Header() {
  return (
    <div>
        <header className='header'>
              <img className='header--image' src={headerImg} alt="troll-face" />
              <h2 className='header--title'>Meme Generator</h2>
              <h4 className='header--project'>React Course -Project 3</h4>
        </header>
    </div>
  )
}

export default Header

