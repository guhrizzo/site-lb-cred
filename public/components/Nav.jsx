export default function Navbar(){
    return (
        <div className="flex items-center justify-center p-4 bg-transparent fixed z-999 min-w-full text-white border-b border-[#ffffff71]">
            <ul className="flex gap-8 font-normal">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Venda seu véiculo com dívida</li>
                <li className="cursor-pointer">Depoimentos</li>
                <li className="cursor-pointer">Contato</li>
            </ul>
        </div>
    )
}