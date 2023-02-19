import{_ as p,r as i,o as r,c,a as s,b as a,d as n,w as l,e as o}from"./app.cdf89d63.js";const d={},h=s("h1",{id:"plugins",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),a(" Plugins")],-1),u=s("p",null,[a("Plugins are how "),s("code",null,"asdf"),a(" knows to handle different tools like Node.js, Ruby, Elixir etc.")],-1),g=o(`<h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h2><p>Add plugins via their Git URL:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>
<span class="line"></span></code></pre></div><p>or via the short-name association in the plugins repository:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefer the longer <code>git-url</code> method as it is independent of the short-name repo.</p></div><h2 id="list-installed" tabindex="-1"><a class="header-anchor" href="#list-installed" aria-hidden="true">#</a> List Installed</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java</span></span>
<span class="line"><span style="color:#88846F;"># nodejs</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="list-all-in-short-name-repository" tabindex="-1"><a class="header-anchor" href="#list-all-in-short-name-repository" aria-hidden="true">#</a> List All in Short-name Repository</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>
<span class="line"></span></code></pre></div>`,11),f={href:"https://github.com/asdf-vm/asdf-plugins",target:"_blank",rel:"noopener noreferrer"},y=o(`<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>
<span class="line"></span></code></pre></div><p>If you want to update a specific package, just say so.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>
<span class="line"></span></code></pre></div>`,4),m=s("em",null,"latest commit",-1),_=s("em",null,"default branch",-1),F=s("em",null,"origin",-1),b={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> Remove</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>
<span class="line"></span></code></pre></div><p>Removing a plugin will remove all installations of the tool made with the plugin. This can be used as a shorthand for cleaning/pruning many unused versions of a tool.</p><h2 id="syncing-the-asdf-short-name-repository" tabindex="-1"><a class="header-anchor" href="#syncing-the-asdf-short-name-repository" aria-hidden="true">#</a> Syncing the asdf Short-name Repository</h2><p>The short-name repo is synced to your local machine and periodically refreshed. This method to determine a sync is as follows:</p>`,5),k=s("li",null,[a("sync events are triggered by commands: "),s("ul",null,[s("li",null,[s("code",null,"asdf plugin add <name>")]),s("li",null,[s("code",null,"asdf plugin list all")])])],-1),x=s("code",null,"disable_plugin_short_name_repository",-1),w=s("code",null,"yes",-1),R=s("code",null,"X",-1),S=s("code",null,"X",-1),j=s("code",null,"60",-1),L=s("code",null,".asdfrc",-1),I=s("code",null,"plugin_repository_last_check_duration",-1);function P(N,T){const e=i("RouterLink"),t=i("ExternalLinkIcon");return r(),c("div",null,[h,u,s("p",null,[a("See "),n(e,{to:"/plugins/create.html"},{default:l(()=>[a("Creating Plugins")]),_:1}),a(" for the plugin API used to support more tools.")]),g,s("p",null,[a("See "),s("a",f,[a("Plugins Shortname Index"),n(t)]),a(" for the entire short-name list of plugins.")]),y,s("p",null,[a("This update will fetch the "),m,a(" on the "),_,a(" of the "),F,a(" of the plugin repository. Versioned plugins and updates are currently being developed ("),s("a",b,[a("#916"),n(t)]),a(")")]),v,s("ul",null,[k,s("li",null,[a("if configuration option "),x,a(" is set to "),w,a(", then sync is aborted early. See the "),n(e,{to:"/manage/configuration.html"},{default:l(()=>[a("asdf config docs")]),_:1}),a(" for more.")]),s("li",null,[a("if there has not been a synchronization in the last "),R,a(" minutes then the sync will occur. "),s("ul",null,[s("li",null,[S,a(" defaults to "),j,a(", but can be configured in your "),L,a(" via the "),I,a(" option. See the "),n(e,{to:"/manage/configuration.html"},{default:l(()=>[a("asdf config docs")]),_:1}),a(" for more.")])])])])])}const A=p(d,[["render",P],["__file","plugins.html.vue"]]);export{A as default};
