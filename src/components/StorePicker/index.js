import React from 'react';
import { getFunName } from '../../helpers';


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (e) => {
        // 1. Stop form submitting
        e.preventDefault();
       // 2. Get Text from input
        const store = this.myInput.current.value;
       // 3. Go to store/value
        this.props.history.push(`/store/${store}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore} >
                <h2>Please enter store Name</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                    
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;