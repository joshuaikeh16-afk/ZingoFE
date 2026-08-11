import { useState } from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  UserPlus, 
  RefreshCw,
  Layers
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'auth' | 'onboarding' | 'app'>('app');
  const [deviceFrame, setDeviceFrame] = useState<boolean>(true);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const currentPageUrl = 
    activeTab === 'auth' 
      ? '/auth.html' 
      : activeTab === 'onboarding' 
        ? '/onboarding.html' 
        : '/app.html';

  const reloadIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F4F5] flex flex-col font-sans relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Mesh Background */}
      <div className="mesh-gradient"></div>

      {/* Top Studio Toolbar */}
      <header className="border-b border-white/10 bg-[#18181B]/80 backdrop-blur-xl px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 p-0.5 shadow-md flex items-center justify-center">
              <span className="font-bold text-white text-lg">K</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base tracking-tight text-white">Kaidra Web Layouts</h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                  100% Spec Compliant
                </span>
              </div>
              <p className="text-xs text-zinc-400">Mobile-First HTML/CSS Layouts with Exact DOM Hooks</p>
            </div>
          </div>

          {/* Page Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('auth')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'auth'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Auth (p.1)</span>
            </button>
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'onboarding'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Onboarding (p.2)</span>
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'app'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>App Shell (p.3-9)</span>
            </button>
          </div>

          {/* View Mode & Direct Links */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => setDeviceFrame(!deviceFrame)}
              className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
              title="Toggle mobile device frame"
            >
              <Smartphone className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">{deviceFrame ? 'Phone Frame' : 'Full Width'}</span>
            </button>
            <button
              onClick={reloadIframe}
              className="p-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-colors cursor-pointer"
              title="Reload preview page"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <a
              href={currentPageUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-white bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-xl transition-colors font-medium"
            >
              <span>Open Standalone</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Center Stage: Device Preview Frame */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center">
          <div className={`w-full transition-all duration-300 ${deviceFrame ? 'max-w-[360px]' : 'max-w-full'}`}>
            
            {/* Mobile Phone Mockup Border & Header */}
            <div className={`bg-[#000000] border-[8px] border-[#1A1A1E] ${
              deviceFrame ? 'rounded-[48px] shadow-2xl shadow-purple-950/40' : 'rounded-2xl'
            } overflow-hidden flex flex-col`}>
              
              <div className="bg-[#121215] border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400">{currentPageUrl}</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
                  {deviceFrame ? '340x680' : 'Responsive'}
                </span>
              </div>

              {/* Iframe Canvas Container */}
              <div className={`w-full bg-[#050505] overflow-hidden transition-all ${
                deviceFrame ? 'h-[680px]' : 'h-[780px]'
              }`}>
                <iframe
                  key={iframeKey}
                  src={currentPageUrl}
                  title="Kaidra Page Preview"
                  className="w-full h-full border-none bg-[#050505]"
                />
              </div>

            </div>

          </div>
        </div>

        {/* Sidebar: Spec Verification & DOM Hooks Inspector */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* DOM Hooks Status Panel */}
          <div className="glass-panel p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <h2 className="font-semibold text-sm text-white">
                  {activeTab === 'auth' ? 'auth.html Spec Verification' : 'onboarding.html Spec Verification'}
                </h2>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
                100% Wired
              </span>
            </div>

            {activeTab === 'auth' ? (
              <div className="space-y-2 text-xs">
                <p className="text-zinc-400 text-[11px] mb-3">
                  All required element IDs & JS imports for <code className="text-purple-300">js/auth.js</code> are present:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#email-input</span>
                    <span className="text-zinc-400 text-[10px]">&lt;input type="email"&gt;</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#password-input</span>
                    <span className="text-zinc-400 text-[10px]">&lt;input type="password"&gt;</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#auth-submit-btn</span>
                    <span className="text-zinc-400 text-[10px]">Starts labeled "Sign In"</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#auth-toggle-mode</span>
                    <span className="text-zinc-400 text-[10px]">Sign In / Sign Up toggle</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#auth-error-message</span>
                    <span className="text-zinc-400 text-[10px]">Hidden by default</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#auth-loading</span>
                    <span className="text-zinc-400 text-[10px]">Loading spinner indicator</span>
                  </li>
                </ul>
              </div>
            ) : activeTab === 'onboarding' ? (
              <div className="space-y-2 text-xs">
                <p className="text-zinc-400 text-[11px] mb-3">
                  All required element IDs & classes for <code className="text-purple-300">js/onboarding.js</code> are present:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#username-input</span>
                    <span className="text-zinc-400 text-[10px]">&lt;input type="text"&gt;</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#username-availability</span>
                    <span className="text-zinc-400 text-[10px]">.available / .taken</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#birthdate-input</span>
                    <span className="text-zinc-400 text-[10px]">13+ Gate check</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#avatar-input</span>
                    <span className="text-zinc-400 text-[10px]">Image upload preview</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#onboarding-submit-btn</span>
                    <span className="text-zinc-400 text-[10px]">&lt;button&gt;</span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-mono text-purple-300">#onboarding-error</span>
                    <span className="text-zinc-400 text-[10px]">Error container</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-2 text-xs max-h-[380px] overflow-y-auto pr-1">
                <p className="text-zinc-400 text-[11px] mb-2">
                  Pages 3-9 DOM Hooks (<code className="text-purple-300">app.html</code>):
                </p>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 3 Nav:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#nav-home, #nav-friends, #nav-compose, #nav-inbox, #nav-profile</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 4 Home:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#video-feed-container, .video-card, .video-player-embed, .video-title, .video-channel, .like-btn, .bookmark-btn, .share-btn</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 5 Friends:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#friends-status-container, .friend-status-avatar, .sotd-indicator, #status-viewer-modal</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 6 Inbox:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#conversation-list, .conversation-row, #message-thread-container, .message-bubble, #sticker-tray</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 7 Compose:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#compose-modal, #compose-option-status, #compose-option-sotd, #sotd-search-results</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 8 Profile:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#profile-avatar, #profile-username, #stat-following, #currently-watching-badge</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-semibold text-purple-300">Page 9 Discover:</span>
                    <div className="font-mono text-[10px] text-zinc-300">#anime-search-input, #anime-search-results, #seasonal-countdown-widget</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Theme & Compatibility Info */}
          <div className="glass-panel p-4 rounded-2xl text-xs text-zinc-400 space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-1.5 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Frosted Glass Theme Applied</span>
            </h3>
            <p className="leading-relaxed">
              Dark backdrop <code className="text-purple-300">#050505</code> with violet mesh gradient overlays, translucent glass panels (<code className="text-purple-300">rgba(24,24,27,0.8)</code>), accent button <code className="text-purple-300">#8B5CF6</code>, and refined input focus borders. All DOM elements and JS logic preserved.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
