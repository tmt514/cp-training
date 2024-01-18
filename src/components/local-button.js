import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faCheck, faExclamation, faLink, faPaperclip } from '@fortawesome/free-solid-svg-icons'


export default function LocalButton({name}) {
  const [toggle, setToggle] = useState(localStorage.getItem(`lb-${name}`))
  useEffect(() => {
    localStorage.setItem(`lb-${name}`, toggle)
    window.dispatchEvent(new Event('storage'))
  }, [toggle]);
  var icon = (<FontAwesomeIcon icon={faAsterisk} size="lg" />);
  if (toggle === "solved") {
    icon = (<FontAwesomeIcon icon={faCheck} size="lg" />);
  } else if (toggle === "in-progress") {
    icon = (<FontAwesomeIcon icon={faExclamation} size="lg" />);
  }
  return (<div className={`lb ${toggle||"none"}`} style={{cursor: 'pointer'}} onClick={() => {
    if (toggle === null || toggle === undefined || toggle === "none") {
      setToggle("solved")
    } else if (toggle === "solved") {
      setToggle("in-progress")
    } else {
      setToggle("none")
    }
  }}>{icon}</div>)
}
