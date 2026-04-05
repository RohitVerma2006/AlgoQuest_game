import React, { useState } from 'react';
import { libraryTopics } from '../data/library';
import { BookOpen, Code, Lightbulb, CheckCircle, XCircle, ArrowRight, Layers, Box, Share2, GitCommit, Network, Repeat, TerminalSquare } from 'lucide-react';

const VisualRepresentation = ({ type }) => {
  switch (type) {
    case 'array':
      return (
        <div className="flex items-center justify-center space-x-1 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {[10, 20, 30, 40, 50].map((num, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{i}</span>
              <div className="w-12 h-12 flex items-center justify-center border-2 border-indigo-500 bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 font-bold rounded">
                {num}
              </div>
            </div>
          ))}
        </div>
      );
    case 'string':
      return (
        <div className="flex items-center justify-center space-x-1 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {['H', 'e', 'l', 'l', 'o'].map((char, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{i}</span>
              <div className="w-10 h-10 flex items-center justify-center border-2 border-pink-500 bg-white dark:bg-gray-700 text-pink-700 dark:text-pink-300 font-bold rounded-sm">
                '{char}'
              </div>
            </div>
          ))}
        </div>
      );
    case 'linkedlist':
      return (
        <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
          {[1, 2, 3].map((num, i) => (
            <React.Fragment key={i}>
              <div className="flex border-2 border-emerald-500 rounded bg-white dark:bg-gray-700 shadow-sm">
                <div className="px-3 py-2 border-r-2 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold">{num}</div>
                <div className="px-2 py-2 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500">●</div>
              </div>
              {i < 2 ? (
                <ArrowRight className="mx-2 text-emerald-500" size={24} />
              ) : (
                <>
                  <ArrowRight className="mx-2 text-gray-400" size={24} />
                  <span className="text-gray-500 dark:text-gray-400 font-mono">null</span>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      );
    case 'stack':
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="border-b-4 border-l-4 border-r-4 border-amber-500 p-2 rounded-b-lg w-32 flex flex-col-reverse gap-2">
            {[1, 2, 3].map((num, i) => (
              <div key={i} className="w-full py-2 flex items-center justify-center bg-amber-200 dark:bg-amber-900/50 border-2 border-amber-500 text-amber-800 dark:text-amber-200 font-bold rounded">
                {num}
              </div>
            ))}
          </div>
          <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Top is {3}</span>
        </div>
      );
    case 'queue':
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-blue-500">Out (Front)</span>
            <ArrowRight className="text-blue-500" size={20} />
            <div className="flex border-t-4 border-b-4 border-blue-500 p-2 gap-2">
              {[1, 2, 3, 4].map((num, i) => (
                <div key={i} className="w-10 h-10 flex items-center justify-center bg-blue-200 dark:bg-blue-900/50 border-2 border-blue-500 text-blue-800 dark:text-blue-200 font-bold rounded">
                  {num}
                </div>
              ))}
            </div>
            <ArrowRight className="text-blue-500" size={20} />
            <span className="text-sm font-bold text-blue-500">In (Rear)</span>
          </div>
        </div>
      );
    case 'tree':
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-10">10</div>
            <div className="flex w-32 justify-between -mt-2">
              <div className="w-1/2 h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg"></div>
              <div className="w-1/2 h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg"></div>
            </div>
            <div className="flex w-40 justify-between">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-10">5</div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-10">15</div>
            </div>
          </div>
        </div>
      );
    case 'graph':
      return (
        <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg relative h-48">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">A</div>
          <div className="absolute bottom-8 left-1/3 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">B</div>
          <div className="absolute bottom-8 right-1/3 translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">C</div>
          
          {/* SVG Lines for edges */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <line x1="50%" y1="48" x2="33%" y2="144" stroke="#a855f7" strokeWidth="2" />
            <line x1="50%" y1="48" x2="66%" y2="144" stroke="#a855f7" strokeWidth="2" />
            <line x1="33%" y1="144" x2="66%" y2="144" stroke="#a855f7" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'recursion':
      return (
        <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="p-4 border-2 border-rose-500 bg-rose-50 dark:bg-rose-900/20 rounded flex items-center justify-center">
            <div className="p-4 border-2 border-rose-400 bg-rose-100 dark:bg-rose-800/30 rounded flex items-center justify-center">
              <div className="p-4 border-2 border-rose-300 bg-rose-200 dark:bg-rose-700/40 rounded flex items-center justify-center font-bold text-rose-700 dark:text-rose-200">
                Base Case
              </div>
            </div>
          </div>
        </div>
      );
    case 'function':
      return (
        <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg gap-4">
          <div className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded font-mono text-sm dark:text-slate-200">Input</div>
          <ArrowRight className="text-slate-400" />
          <div className="px-6 py-4 bg-indigo-500 text-white rounded-lg font-bold shadow-lg flex items-center gap-2">
            <TerminalSquare size={20} />
            Process
          </div>
          <ArrowRight className="text-slate-400" />
          <div className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded font-mono text-sm dark:text-slate-200">Output</div>
        </div>
      );
    default:
      return null;
  }
};

const LibraryPage = () => {
  const [activeTopicId, setActiveTopicId] = useState(libraryTopics[0].id);
  const [activeLanguage, setActiveLanguage] = useState('javascript');

  const activeTopic = libraryTopics.find(t => t.id === activeTopicId);

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="bg-white dark:bg-[#242424] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden sticky top-24">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a]">
            <h2 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
              <BookOpen className="text-indigo-500" size={20} />
              Topics
            </h2>
          </div>
          <div className="p-2 flex flex-col gap-1">
            {libraryTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTopicId === topic.id
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {topic.id === 'arrays' && <Box size={18} />}
                {topic.id === 'strings' && <span className="font-mono font-bold text-sm w-[18px] text-center">" "</span>}
                {topic.id === 'recursion' && <Repeat size={18} />}
                {topic.id === 'functions' && <TerminalSquare size={18} />}
                {topic.id === 'linkedlist' && <Share2 size={18} />}
                {topic.id === 'stack' && <Layers size={18} />}
                {topic.id === 'queue' && <ArrowRight size={18} />}
                {topic.id === 'tree' && <Network size={18} />}
                {topic.id === 'graph' && <GitCommit size={18} />}
                {topic.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {activeTopic && (
          <div className="bg-white dark:bg-[#242424] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-800">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{activeTopic.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeTopic.definition}
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              
              {/* Visual Representation */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="text-amber-500" />
                  Visual Representation
                </h3>
                <VisualRepresentation type={activeTopic.visualType} />
              </section>

              {/* Analogy */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-Life Analogy</h3>
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-amber-900 dark:text-amber-200 italic">
                    "{activeTopic.analogy}"
                  </p>
                </div>
              </section>

              {/* Uses / Applications */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Uses & Applications</h3>
                <ul className="space-y-2">
                  {activeTopic.uses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                      {use}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    {activeTopic.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 text-sm">
                        <span>+</span> {adv}
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-900/30">
                  <h3 className="text-lg font-bold text-rose-800 dark:text-rose-400 mb-3 flex items-center gap-2">
                    <XCircle size={20} />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    {activeTopic.disadvantages.map((dis, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-rose-700 dark:text-rose-300 text-sm">
                        <span>-</span> {dis}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Code Snippets */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code className="text-indigo-500" />
                  Code Snippets
                </h3>
                
                <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800">
                  <div className="flex border-b border-gray-800 bg-[#2d2d2d]">
                    {['javascript', 'c', 'cpp', 'python'].map(lang => (
                      <button
                        key={lang}
                        onClick={() => setActiveLanguage(lang)}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${
                          activeLanguage === lang 
                            ? 'bg-[#1e1e1e] text-indigo-400 border-t-2 border-indigo-500' 
                            : 'text-gray-400 hover:text-gray-200 hover:bg-[#363636] border-t-2 border-transparent'
                        }`}
                      >
                        {lang === 'javascript' ? 'JavaScript' : lang === 'cpp' ? 'C++' : lang === 'c' ? 'C' : 'Python'}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-300 font-mono text-sm">
                      <code>{activeTopic.code[activeLanguage]}</code>
                    </pre>
                  </div>
                </div>
              </section>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
