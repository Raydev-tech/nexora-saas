import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Command,
  LayoutDashboard,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: LayoutDashboard,
    title: "Project management",
    description:
      "Keep every project organized with clear tasks, deadlines, and priorities.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Bring your team together and make communication part of the workflow.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    description:
      "See what's moving, what's delayed, and what needs attention.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Workflow,
    title: "Simple workflows",
    description:
      "Create a process that fits your team instead of changing how you work.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Clock3,
    title: "Time management",
    description:
      "Stay on top of deadlines and give important work the attention it deserves.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Organized workspace",
    description:
      "Keep your project information in one clear and accessible workspace.",
    color: "bg-rose-50 text-rose-600",
  },
];

const questions = [
  {
    question: "What is TaskFlow?",
    answer:
      "TaskFlow is a project management concept designed to help teams organize tasks, collaborate, and track their progress in one workspace.",
  },
  {
    question: "Can I use TaskFlow with my team?",
    answer:
      "Yes. The design demonstrates a team workspace where members can organize projects and collaborate together.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "The pricing section includes a sample free plan. This landing page is a frontend demo, so subscriptions are not connected to a payment service.",
  },
  {
    question: "Can I use TaskFlow on mobile?",
    answer:
      "The landing page is responsive and designed to work on desktop, tablet, and mobile screens.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="mb-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
        {eyebrow}
      </span>

      <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Features", "#features"],
    ["How it works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <nav className="container-width flex h-[76px] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <Command size={22} />
          </span>
          <span className="font-['Manrope'] text-xl font-extrabold tracking-tight text-slate-900">
            TaskFlow<span className="text-indigo-600">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:text-indigo-600"
          >
            Sign in
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Get started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="container-width flex flex-col gap-1 py-4">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DashboardPreview() {
  const tasks = [
    {
      name: "Design new landing page",
      person: "AM",
      color: "bg-violet-100 text-violet-700",
      status: "In progress",
      statusColor: "bg-amber-50 text-amber-700",
    },
    {
      name: "Review website content",
      person: "JD",
      color: "bg-sky-100 text-sky-700",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-700",
    },
    {
      name: "Prepare project report",
      person: "SK",
      color: "bg-rose-100 text-rose-700",
      status: "In review",
      statusColor: "bg-indigo-50 text-indigo-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="dashboard-shadow mx-auto mt-16 max-w-[950px] overflow-hidden rounded-2xl border border-slate-200 bg-white text-left sm:rounded-3xl"
    >
      <div className="flex min-h-[510px]">
        <aside className="hidden w-[205px] shrink-0 border-r border-slate-100 bg-slate-50/80 p-5 sm:block">
          <div className="mb-9 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Command size={17} />
            </div>
            <span className="font-bold text-slate-800">TaskFlow</span>
          </div>

          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          <div className="space-y-1">
            {[
              ["Overview", LayoutDashboard],
              ["My tasks", CheckCircle2],
              ["Messages", MessageSquare],
              ["Team", Users],
            ].map(([label, Icon], index) => (
              <div
                key={label}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold ${
                  index === 0
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-500"
                }`}
              >
                <Icon size={15} /> {label}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-indigo-100 bg-white p-3">
            <Sparkles className="mb-2 text-indigo-600" size={18} />
            <p className="text-xs font-bold text-slate-800">Upgrade your work</p>
            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Make more room for your best ideas.
            </p>
            <div className="mt-3 rounded-lg bg-indigo-600 py-2 text-center text-[10px] font-bold text-white">
              Explore plans
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-7">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Monday, October 26</p>
              <h3 className="mt-1 font-['Manrope'] text-xl font-extrabold text-slate-900 sm:text-2xl">
                Good morning, Alex 👋
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Here's what's happening with your projects.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg border border-slate-200 p-2 text-slate-500 sm:block">
                <Bell size={17} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                AL
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {[
              ["Total projects", "12", "+2 this month", "text-indigo-600"],
              ["Tasks completed", "48", "+12 this week", "text-emerald-600"],
              ["Team members", "08", "Working together", "text-violet-600"],
            ].map(([label, value, note, color]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-100 p-3 sm:p-4"
              >
                <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                  {label}
                </p>
                <p className="mt-2 font-['Manrope'] text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {value}
                </p>
                <p className={`mt-1 text-[9px] font-semibold sm:text-[10px] ${color}`}>
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-100 p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Project overview
                </h4>
                <p className="mt-1 text-[10px] text-slate-400">
                  Your team's weekly progress
                </p>
              </div>
              <button className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500">
                This week
              </button>
            </div>

            <div className="flex h-28 items-end justify-between gap-2 sm:h-36 sm:gap-4">
              {[42, 65, 50, 83, 62, 92, 72, 100, 78, 88, 66, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className={`w-full rounded-t-md ${
                        index === 7 ? "bg-indigo-600" : "bg-indigo-100"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-slate-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">
                Recent tasks
              </h4>
              <button className="text-[10px] font-bold text-indigo-600">
                View all
              </button>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.name}
                  className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 last:border-0"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-slate-300"
                    />
                    <span className="truncate text-[10px] font-semibold text-slate-600 sm:text-xs">
                      {task.name}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={`hidden rounded-md px-2 py-1 text-[9px] font-semibold sm:inline ${task.statusColor}`}
                    >
                      {task.status}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ${task.color}`}
                    >
                      {task.person}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden bg-[#fafaff] pb-20 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="container-width relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm"
        >
          <Sparkles size={14} />
          A simpler way to manage your work
          <ArrowRight size={13} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl font-['Manrope'] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Bring your team together.
          <br />
          <span className="gradient-text">Get more done.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
        >
          Plan projects, organize tasks, and collaborate with your team in one
          beautifully simple workspace. Less confusion, more meaningful work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            Get started for free <ArrowRight size={17} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            See how it works
          </a>
        </motion.div>

        <p className="mt-5 text-xs font-medium text-slate-400">
          Simple workspace · Clear priorities · Better teamwork
        </p>

        <DashboardPreview />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="container-width py-24 sm:py-28">
      <SectionHeading
        eyebrow="Everything in one place"
        title="Tools that make work feel easier."
        description="Everything your team needs to stay organized, communicate clearly, and keep projects moving forward."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
              >
                <Icon size={23} />
              </div>

              <h3 className="font-['Manrope'] text-lg font-extrabold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>

              <a
                href="#how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition group-hover:gap-3"
              >
                Learn more <ArrowRight size={15} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="container-width grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-5 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
            Stay in control
          </span>

          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Your projects.
            <br />
            Your priorities.
            <br />
            <span className="gradient-text">One clear view.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
            No more jumping between tools to find out what's happening. Give
            your team a shared space where every task has a purpose and every
            project has direction.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "See project progress at a glance",
              "Know who is responsible for each task",
              "Keep deadlines and priorities visible",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#get-started"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-600"
          >
            Explore TaskFlow <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-indigo-200/50 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs text-slate-400">Workspace / Projects</p>
                <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                  Website redesign
                </h3>
              </div>
              <MoreHorizontal className="text-slate-400" />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Project progress</p>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">
                  76%
                </p>
              </div>
              <div className="flex -space-x-2">
                {["bg-violet-200", "bg-sky-200", "bg-amber-200"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-slate-700 ${color}`}
                    >
                      {["A", "J", "M"][index]}
                    </div>
                  )
                )}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-[10px] font-bold text-white">
                  +2
                </div>
              </div>
            </div>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "76%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full rounded-full bg-indigo-600"
              />
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Research and planning", true, "bg-emerald-100 text-emerald-700"],
                ["Wireframes and design", true, "bg-emerald-100 text-emerald-700"],
                ["Frontend development", false, "bg-indigo-100 text-indigo-700"],
                ["Testing and launch", false, "bg-slate-100 text-slate-500"],
              ].map(([name, done, color]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${color}`}
                    >
                      {done ? <Check size={15} /> : <Clock3 size={15} />}
                    </span>
                    <span className="truncate text-xs font-semibold text-slate-700 sm:text-sm">
                      {name}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {done ? "Done" : "In progress"}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-indigo-50 p-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <Zap size={17} />
                <span className="text-xs font-bold">Great progress!</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-indigo-600">
                Your team is moving steadily toward the project deadline.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Set up your workspace and bring your projects into one organized place.",
    },
    {
      number: "02",
      title: "Invite your team",
      description:
        "Bring everyone together and make responsibilities clear from the start.",
    },
    {
      number: "03",
      title: "Make progress",
      description:
        "Track tasks, share updates, and move your projects forward with confidence.",
    },
  ];

  return (
    <section id="how-it-works" className="container-width py-24 sm:py-28">
      <SectionHeading
        eyebrow="Simple by design"
        title="Three steps to better teamwork."
        description="Getting started should not be complicated. TaskFlow keeps the process simple."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative rounded-2xl border border-slate-200 p-7"
          >
            <span className="font-['Manrope'] text-5xl font-extrabold text-indigo-100">
              {step.number}
            </span>
            <h3 className="mt-6 text-lg font-extrabold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {step.description}
            </p>
            {index !== 2 && (
              <ArrowRight
                className="absolute right-7 top-10 hidden text-indigo-300 md:block"
                size={22}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "For individuals and small projects.",
      monthly: 0,
      yearly: 0,
      features: [
        "Up to 3 projects",
        "Basic task management",
        "Personal workspace",
        "Community support",
      ],
    },
    {
      name: "Pro",
      description: "For growing teams that need more.",
      monthly: 12,
      yearly: 9,
      popular: true,
      features: [
        "Unlimited projects",
        "Advanced project views",
        "Team collaboration",
        "Progress reports",
        "Priority support",
      ],
    },
    {
      name: "Business",
      description: "For teams managing bigger workflows.",
      monthly: 29,
      yearly: 24,
      features: [
        "Everything in Pro",
        "Advanced team controls",
        "Custom workflows",
        "Dedicated support",
        "Team performance reports",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-28">
      <div className="container-width">
        <SectionHeading
          eyebrow="Simple pricing"
          title="A plan for every stage."
          description="Choose a plan that works for your team. Upgrade when you're ready."
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-semibold ${!yearly ? "text-slate-900" : "text-slate-400"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle yearly pricing"
            aria-pressed={yearly}
            className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-indigo-600" : "bg-slate-300"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${yearly ? "left-6" : "left-1"}`}
            />
          </button>
          <span
            className={`text-sm font-semibold ${yearly ? "text-slate-900" : "text-slate-400"}`}
          >
            Yearly
          </span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
            Save with yearly
          </span>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                plan.popular
                  ? "border-indigo-500 shadow-2xl shadow-indigo-100"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-extrabold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
                {plan.description}
              </p>

              <div className="my-7 flex items-end gap-1">
                <span className="font-['Manrope'] text-4xl font-extrabold text-slate-900">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="pb-1 text-sm text-slate-400">/ user / month</span>
              </div>

              <a
                href="#get-started"
                className={`mb-7 block rounded-xl py-3.5 text-center text-sm font-bold transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                Choose {plan.name}
              </a>

              <div className="border-t border-slate-100 pt-6">
                <p className="mb-4 text-xs font-bold text-slate-800">
                  What's included:
                </p>
                <ul className="space-y-4">
                  {plan.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-500"
                    >
                      <Check size={16} className="shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-slate-400">
          Demo pricing for this frontend project. No subscriptions or payments
          are connected.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote:
        "The clean layout makes it easy to understand what needs to happen next. Everything feels organized.",
      name: "Jordan Lee",
      role: "Product Designer",
      initials: "JL",
      color: "bg-sky-100 text-sky-700",
    },
    {
      quote:
        "Having tasks and project updates in one place makes team coordination feel much simpler.",
      name: "Taylor Morgan",
      role: "Project Coordinator",
      initials: "TM",
      color: "bg-violet-100 text-violet-700",
    },
    {
      quote:
        "A straightforward workspace that puts clarity first. The design is simple without feeling empty.",
      name: "Alex Carter",
      role: "Creative Lead",
      initials: "AC",
      color: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <section className="container-width py-24 sm:py-28">
      <SectionHeading
        eyebrow="Made for teams"
        title="A clearer way to work together."
        description="A sample look at the kind of experience TaskFlow is designed to deliver."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <div className="mb-5 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <p className="text-sm leading-7 text-slate-600">
              "{review.quote}"
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${review.color}`}
              >
                {review.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  {review.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">
        Illustrative testimonials for the demo design, not verified customer
        reviews.
      </p>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-slate-50 py-24 sm:py-28">
      <div className="container-width">
        <SectionHeading
          eyebrow="Got questions?"
          title="Frequently asked questions."
          description="A few answers to help you understand the TaskFlow experience."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-800 sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="get-started" className="container-width py-24 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-indigo-100">
            <Sparkles size={14} /> Your next chapter starts here
          </span>

          <h2 className="mt-6 font-['Manrope'] text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Make room for better work.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
            Bring your projects, people, and priorities together. Start with a
            clearer way to work.
          </p>

          <a
            href="mailto:hello@example.com?subject=TaskFlow%20Demo%20Enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1 hover:bg-indigo-50"
          >
            Get in touch <ArrowRight size={17} />
          </a>
          <p className="mt-4 text-xs text-indigo-200">
            Demo contact link — replace with your own contact details.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-width py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Command size={19} />
              </span>
              <span className="font-['Manrope'] text-xl font-extrabold text-slate-900">
                TaskFlow<span className="text-indigo-600">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              A simple workspace concept for teams that want to stay organized,
              collaborate better, and make meaningful progress.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-slate-900">
              Explore
            </h4>
            <div className="space-y-3">
              {[
                ["Features", "#features"],
                ["How it works", "#how-it-works"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-sm text-slate-500 transition hover:text-indigo-600"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-slate-900">
              Get started
            </h4>
            <div className="space-y-3">
              <a
                href="#get-started"
                className="block text-sm text-slate-500 transition hover:text-indigo-600"
              >
                Contact
              </a>
              <a
                href="#pricing"
                className="block text-sm text-slate-500 transition hover:text-indigo-600"
              >
                Plans
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TaskFlow. Internship demo project.
          </p>
          <p className="text-xs text-slate-400">
            Designed and built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}