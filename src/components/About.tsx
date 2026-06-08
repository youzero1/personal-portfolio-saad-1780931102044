import { User, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-brand">#</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with 4+ years of experience crafting
              scalable web applications. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or hiking in the mountains.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800">
              <User className="text-brand flex-shrink-0" size={22} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Name</p>
                <p className="font-medium">Alex Johnson</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800">
              <MapPin className="text-brand flex-shrink-0" size={22} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800">
              <Briefcase className="text-brand flex-shrink-0" size={22} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                <p className="font-medium text-green-400">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
