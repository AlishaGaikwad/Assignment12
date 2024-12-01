import React, {Component} from 'react'

class ProductRow extends Component {
    
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.Id);
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.Name}</td>
                <td>{this.props.Category}</td>
                <td>{this.props.Price}</td>
                <input 
  type="button" 
  className="btn btn-primary" 
  style={{ 
    backgroundColor: '#40E0D0', 
    color: 'white', 
    border: 'none', 
    margin: '5px' 
  }} 
  value="Delete" 
  onClick={this.destroy} 
/>


            </tr>
        )
    }
}

export default ProductRow