export default function InfoCard({ number, title, text, icon, active }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={number * 200}
      data-aos-once="true"
      className={`
        relative
        w-[320px] min-h-[420px] p-8 rounded-3xl
        flex flex-col gap-6
        transition-all duration-300
        ${
          active
            ? "bg-gray-50 border border-gray-300 shadow-lg"
            : "bg-gray-200/80 shadow-md"
        }
      `}
    >
      {/* Ícone */}
      <div className="flex items-center justify-center">
        <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-white text-2xl">
          {icon}
        </div>
      </div>

      {/* Conteúdo com linha verde */}
     
        
        

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900">
          {number}. {title}
        </h3>

        {/* Texto */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          {text}
        </p>
      
    </div>
  );
}
