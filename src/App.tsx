import { useState } from 'react'
const INK='#0C1B24', SKY='#3A86B8'
export default function App(){
  const [screen,setScreen]=useState<'web'|'settings'>('web')
  const [url,setUrl]=useState('https://hermes.example.com')
  const [isLoading,setLoading]=useState(false)
  const [isOffline,setOffline]=useState(false)
  const [isReconnecting,setReconnecting]=useState(false)
  const [err,setErr]=useState<string|null>(null)
  const [poll,setPoll]=useState(5)
  const [bgReconnect,setBg]=useState(true)
  const [vpn,setVpn]=useState(false)

  const load=()=>{ setLoading(true); setErr(null); setTimeout(()=>{ setLoading(false); if(!url.startsWith('http')) setErr('Invalid URL'); },800) }

  return (
    <div style={{background:INK,color:'#fff',minHeight:'100vh',fontFamily:'system-ui'}}>
      {/* TopBar - Theme.HermesAndroid / Material3 */}
      <header style={{background:SKY,padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <b>Hermes WebUI</b>
        <div style={{display:'flex',gap:8}}>
          <button onClick={()=>setScreen('web')} style={{background:'#fff',color:INK,border:'none',padding:'6px 12px',borderRadius:20}}>Web</button>
          <button onClick={()=>setScreen('settings')} style={{background:'rgba(255,255,255,.2)',color:'#fff',border:'none',padding:'6px 12px',borderRadius:20}}>Settings</button>
        </div>
      </header>

      {screen==='web' ? (
        <div style={{padding:16}}>
          <div style={{display:'flex',gap:8}}>
            <input value={url} onChange={e=>setUrl(e.target.value)} style={{flex:1,padding:12,borderRadius:8,border:'1px solid #333',background:'#1a2a35',color:'#fff'}} />
            <button onClick={load} style={{background:SKY,color:'#fff',border:'none',padding:'12px 16px',borderRadius:8}}>Load</button>
          </div>

          {/* WebShell.kt logic */}
          {isLoading && <div style={{textAlign:'center',padding:40}}><div style={{fontSize:32}}>↻</div><p>Loading… Pull to refresh</p></div>}
          {err && <div style={{background:'#222',padding:24,borderRadius:12,textAlign:'center',marginTop:16}}>
            <h3>{isOffline ? 'You are offline' : 'Unable to open Hermes'}</h3>
            <p>{err}</p>
            {isReconnecting && <p style={{color:SKY}}>Reconnecting…</p>}
            <button onClick={load} style={{background:SKY,padding:'10px 20px',border:'none',borderRadius:8,color:'#fff',marginRight:8}}>Retry</button>
            <button onClick={()=>window.open(url,'_blank')} style={{padding:'10px 20px',borderRadius:8,marginTop:8}}>Open in browser</button>
          </div>}
          {!isLoading && !err && <div style={{marginTop:16,border:'1px solid #333',borderRadius:12,overflow:'hidden'}}><iframe src={url} title="Hermes WebShell" style={{width:'100%',height:'60vh',border:'none',background:'#fff'}} /></div>}
          <label style={{display:'flex',gap:8,marginTop:12}}><input type="checkbox" checked={isOffline} onChange={e=>setOffline(e.target.checked)} /> Simulate Offline</label>
          <label style={{display:'flex',gap:8}}><input type="checkbox" checked={isReconnecting} onChange={e=>setReconnecting(e.target.checked)} /> Simulate Reconnecting</label>
        </div>
      ) : (
        <div style={{padding:16}}>
          <h2>Settings — SettingsScreen.kt</h2>
          <p style={{color:'#aaa'}}>Edit server URL • Don&apos;t ask again for this server • Background activity</p>
          <label>Server URL</label>
          <input value={url} onChange={e=>setUrl(e.target.value)} style={{width:'100%',padding:12,borderRadius:8,background:'#1a2a35',color:'#fff',border:'1px solid #333',margin:'6px 0'}} />
          <label style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid #222'}}>Background reconnect <input type="checkbox" checked={bgReconnect} onChange={e=>setBg(e.target.checked)} /></label>
          <label style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid #222'}}>Require VPN for Tailscale (com.tailscale.ipn) <input type="checkbox" checked={vpn} onChange={e=>setVpn(e.target.checked)} /></label>
          <label>Reconnect poll: {poll} seconds between reconnect checks</label>
          <input type="range" min={1} max={30} value={poll} onChange={e=>setPoll(+e.target.value)} style={{width:'100%'}} />
          <p style={{color:'#aaa',fontSize:12}}>Pinging server every {poll} seconds to stay alive • Debug logging: Hermes debug logging — Persistent troubleshooting capture</p>
          <button onClick={()=>alert('Saved: '+url)} style={{background:SKY,padding:'12px 20px',border:'none',borderRadius:8,color:'#fff',marginTop:12}}>Save</button>
        </div>
      )}
      <footer style={{padding:12,textAlign:'center',color:'#888',fontSize:11}}>WORKSPACE — Extracted from hermes-webui/hermes-android • brand_ink #0C1B24 • brand_sky #3A86B8 • APK: app/build/outputs/apk/debug/app-debug.apk • Powered by DOLOR-STUDIO</footer>
    </div>
  )
}
