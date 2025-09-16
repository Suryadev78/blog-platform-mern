interface HeaderProps {
    logoName :string;
    login : string;
    signup : string
    
    
}
 export default function Header ({logoName, login, signup} : HeaderProps){
    return(
        <header className='px-16 mb-10 flex justify-between'>
        <a href='' className='logo text-2xl'>{logoName}</a>
        <nav className='flex gap-6'>
          <a href='/login'>{login}</a>
          <a href='/signup'>{signup}</a>

        </nav>
    
      </header>
      )}