import { motion } from 'motion/react';
import { Car, ShieldCheck, Wifi } from 'lucide-react';

import { Badge } from '@/src/components/ui';
import { fadeUp } from '@/src/lib/motion';

export function ExperienceIntroSection() {
  return (
    <section id="experience" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="section-kicker">Tatil hissi</p>
          <h2 className="section-title">Alaçatı’nın enerjisi, küçük bir sahil evinin sakinliği.</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="text-lg leading-8 text-muted">
            Iresine Hotel, restore edilmiş iki taş yapının korunaklı avlusunda konumlanır. Sabah kahvaltısı güneşi takip eder, havuz alanı sessiz kalır, akşamları ise bar menüsü Ege otları, narenciye ve yerel şaraplarla hafifler.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Badge icon={ShieldCheck} text="Yetişkin dostu" />
            <Badge icon={Wifi} text="Fiber internet" />
            <Badge icon={Car} text="Koy transferi" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
