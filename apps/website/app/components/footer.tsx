import { FaGithub, FaLinkedin, FaStackOverflow, FaXTwitter } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="footer mt-4 items-center border-t py-6">
      <aside className="grid-flow-col items-center">
        <p>© 2024 Huan Luo</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://x.com/ihuanluo" target="_blank" aria-label="My X Profile">
          <FaXTwitter size={20} />
        </a>
        <a href="https://github.com/dukeluo" target="_blank" aria-label="My Github Profile">
          <FaGithub size={20} />
        </a>
        <a href="https://stackoverflow.com/users/12814009/huan" target="_blank" aria-label="My StackOverflow Profile">
          <FaStackOverflow size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ihuanluo" target="_blank" aria-label="My LinkedIn Profile">
          <FaLinkedin size={20} />
        </a>
      </nav>
    </footer>
  )
}
