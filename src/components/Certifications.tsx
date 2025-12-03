import ipaSc from '@/assets/images/ipa-sc.png';
import awsScs from '@/assets/images/aws_scs.png';

export default function Certifications() {
  const certifications = [
    {
      name: 'Fundamental Information Technology Engineer Examination',
      organization: 'IPA',
      image: ipaSc,
      registrationNumber: 'No. 008743',
      link: 'https://riss.ipa.go.jp',
    },
    {
      name: 'AWS Certified Security - Specialty',
      organization: 'Amazon Web Services',
      image: awsScs,
      link: 'https://www.credly.com/badges/b931d1cf-823f-4aa7-a061-4328c5a1fb4e/public_url',
    },
  ];

  return (
    <div id="certifications">
      <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">
        Certifications
      </h2>
      <div className="flex items-start gap-6 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex-shrink-0">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-24 h-24 object-contain"
              />
            </div>
            {cert.registrationNumber && (
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {cert.registrationNumber}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
