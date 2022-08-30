import { Timer, Scroll } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logoPomoLeaerning from '../../assets/PomoLearning.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPomoLeaerning} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={28} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={28} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
