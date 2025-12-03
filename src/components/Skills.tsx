import awsLogo from '@/assets/images/aws_logo.svg';
import terraformLogo from '@/assets/images/terraform_logo.svg';

export default function Skills() {
  const skills = [
    {
      name: 'AWS',
      icon: <img src={awsLogo} alt="AWS" className="w-8 h-8 object-contain" />,
    },
    {
      name: 'Terraform',
      icon: <img src={terraformLogo} alt="Terraform" className="w-8 h-8 object-contain" />,
    },
    {
      name: 'Security',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="skills">
      <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">
        Skills
      </h2>
      <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            <div className="text-gray-600 dark:text-gray-400">
              {skill.icon}
            </div>
            <h3 className="text-base font-light text-gray-700 dark:text-gray-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
