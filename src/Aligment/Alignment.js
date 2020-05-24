import React, { useEffect,useState } from 'react'

function Aligment({children, ignoreButtonSize}) {
    
    const [height, setHeight] = useState(0)
    useEffect(() => {
      if (ignoreButtonSize) 
      {
        setHeight(
          document.documentElement.clientHeight - 
          document.querySelector('.navbar').clientHeight
        );

        window.onresize = () => {
          setHeight(
             document.documentElement.clientHeight - 
             document.querySelector('.navbar').clientHeight
          );
        }
      }
      else {
        setHeight(
          document.documentElement.clientHeight - 
          document.querySelector('.navbar').clientHeight - 
          document.querySelector('.Arrow').clientHeight - 40 // 40 - смещение кнопки относительно края нижнего, т.е ее размер + 40
        );
        
        window.onresize = () => {
          setHeight(
             document.documentElement.clientHeight - 
             document.querySelector('.navbar').clientHeight - 
             document.querySelector('.Arrow').clientHeight - 40
          );
        }
      }
      return function cleanup() {
        window.onresize = 0;
      }
    })
    
    if (document.documentElement.clientWidth > 576)
    {
      return (
        <div style={{height: height,  display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            {children}
        </div>
    );
    }
    else {
      return (
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            {children}
        </div>
    );
    }
    
}

export default Aligment