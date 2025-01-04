'use client';

import { FC } from 'react';

const BenefitsSection: FC = () => {
  return (
    <section className="py-4 font-poppins md:py-6 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col gap-12 px-6 md:px-20">
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
            Organize your farm Operations and get more done
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Take control of your farm operations with tools designed to plan, track, and manage
            every task efficiently. With integrated scheduling, task management, work tracking, and
            detailed reporting, WaziTrack ensures your team stays aligned and productive—whether online or offline.
          </p>
        </div>
        <div className="w-full pt-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative flex justify-center w-full md:w-[35%] h-auto rounded-lg overflow-hidden">
              <img
                src="/assets/image-3.png"
                alt="Farmer working"
                className="w-full h-full object-cover rounded-xl object-top"
              />
            </div>
            <div className="flex flex-col gap-6 px-0 md:px-6 justify-center w-full md:w-[65%]">
              {[
                {
                  title: 'Streamlined Task Management',
                  description:
                    'Organize, assign, and prioritize tasks effortlessly, ensuring your team knows exactly what to do and when. Monitor progress in real time to stay on track and meet deadlines.',
                },
                {
                  title: 'Flexible Workflows',
                  description:
                    'Tailor task lists, boards, and calendars to suit your farm’s unique needs, creating an efficient and seamless operational flow.',
                },
                {
                  title: 'Simple Time Tracking',
                  description:
                    'Accurately track employee hours and manage labor resources with ease, ensuring precise and effective time reporting.',
                },
              ].map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-base text-gray-700 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;