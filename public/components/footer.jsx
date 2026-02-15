import Image from 'next/image';
import { Instagram, MessageCircle, Code2, Copyright, MapPin, FileText } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-zinc-300 py-12 px-6 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Coluna 1: Logo e Social */}
                <div className="flex flex-col gap-4">
                    <Image src={"/Logo-LibertyCred.png"} width={200} height={200} alt="Logo LibertyCred" className="h-12 w-fit object-contain" />
                    <p className="text-sm leading-relaxed max-w-xs">
                        Sua parceira estratégica em reabilitação de crédito e gestão de dívidas. Atuamos com transparência e agilidade para limpar seu histórico e viabilizar novos negócios.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a 
                            href="https://www.instagram.com/liberty_car7/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="Instagram"
                            className="hover:text-green-500 transition-colors"
                        >
                            <Instagram size={22} />
                        </a>
                        <a 
                            href="https://wa.me/5514998420710" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="WhatsApp"
                            className="hover:text-green-500 transition-colors"
                        >
                            <MessageCircle size={22} />
                        </a>
                    </div>
                </div>

                {/* Coluna 2: Informações Legais */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Institucional</h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <FileText size={18} className="text-emerald-500" />
                            <span>CNPJ: 55.116.497/0001-08</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm">
                            <MapPin size={18} className="text-emerald-500 mt-0.5" />
                            <span>
                                Av. Dr Quinzinho, 995, Sala 4<br/>
                                Jaú - SP
                            </span>
                        </div>
                    </div>
                </div>

                {/* Coluna 3: Desenvolvedor */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold text-lg uppercase tracking-wider">Tecnologia</h4>
                    <a 
                        href="https://www.instagram.com/gfrizzo_/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                    >
                        <Code2 size={20} className="group-hover:text-green-400 transition-colors" />
                        <span>Desenvolvido por <span className="font-medium">Gustavo Rizzo</span></span>
                    </a>
                </div>
            </div>

            {/* Linha Inferior */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500">
                <p className="flex items-center justify-center gap-1">
                    <Copyright size={14} /> {currentYear} Liberty Cred - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;