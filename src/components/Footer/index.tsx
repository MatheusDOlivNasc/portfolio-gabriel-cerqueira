import './footer.scss';

const support = "https://firebasestorage.googleapis.com/v0/b/portifolio-gabriel-cerqueira.appspot.com/o/support%2Fmatheuson_white.svg?alt=media&token=2f0ae7ae-b7a8-4a41-912c-ca1539dea1dc"

export function Footer() {
  return (
    <footer>
      <a href="https://www.matheusnascimento.dev" target="_blank">
        <p>dev by:</p>
        <img
          src={support}
          alt="desenvolvido por matheus nascimento"/>
      </a>
    </footer>
  )
}