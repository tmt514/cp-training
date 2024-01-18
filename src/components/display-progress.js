import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faCheck, faExclamation, faLink, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import BrowserOnly from '@docusaurus/BrowserOnly';

export function InnerDisplayProgress({names}) {
  const getProgress = (names) => {
    return names.map((name) => `lb-${name}`).map((key) => localStorage.getItem(key)||"none")
  }
  const getFA = (v) => {
    var icon = (<FontAwesomeIcon icon={faAsterisk}  />);
    if (v === "solved") {
      icon = (<FontAwesomeIcon icon={faCheck}  />);
    } else if (v === "in-progress") {
      icon = (<FontAwesomeIcon icon={faExclamation}  />);
    }
    return icon;
  }
  const [state, setState] = useState(getProgress(names))
  const squares = state.map((v, i) => (<div className={`sq ${v||"none"}`} key={i}><div className='sq-inner'>{getFA(v)}</div></div>))
  useEffect(() => {
    const handleStorage = () => {
      // Place for a function responsible for
      // pulling and displaying local storage data
      setState(getProgress(names))
    }
  
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])
  return (<div className="sq-outer">{squares}</div>);
}

export default function DisplayProgress({names}) {
  return (<BrowserOnly fallback={(<div>loading...</div>)}>
    {() => (<InnerDisplayProgress names={names} />)}
  </BrowserOnly>);
}

