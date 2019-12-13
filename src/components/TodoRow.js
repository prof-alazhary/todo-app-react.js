import React from 'react';
import { Checkbox } from 'cit-retail10-react-common';

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChecke(e) {
        if (e.target.nodeName == "LI") {
            this.props.onTodoChecked(e.target.id);
        }
    }
    handleRemove(id, e) {
        this.props.onTodoRemoved(id)
    }
    render() {
        const { checked } = this.state || {};
        return (
            <li
                onClick={this.handleChecke.bind(this)}
                className={this.props.checked ? 'checked' : ''}
                id={this.props.id}
            >
                {this.props.title}
                <Checkbox
                    inputProps={{ 'data-test': 'compareCheckBox', 'aria-label': 'Add to comparison checkbox' }}
                    className="addToCompare-checkbox"
                    checked={checked}
                    disabled={false}
                    onChange={d => {
                        this.setState({ checked: !checked })
                    }}
     
                            value="addedToCompare"
                            label="Checkbox"
                    style={{ padding: 0, marginRight: 10, marginLeft: 1 }}
                />
                {/* <Image
                                id="product-view-img"
                                alt={"hamada"}
                                width={92}
                                height={92}
                                style={{ objectFit: "contain", minWidth: 92 }}
                                src={"https://via.placeholder.com/150"}
                    /> */}
                <span onClick={this.handleRemove.bind(this, this.props.id)} className="close">×</span>
            </li>
        );
    }
}

export default TodoRow;
