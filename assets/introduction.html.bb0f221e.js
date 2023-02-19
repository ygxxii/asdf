import{_ as s,r as a,o as d,c as i,a as e,b as n,d as t,f as l,e as r}from"./app.cdf89d63.js";const c={},h=r('<h1 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h1><p><code>asdf</code> 是一个工具版本管理器。所有的工具版本定义都包含在一个文件（<code>.tool-versions</code>）中，你可以将配置文件放在项目的 Git 存储库中以便于和团队其他成员共享，从而确保每个人都使用<strong>完全</strong>相同的工具版本。</p><p>传统工作方式需要多个命令行版本管理器，而且每个管理器都有其不同的 API、配置文件和实现方式（比如，<code>$PATH</code> 操作、垫片、环境变量等等）。<code>asdf</code> 提供单个交互方式和配置文件来简化开发工作流程，并可通过简单的插件接口扩展到所有工具和运行环境。</p><h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的</h2>',4),_=e("code",null,"asdf",-1),u={href:"https://zh.wikipedia.org/wiki/%E5%9E%AB%E7%89%87_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"asdf",-1),p=e("code",null,".tool-versions",-1),m=e("h2",{id:"相关项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关项目","aria-hidden":"true"},"#"),n(" 相关项目")],-1),b=e("h3",{id:"nvm-n-rbenv-等",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nvm-n-rbenv-等","aria-hidden":"true"},"#"),n(" nvm / n / rbenv 等")],-1),v={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/rbenv/rbenv",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("code",null,"asdf"),n(" 非常相似，目的是在工具/运行环境版本管理领域竞争。"),e("code",null,"asdf"),n(" 的区别之处在于它的插件系统，它消除了每个工具/运行环境对管理工具的需求、每个管理工具的不同命令以及存储库中不同的"),e("code",null,"*-版本"),n("文件。")],-1),E=e("h3",{id:"direnv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#direnv","aria-hidden":"true"},"#"),n(" direnv")],-1),w=e("blockquote",null,[e("p",null,"使用可以根据当前目录加载和卸载环境变量的新功能增强现有 shell。")],-1),N=e("code",null,"asdf",-1),S={href:"https://github.com/asdf-community/asdf-direnv",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"asdf-direnv",-1),B=e("code",null,"asdf",-1),O={href:"https://direnv.net/",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),n(" Homebrew")],-1),V=e("blockquote",null,[e("p",null,"macOS（或者 Linux）上缺失包的管理器")],-1),H=e("p",null,[n("Homebrew 管理你的软件包及其上游依赖。"),e("code",null,"asdf"),n(" 不管理上游依赖，它不是包管理器。这个责任取决于用户，尽管我们试图保持依赖关系列表很小。")],-1),T={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"nixos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nixos","aria-hidden":"true"},"#"),n(" NixOS")],-1),I=e("blockquote",null,[e("p",null,"Nix 是一种采用独特方法进行软件包管理和系统配置的工具")],-1),L=e("p",null,[n("NixOS 旨在通过管理每个工具的整个依赖关系树中软件包的确切版本来构建真正可重复的环境，有些是 "),e("code",null,"asdf"),n(" 无法做到的。NixOS 使用自己的编程语言、许多命令行工具和超过 60,000 个包的包集合来实现这一点。")],-1),P=e("p",null,[n("同样，"),e("code",null,"asdf"),n(" 不管理上游依赖，并且它不是一个包管理器。")],-1),C={href:"https://nixos.org/guides/how-nix-works.html",target:"_blank",rel:"noopener noreferrer"},j=r('<h2 id="为什么使用-asdf" tabindex="-1"><a class="header-anchor" href="#为什么使用-asdf" aria-hidden="true">#</a> 为什么使用 asdf？</h2><p><code>asdf</code> 确保团队可以使用<strong>完全</strong>相同的工具版本，通过插件系统支持<strong>很多</strong>工具，以及作为 Shell 配置中包含的单个 <strong>Shell</strong> 脚本的 <em>简单性和熟悉性</em> 。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p><code>asdf</code> 并不打算成为一个系统包管理器。它是一个工具版本管理器。仅仅因为你可以为任何工具创建插件并使用 <code>asdf</code> 管理其版本，并不意味着这是这个特定工具的最佳实践方案。</p></div>',3);function z(D,F){const o=a("ExternalLinkIcon");return d(),i("div",null,[h,e("p",null,[n("一旦 "),_,n(" 核心在 Shell 配置中设置好之后，你可以安装插件来管理特定的工具。当通过插件安装工具时，安装的可执行程序会为每个可执行程序创建 "),e("a",u,[n("垫片"),t(o)]),n("。当你尝试运行其中一个可执行程序时，将运行垫片，从而允许 "),f,n(" 识别 "),p,n(" 文件中设置的工具版本并执行该版本。")]),m,b,e("p",null,[e("a",v,[n("nvm"),t(o)]),n(", "),e("a",g,[n("n"),t(o)]),n(" 和 "),e("a",x,[n("rbenv"),t(o)]),n(" 等工具都是用 Shell 脚本写的，这些脚本能为工具安装的可执行程序创建垫片。")]),k,l(" ### pyenv\n\nTODO: someone with Python background expand on this\n\n`asdf` has some similarities to `pyenv` but is missing some key features. The `asdf` team is looking at introducing some of these `pyenv` specific features, though no roadmap or timeline is available. "),E,w,e("p",null,[N,n(" 不管理环境变量，但是有一个插件 "),e("a",S,[A,t(o)]),n(" 可以用来集成 direnv 的特性到 "),B,n(" 中。")]),e("p",null,[n("请查看 "),e("a",O,[n("direnv 文档"),t(o)]),n(" 了解更多。")]),y,V,H,e("p",null,[n("请查看 "),e("a",T,[n("Homebrew 文档"),t(o)]),n(" 了解更多。")]),q,I,L,P,e("p",null,[n("请查看 "),e("a",C,[n("NixOS 文档"),t(o)]),n(" 了解更多。")]),j])}const $=s(c,[["render",z],["__file","introduction.html.vue"]]);export{$ as default};
