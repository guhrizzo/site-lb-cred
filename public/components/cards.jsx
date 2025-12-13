export default function InfoCard({ number, title, text, icon, active }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={number * 200}
      data-aos-once="true"
      className={`
        relative
        w-full max-w-[340px]
        min-h-[380px]
        p-6 md:p-8
        rounded-3xl
        flex flex-col gap-5
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
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500 flex items-center justify-center text-white text-xl md:text-2xl">
          {icon}
        </div>
      </div>

      {/* Título */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">
        {number}. {title}
      </h3>

      {/* Texto */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
        {text}
      </p>
    </div>
  );
}
