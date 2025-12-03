import meImage from '@/assets/images/me.png';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={meImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">
                Profile
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                SREです。水風呂が得意ではありませんがサウナに入ります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
