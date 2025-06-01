"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCoins, FaRegCreditCard, FaRegDotCircle, FaArrowRight, FaPlayCircle, FaGift, FaChartLine, FaCalendarAlt,
  FaRobot, FaDice, FaUsers, FaBell, FaChessRook, FaCoins as FaCoins2, FaWheelchair,
  FaDragon, FaHistory, FaShieldAlt, FaCheck, FaTimes, FaChevronDown, FaStar,
  FaDiscord, FaTelegram, FaTwitter, FaQuestionCircle
} from "react-icons/fa";
import Image from "next/image";
import Header from "@/components/Header";

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
              className="rounded-xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Supported Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center"
              >
                {game.icon}
                <h3 className="text-lg font-semibold mt-3 mb-1">{game.name}</h3>
                <p className="text-yellow-500 font-medium">Win Rate: {game.win}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Smart Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {miniTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                {tool.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{tool.title}</h3>
                <p className="text-slate-400">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-slate-300">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-800/50 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FaGift className="text-yellow-500 text-2xl" />
              <span className="text-xl font-bold">StakeKid</span>
            </div>
            <div className="flex space-x-6">
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
          <div className="mt-8 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} StakeKid. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}