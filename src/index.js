import {render} from "preact";
import {useRef} from "preact/hooks";

const MyComponent = () => {
    const myRef = useRef(null);
    return <div ref={myRef}>Look for ref in the DOM</div>;
  }
  
render(<MyComponent/>, document.getElementById('root'));
