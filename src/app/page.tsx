"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCoins,FaRegCreditCard,FaRegDotCircle, FaBars, FaArrowRight, FaPlayCircle, FaGift, FaChartLine, FaCalendarAlt,
  FaRobot, FaDice, FaUsers, FaBell, FaChessRook, FaCoins as FaCoins2, FaWheelchair,
  FaDragon, FaHistory, FaShieldAlt, FaCheck, FaTimes, FaChevronDown, FaStar,
  FaDiscord, FaTelegram, FaTwitter, FaGem, FaQuestionCircle
} from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    icon: <FaChartLine className="text-yellow-600 text-2xl" />,
    title: "Daily Betting Tips",
    desc: "Get expert-curated betting tips for all Stake Originals delivered to you daily.",
    color: "yellow-100",
    text: "yellow-600",
  },
  {
    icon: <FaCalendarAlt className="text-yellow-600 text-2xl" />,
    title: "Weekly & Monthly Bonuses",
    desc: "Exclusive bonus strategies to maximize your Stake rewards and rakeback.",
    color: "yellow-100",
    text: "yellow-600",
  },
  {
    icon: <FaRobot className="text-yellow-600 text-2xl" />,
    title: "Smart Betting Tools",
    desc: "Advanced calculators and simulators to optimize your betting strategy.",
    color: "yellow-100",
    text: "yellow-600",
  },
  {
    icon: <FaDice className="text-yellow-600 text-2xl" />,
    title: "Casino Game Guides",
    desc: "Comprehensive guides for all Stake casino games with winning strategies.",
    color: "yellow-100",
    text: "yellow-600",
  },
  {
    icon: <FaUsers className="text-yellow-600 text-2xl" />,
    title: "VIP Community",
    desc: "Join our exclusive Discord community of winning players sharing strategies.",
    color: "yellow-100",
    text: "yellow-600",
  },
  {
    icon: <FaBell className="text-yellow-600 text-2xl" />,
    title: "Real-time Alerts",
    desc: "Get instant notifications for hot streaks, bonus drops, and special events.",
    color: "yellow-100",
    text: "yellow-600",
  },
];

const games = [
  { icon: <FaDice className="text-yellow-600 text-3xl" />, name: "Dice", color: "yellow-100", win: "92%" },
  { icon: <FaChessRook className="text-yellow-600 text-3xl" />, name: "Crash", color: "yellow-100", win: "88%" },
  { icon: <FaCoins2 className="text-yellow-600 text-3xl" />, name: "Plinko", color: "yellow-100", win: "85%" },
  { icon: <FaWheelchair className="text-yellow-600 text-3xl" />, name: "Roulette", color: "yellow-100", win: "86%" },
  { icon: <FaRegCreditCard className="text-yellow-600 text-3xl" />, name: "Blackjack", color: "yellow-100", win: "89%" },
  { icon: <FaRegDotCircle className="text-yellow-600 text-3xl" />, name: "Baccarat", color: "yellow-100", win: "87%" },
  { icon: <FaDragon className="text-yellow-600 text-3xl" />, name: "Slots", color: "yellow-100", win: "84%" },
  { icon: <FaDragon className="text-yellow-600 text-3xl" />, name: "Limbo", color: "yellow-100", win: "90%" },
];

const miniTools = [
  { icon: <FaHistory className="text-yellow-600" />, title: "Streak Tracker", desc: "Track hot and cold streaks across all games to time your bets perfectly.", color: "yellow-100" },
  { icon: <FaBell className="text-yellow-600" />, title: "Bonus Alert", desc: "Get notified when bonus drops are likely based on historical patterns.", color: "yellow-100" },
  { icon: <FaShieldAlt className="text-yellow-600" />, title: "Risk Manager", desc: "Calculate optimal bet sizes based on your bankroll and risk tolerance.", color: "yellow-100" },
];

const faqs = [
  {
    q: "How often are betting tips updated?",
    a: "Our betting tips are updated daily for all Stake Originals games. For casino games, we provide weekly strategy updates along with real-time alerts when we detect favorable conditions.",
  },
  {
    q: "Do you guarantee wins?",
    a: "While we don't guarantee wins (no one can in gambling), our strategies are statistically proven to increase your chances of winning. Our members consistently report higher win rates and more profitable sessions using our methods.",
  },
  {
    q: "How do the weekly/monthly bonus tools work?",
    a: "Our bonus tools analyze your current wagering, VIP level, and historical bonus patterns to recommend the optimal strategy to maximize your weekly and monthly bonuses. This includes calculating the exact amounts to wager and the best games to play for bonus qualification.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access until the end of your current billing period.",
  },
  {
    q: "Is there a free trial available?",
    a: "We offer a 7-day money-back guarantee on all plans. If you're not satisfied with the results within your first week, simply contact us for a full refund, no questions asked.",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FaGem className="text-yellow-500 text-2xl" />
          <span className="text-xl font-bold">StakeKid</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
          <Link href="#tools" className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
          <Link href="#games" className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
          <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
          <Link href="#faq" className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-colors font-medium">
            Get Started
          </button>
        </div>
        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </nav>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
            <Link href="#tools" className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
            <Link href="#games" className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
            <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
            <Link href="#faq" className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
              <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximize Your <span className="text-yellow-500">Stake</span> Winnings
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Premium betting tips, strategies, and tools for all Stake Originals and Casino games.
              Join thousands of players increasing their profits daily.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-yellow-500 text-slate-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Get Started Now <FaArrowRight className="inline ml-2" />
              </button>
              <button className="px-8 py-3 bg-slate-800 text-slate-200 rounded-lg font-medium hover:bg-slate-700 transition-colors">
                <FaPlayCircle className="inline mr-2" /> Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto max-w-4xl"
          >
            <Image
              src="/images/dashboard.png"
              alt="StakeKid Dashboard"
              width={1200}
              height={675}
              className="rounded-xl shadow-2xl border-2 border-slate-800"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg shadow-xl">
              <FaGift className="inline mr-2" /> Weekly Bonus Active!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-yellow-500">StakeKid</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to maximize your winning potential
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stake <span className="text-yellow-500">Games</span> Covered
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We provide expert tips and strategies for all your favorite Stake games
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  {game.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{game.name}</h3>
                <p className="text-yellow-500 font-medium">{game.win} Win Rate</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Smart <span className="text-yellow-500">Tools</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful tools to enhance your Stake gaming experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {miniTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-slate-300">{tool.desc}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-yellow-500 font-medium flex items-center gap-2"
                >
                  Learn more <FaArrowRight className="text-sm" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently <span className="text-yellow-500">Asked</span> Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about StakeKid
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-700/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium pr-8">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-yellow-500" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-300">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-yellow-500">Level Up</span> Your Game?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players who are already winning more with StakeKid's premium tips and tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-yellow-500 text-slate-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Get Started Now <FaArrowRight className="inline ml-2" />
              </button>
              <button className="px-8 py-3 bg-slate-700 text-slate-200 rounded-lg font-medium hover:bg-slate-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <FaGem className="text-yellow-500 text-2xl" />
                <span className="text-xl font-bold">StakeKid</span>
              </Link>
              <p className="text-slate-400 mb-4">
                Premium betting tips and tools for Stake Originals and Casino games.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                  <FaDiscord className="text-xl" />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                  <FaTelegram className="text-xl" />
                </a>
                <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#games" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="#tools" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Discord Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                    Telegram Channel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 StakeKid. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}