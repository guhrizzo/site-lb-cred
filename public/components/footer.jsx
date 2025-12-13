export default function Footer() {
    return (
        <div className="bg-slate-950  text-slate-50 flex ">
            <ul className="flex min-w-full justify-between items-center p-6">
                <li className="font-bold">Informações:
                    <p className="font-normal text-slate-50/50">CNPJ: 55.116.497/0001-08</p>
                    <p className="font-normal text-slate-50/50">Endereço: AV. Dr quinzinho 995, sala 4</p>
                </li>
                <li className="font-bold">Desenvolvedor:
                    <p className="font-normal text-slate-50/50 flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                    </svg>Gustavo Fernades Rizzo</p>
                </li>
                <li className="font-bold">Copyright:
                    <p className="text-left text-slate-50/50 text-sm">
                        © {new Date().getFullYear()} Liberty Cred. <br /> Todos os direitos reservados.
                    </p>
                </li>
            </ul>
        </div>
    )
}
