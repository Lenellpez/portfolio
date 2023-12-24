import Logoimg from '../assets/logo.png';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const nav =() =>{
    return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-semibold">Tu Logo</div>
        <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-white text-lg font-medium hover:text-gray-300">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    )
}
export default nav