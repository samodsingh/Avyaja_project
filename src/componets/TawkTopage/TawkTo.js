import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function TawkTo() {
    const tawkMessengerRef = useRef();

    // const handleMinimize() => {
    //     tawkMessengerRef.current.minimize();
    // };

    return (
        <div className="Tawkto" style={{color:"red"}}>
            <button style={{color:"red",width:100}} > Minimize the Chat </button>
             <h1>samod singh TawkTo page</h1>
            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"
                ref={tawkMessengerRef}/>
        </div>
    );
}

export default TawkTo;