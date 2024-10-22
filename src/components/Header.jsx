import profile from '../assets/images/profile.png';

export const Header = () => {
  return (
    <header className='flex justify-between max-w-7xl mx-auto items-center p-4 '>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  )
}
